import { FilmDataState } from '../../types/state';
import {SmallFilmCard} from '../../types/small-film-card';
import {setGenre, setFilms, setFilmsFilter} from '../action';
import { createReducer } from '@reduxjs/toolkit';

export const initialState: FilmDataState= {
  genre: 'All genres',
  movies: [],
  filterMovies: [],
  countCardStep: 8,
  isDataLoaded: false,
};

export const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
      state.countCardStep = 0;
      state.isDataLoaded = true;
    })
    .addCase(setFilms, (state, action) => {
      state.movies = action.payload.films.length ? action.payload.films : state.movies;
      state.isDataLoaded = true;
    })
    .addCase(setFilmsFilter, (state) => {
      state.filterMovies = state.movies.filter((film:SmallFilmCard) => state.genre !== 'All genres'? film.genre === state.genre : film);
    });
});
