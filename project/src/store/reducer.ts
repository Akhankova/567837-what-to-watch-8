/* eslint-disable no-console */

//import {smallCardFilm} from '../mocks/films';
import {SmallFilmCard} from '../types/small-film-card';
import { State } from '../types/state';
//import { setGenre } from './action';
import {AuthorizationStatus} from '../types/api';
import {Actions} from '../types/action';

export const initialState: State= {
  genre: 'All genres',
  movies: [],
  filterMovies: [],
  promoFilm: {} as SmallFilmCard || null,
  countCardStep: 8,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  isDataPromoLoaded: false,
};

export const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case 'SET_GENRE':
      return {
        ...state,
        genre: action.payload.genre,
        filterMovies: state.movies.filter((film:SmallFilmCard) => action.payload.genre !== 'All genres'? film.genre === action.payload.genre : film),
        countCardStep: 0,
        promoFilm: state.movies.filter((film:SmallFilmCard) => action.payload.genre !== 'All genres'? film.genre === action.payload.genre : film)[0],
        movies: state.movies.filter((film:SmallFilmCard) => action.payload.genre === 'All genres'? film : film),
        isDataLoaded: true,
        isDataPromoLoaded: true,
      };
    case 'SET_FILMS':
      return {
        ...state,
        movies: action.payload.films,
        isDataLoaded: true,
      };
    case 'SET_PROMO':
      console.log(action.payload);
      return {
        ...state,
        promoFilm: action.payload.promo,
        isDataPromoLoaded: true,
      };

    default:
      return state;
  }
};
