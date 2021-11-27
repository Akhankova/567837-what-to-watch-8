import { FilmDataState } from '../../types/state';
import { setGenre, setFilms } from '../action';
import { createReducer } from '@reduxjs/toolkit';

export const initialState: FilmDataState= {
  genre: 'All genres',
  movies: [],
  isDataLoaded: false,
};

export const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
      state.isDataLoaded = true;
    })
    .addCase(setFilms, (state, action) => {
      state.movies = action.payload.films.length ? action.payload.films : state.movies;
      state.isDataLoaded = true;
    });
});
