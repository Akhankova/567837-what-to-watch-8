import {combineReducers} from 'redux';
import {favoriteData} from '../store/favorite-data/favorite-data';
import {filmsData} from '../store/films-data/films-data';
import {promoData} from '../store/promo-data/promo-data';
import {userData} from '../store/user-data/user-data';

export enum NameSpace {
   dataFavorite = 'DATA_FAVORITE',
   dataFilms = 'DATA_FILMS',
   dataUser = 'DATA_USER',
   dataPromo = 'DATA_PROMO',
 }

export const rootReducer = combineReducers({
  [NameSpace.dataFavorite]: favoriteData,
  [NameSpace.dataFilms]: filmsData,
  [NameSpace.dataUser]: userData,
  [NameSpace.dataPromo]: promoData,
});

export type RootState = ReturnType<typeof rootReducer>;
