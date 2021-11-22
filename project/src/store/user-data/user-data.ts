import { AuthorizationStatusState } from '../../types/state';
import { AuthorizationStatus } from '../../types/api';
import { changeUser, requireAuthorization, requireLogout } from '../action';
import { createReducer } from '@reduxjs/toolkit';

export const initialUser = {
  id: 0,
  email: '',
  name: '',
  avatarUrl: '',
  token: '',
};

export const initialState: AuthorizationStatusState= {
  authorizationStatus: AuthorizationStatus.Unknown,
  userUrl: initialUser,
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

