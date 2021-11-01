import {setGenre, requireAuthorization, requireLogout, setFilms, setPromo} from '../store/action';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

//export type GenresAction = ReturnType<typeof setGenre>;

////export type AutorisationAction = ReturnType<typeof requireAuthorization>;

//export type LogOutAction = ReturnType<typeof requireLogout>;

//export type FilmsAction = ReturnType<typeof setFilms>;

export type Actions =
  | ReturnType<typeof setGenre>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof setFilms>
  | ReturnType<typeof setPromo>;
export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

