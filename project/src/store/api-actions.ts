import {ThunkActionResult} from '../types/action';
import {setFilms, setPromo} from './action';
import {APIRoute} from '../types/api';
import { ServerMovie } from '../types/small-film-card';
import {adaptFilmToClientFilms, adaptFilmToClientPromo} from '../services/adapter';

export const loadFilms = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerMovie[]>(APIRoute.Films);
    dispatch(setFilms(adaptFilmToClientFilms(data)));
  };

export const loadPromo = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerMovie>(APIRoute.Promo);
    dispatch(setPromo(adaptFilmToClientPromo(data)));
  };
