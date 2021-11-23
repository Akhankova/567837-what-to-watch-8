import { AuthorizationStatusState } from '../../types/state';
import { AuthorizationStatus } from '../../types/api';
import { changeUser, requireAuthorization, requireLogout } from '../action';
import { createReducer } from '@reduxjs/toolkit';
import { INITIAL_VALUE } from '../../const';

export const initialState: AuthorizationStatusState= {
  authorizationStatus: AuthorizationStatus.Unknown,
  userUrl: {
    id: INITIAL_VALUE,
    email: '',
    name: '',
    avatarUrl: '',
    token: '',
  },
};

export const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(changeUser, (state, action) => {
      state.userUrl = action.payload;
    });
});

