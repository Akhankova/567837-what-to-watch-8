import {setGenre, requireAuthorization, requireLogout, setFilms, setPromo, setFavorite, setFilmsFilter} from '../store/action';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

export type Actions =
  | ReturnType<typeof setGenre>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof setFilmsFilter>
  | ReturnType<typeof setFilms>
  | ReturnType<typeof setFavorite>
  | ReturnType<typeof setPromo>;
export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

