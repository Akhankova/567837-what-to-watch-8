import { SmallFilmCard } from '../../types/small-film-card';
import { FilmDateState } from '../../types/state';
import { setFilm } from '../action';
import { createReducer } from '@reduxjs/toolkit';

export const initialState: FilmDateState= {
  film: {} as SmallFilmCard || null,
};

export const filmData = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilm, (state, action) => {
      state.film = action.payload.film;
    });
});
