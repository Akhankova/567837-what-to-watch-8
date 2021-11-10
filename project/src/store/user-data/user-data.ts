import { AuthorizationStatusState } from '../../types/state';
import {AuthorizationStatus} from '../../types/api';
import {requireAuthorization, requireLogout} from '../action';
import { createReducer } from '@reduxjs/toolkit';

export const initialState: AuthorizationStatusState= {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});

