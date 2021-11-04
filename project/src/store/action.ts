import {AuthorizationStatus} from '../types/api';
import {SmallCards, SmallFilmCard} from '../types/small-film-card';

export const setGenre = (genre:string) =>  ({
  type: 'SET_GENRE',
  payload: { genre},
} as const);


export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: 'AUTORISATION',
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: 'LOG_OUT',
} as const);

export const setFilms = (films: SmallCards) => ({
  type: 'SET_FILMS',
  payload: {films},
} as const);

export const setMovies = (movies: SmallCards) => ({
  type: 'SET_MOVIES',
  payload: {movies},
} as const);

export const setPromo = (promo:SmallFilmCard) =>  ({
  type: 'SET_PROMO',
  payload: { promo },
} as const);

export const setFavorite = (films: SmallCards) => ({
  type: 'SET_FILMS_FAVORITE',
  payload: {films},
} as const);


