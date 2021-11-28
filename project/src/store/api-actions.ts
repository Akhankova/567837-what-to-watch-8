import {ThunkActionResult} from '../types/action';
import {setFilms, setPromo, requireAuthorization, setFilm, requireLogout, changeUser} from './action';
import {APIRoute, AuthorizationStatus} from '../types/api';
import { ServerMovie } from '../types/small-film-card';
import {adaptFilmToClientFilms, adaptFilmToClientPromo, adaptToClientUser} from '../services/adapter';
import { AuthData } from '../types/auth-data';
import {dropToken, saveToken} from '../services/token';
import { toast } from 'react-toastify';
import { UserFromServer } from '../types/user';
import { ErrorText, ERROR_HANDLER_VALUE } from '../const';
import 'react-toastify/dist/ReactToastify.css';

export const loadFilms = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<ServerMovie[]>(APIRoute.Films);
      dispatch(setFilms(adaptFilmToClientFilms(data)));
    } catch {
      toast.info(ErrorText.LoginError);
    }
  };

export const loadPromo = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<ServerMovie>(APIRoute.Promo);
      dispatch(setPromo(adaptFilmToClientPromo(data)));
    } catch {
      toast.info(ErrorText.LoginError);
    }
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

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.post<UserFromServer>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(changeUser(adaptToClientUser(data)));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(loadPromo());
    } catch {
      toast.info(ErrorText.LoginError);
    }
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(changeUser(adaptToClientUser(data)));
    } catch {
      return void ERROR_HANDLER_VALUE;
    }
  };
