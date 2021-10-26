
import {smallCardFilm, smallCardFilmPromo} from '../mocks/films';
import {SmallFilmCard} from '../types/small-film-card';
import { State } from '../types/state';
import { setGenre } from './action';

export const initialState = {
  genre: 'All genres',
  movies: smallCardFilm,
  filterMovies: smallCardFilm,
  promoFilm: smallCardFilmPromo,
  countCardStep: 8,
};

export const reducer = (state = initialState, action: ReturnType<typeof setGenre>): State => {
  switch (action.type) {
    case 'SET_GENRE':
      return {
        ...state,
        genre: action.payload.genre,
        filterMovies: state.movies.filter((film:SmallFilmCard) => action.payload.genre !== 'All genres'? film.genre === action.payload.genre : film),
        countCardStep: 0,
      };

    default:
      return state;
  }
};
