/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {smallCardFilm} from '../mocks/films';

import {SmallFilmCard} from '../types/small-film-card';
import { setGenre } from './action';

export const initialState = {
  genre: 'All genres',
  movies: smallCardFilm,
};

export const reducer = (state = initialState, action: ReturnType<typeof setGenre>) => {
  switch (action.type) {
    case 'SET_GENRE':

      return {
        ...state,
        genre: action.payload,
        movies: state.movies.filter((film:SmallFilmCard) => film.genre === action.payload),

      };
    default:
      return state;
  }
};
