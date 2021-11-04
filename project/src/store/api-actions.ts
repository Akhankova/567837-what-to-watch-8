import {ThunkActionResult} from '../types/action';
import {setFilms, setPromo, requireAuthorization, requireLogout} from './action';
import {APIRoute, AuthorizationStatus} from '../types/api';
import { ServerMovie } from '../types/small-film-card';
import {adaptFilmToClientFilms, adaptFilmToClientPromo} from '../services/adapter';
import { AuthData } from '../types/auth-data';
import {saveToken, dropToken, Token} from '../services/token';
import {toast} from 'react-toastify';

const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';

export const loadFilms = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerMovie[]>(APIRoute.Films);
    dispatch(setFilms(adaptFilmToClientFilms(data)));
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
export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };


