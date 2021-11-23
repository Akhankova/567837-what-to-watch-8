import {combineReducers} from 'redux';
import {filmsData} from './films-data/films-data';
import {promoData} from './promo-data/promo-data';
import {filmData} from './film-data/film-data';
import {userData} from './user-data/user-data';

export enum NameSpace {
   DataFilms = 'DATA_FILMS',
   DataUser = 'DATA_USER',
   DataPromo = 'DATA_PROMO',
   DataFilm = 'DATA_FILM',
   DataUserUrl = 'DATA_USER_URL',
 }

export const rootReducer = combineReducers({
  [NameSpace.DataFilms]: filmsData,
  [NameSpace.DataUser]: userData,
  [NameSpace.DataPromo]: promoData,
  [NameSpace.DataFilm]: filmData,
  [NameSpace.DataUserUrl]: userData,
});

export type RootState = ReturnType<typeof rootReducer>;
