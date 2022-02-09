import { userData } from './user-data';
import { makeFakeUser } from '../../mocks/mocks';
import { changeUser } from '../action';
import { AuthorizationStatus } from '../../const';
import { ActionType } from '../../types/action';

const userUrl = makeFakeUser();

describe('Reducer: userData', () => {
  it('without additional parameters should return initial state', () => {
    expect(userData(void 0, { type: 'UNKNOWN_ACTION' })).toEqual({
      authorizationStatus: AuthorizationStatus.Unknown,
      userUrl: {
        id: 0,
        email: '',
        name: '',
        avatarUrl: '',
        token: '',
      },
    });
  });

  it('should update film by load film', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userUrl: {
        id: 0,
        email: '',
        name: '',
        avatarUrl: '',
        token: '',
      }};
    expect(userData(state, changeUser(userUrl))).toEqual({
      authorizationStatus: AuthorizationStatus.Unknown,
      userUrl,
    });
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userUrl: {
        id: 0,
        email: '',
        name: '',
        avatarUrl: '',
        token: '',
      }};
    const requiredAuthorizationAction = {
      type: ActionType.RequireAuthorization,
      payload: AuthorizationStatus.Auth,
    };

    expect(userData(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        userUrl: {
          id: 0,
          email: '',
          name: '',
          avatarUrl: '',
          token: '',
        },
      });
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NoAuth,
      userUrl: {
        id: 0,
        email: '',
        name: '',
        avatarUrl: '',
        token: '',
      }};
    const requiredAuthorizationAction = {
      type: ActionType.RequireAuthorization,
      payload: AuthorizationStatus.NoAuth,
    };

    expect(userData(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth,
        userUrl: {
          id: 0,
          email: '',
          name: '',
          avatarUrl: '',
          token: '',
        }});
  });
});
