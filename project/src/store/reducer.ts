import {SmallFilmCard} from '../types/small-film-card';
import { State } from '../types/state';
import {AuthorizationStatus} from '../types/api';
import {Actions} from '../types/action';

export const initialState: State= {
  genre: 'All genres',
  movies: [],
  filterMovies: [],
  moviesFavorite: [],
  promoFilm: {} as SmallFilmCard || null,
  countCardStep: 8,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  isDataPromoLoaded: false,
  isDataPromoLoadedFavorite: false,
};

export const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case 'SET_GENRE':
      return {
        ...state,
        genre: action.payload.genre,
        countCardStep: 0,
        isDataLoaded: true,
        isDataPromoLoaded: true,
      };
    case 'SET_FILMS':
      return {
        ...state,
        movies: action.payload.films.length ? action.payload.films : state.movies,
        isDataLoaded: true,
      };
    case 'SET_FILMS_FILTER':
      return {
        ...state,
        filterMovies: state.movies.filter((film:SmallFilmCard) => state.genre !== 'All genres'? film.genre === state.genre : film),
      };
    case 'SET_FILMS_FAVORITE':
      return {
        ...state,
        moviesFavorite: action.payload.films,
        isDataPromoLoadedFavorite: true,
      };
    case 'SET_PROMO':
      return {
        ...state,
        promoFilm: action.payload.promo,
        isDataPromoLoaded: true,
      };
    case 'AUTORISATION':
      return {...state, authorizationStatus: action.payload};
    case 'LOG_OUT':
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};

    default:
      return state;
  }
};
