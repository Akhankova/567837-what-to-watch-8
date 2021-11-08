import {SmallCards, SmallFilmCard} from '../types/small-film-card';
import {AuthorizationStatus} from '../types/api';
import {RootState} from '../store/root-reducer';

export type AuthorizationStatusState = {
  authorizationStatus: AuthorizationStatus,
};

export type FilmDataState = {
  genre: string,
  movies: SmallCards,
  filterMovies: SmallCards,
  countCardStep: number,
  isDataLoaded: boolean,
};

export type PromoDateState = {
  promoFilm: SmallFilmCard,
  isDataPromoLoaded: boolean,
};

export type FavoriteDateState = {
  moviesFavorite: SmallCards,
  isDataLoadedFavorite: boolean,
};

export type State = RootState;
