
import {smallCardFilm, smallCardFilmPromo} from '../mocks/films';
import {SmallFilmCard} from '../types/small-film-card';
import { State } from '../types/state';
import { setGenre } from './action';

export const initialState = {
  genre: 'All genres',
  movies: smallCardFilm,
  filterMovies: smallCardFilm,
  promoFilm: smallCardFilmPromo,
};

export const reducer = (state = initialState, action: ReturnType<typeof setGenre>): State => {

  switch (action.type) {

    case 'SET_GENRE':
      return {
        ...state,
        genre: action.payload.genre,
        filterMovies: state.movies.filter((film:SmallFilmCard) => film.genre === action.payload.genre),

      };
    default:
      return state;
  }
};
