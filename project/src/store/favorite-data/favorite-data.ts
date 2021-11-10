import { FavoriteDateState } from '../../types/state';
import { createReducer } from '@reduxjs/toolkit';
import {setFavorite} from '../action';

export const initialState: FavoriteDateState= {
  moviesFavorite: [],
  isDataLoadedFavorite: false,
};

export const favoriteData = createReducer(initialState, (builder) => {
  builder
    .addCase(setFavorite, (state, action) => {
      state.moviesFavorite = action.payload.films;
      state.isDataLoadedFavorite = true;
    });
});
