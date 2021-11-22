import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../types/api';
import { ActionType } from '../types/action';
import { SmallCards, SmallFilmCard } from '../types/small-film-card';
import { User } from '../types/user';

export const setGenre = createAction(
  ActionType.SetGenre,
  (genre:string) => ({
    payload: { genre},
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction('LOG_OUT');

export const setFilms = createAction(
  ActionType.SetFilms,
  (films: SmallCards) => ({
    payload: {films},
  }),
);

export const setFilmsFilter = createAction(
  ActionType.SetFilmsFilter,
  (moviesFilter: SmallCards) => ({
    payload: {moviesFilter},
  }),
);

export const setPromo = createAction(
  ActionType.SetPromo,
  (promo:SmallFilmCard) => ({
    payload: { promo },
  }),
);

export const setFavorite = createAction(
  ActionType.SetFavorite,
  (films: SmallCards) => ({
    payload: {films},
  }),
);

export const setFilm = createAction(
  ActionType.SetFilm,
  (film: SmallFilmCard) => ({
    payload: {film},
  }),
);

export const changeUser = createAction(
  ActionType.ChangeUser,
  (user: User) => ({
    payload: user,
  }),
);

