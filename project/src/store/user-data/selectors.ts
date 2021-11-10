import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../types/api';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.dataUser].authorizationStatus;

export type AuthorizationStatusState = {
  authorizationStatus: AuthorizationStatus,
};
