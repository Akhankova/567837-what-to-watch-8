import {AxiosInstance} from 'axios';
import {State} from './state';
import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';


export enum ActionType {
  SetGenre = 'dataFilms/setGenre',
  RequireAuthorization = 'dataUser/requireAuthorization',
  SetFilms = 'dataFilms/setFilms',
  SetFilmsFilter = 'data/setFilmsFilter',
  SetPromo = 'dataPromo/setPromo',
  SetFavorite = 'dataFavorite/setFavorite',
  SetFilm = 'dataFilm/setFilm',
  ChangeUser = 'dataUser/changeUser',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;


