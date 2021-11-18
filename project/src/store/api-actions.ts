import {ThunkActionResult} from '../types/action';
import {setFilms, setPromo, requireAuthorization, requireLogout, setFilmsFilter, setFilm} from './action';
import {APIRoute, AuthorizationStatus} from '../types/api';
import { ServerMovie } from '../types/small-film-card';
import {adaptFilmToClientFilms, adaptFilmToClientPromo} from '../services/adapter';
import { AuthData } from '../types/auth-data';
import {saveToken, dropToken, Token} from '../services/token';

export const loadFilms = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerMovie[]>(APIRoute.Films);
    dispatch(setFilms(adaptFilmToClientFilms(data)));
  };
export const loadFilmsFilter = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerMovie[]>(APIRoute.Films);
    dispatch(setFilmsFilter(adaptFilmToClientFilms(data)));
  };
export const loadFilmsFavorite = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerMovie[]>(APIRoute.Favorite);
    dispatch(setFilms(adaptFilmToClientFilms(data)));
  };

export const loadPromo = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerMovie>(APIRoute.Promo);
    dispatch(setPromo(adaptFilmToClientPromo(data)));
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(loadPromo());
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
    dispatch(loadPromo());
  };

export const loadFavoriteStatus = (id: string | undefined): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(`${APIRoute.Films}/${id}`);
    dispatch(setFilm(adaptFilmToClientPromo(data)));
  };
