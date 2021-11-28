import {AxiosInstance} from 'axios';
import {State} from './state';
import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';


export enum ActionType {
  SetGenre = 'dataFilms/setGenre',
  RequireAuthorization = 'dataUser/requireAuthorization',
  SetFilms = 'dataFilms/setFilms',
  SetPromo = 'dataPromo/setPromo',
  SetFilm = 'dataFilm/setFilm',
  ChangeUser = 'dataUser/changeUser',
  StartRequest = 'dataFilm/startRequest',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;


