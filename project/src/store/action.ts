import { createAction } from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../types/api';
import {SmallCards, SmallFilmCard} from '../types/small-film-card';

export const setGenre = createAction(
  'SET_GENRE',
  (genre:string) => ({
    payload: { genre},
  }),
);

export const requireAuthorization = createAction(
  'AUTORISATION',
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction('LOG_OUT');

export const setFilms = createAction(
  'SET_FILMS',
  (films: SmallCards) => ({
    payload: {films},
  }),
);

export const setFilmsFilter = createAction(
  'SET_FILMS_FILTER',
  (moviesFilter: SmallCards) => ({
    payload: {moviesFilter},
  }),
);

export const setPromo = createAction(
  'SET_PROMO',
  (promo:SmallFilmCard) => ({
    payload: { promo },
  }),
);

export const setFavorite = createAction(
  'SET_FILMS_FAVORITE',
  (films: SmallCards) => ({
    payload: {films},
  }),
);

