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
  isDataLoaded: boolean,
};

export type PromoDateState = {
  promoFilm: SmallFilmCard,
};

export type FilmDateState = {
  film: SmallFilmCard,
};

export type FavoriteDateState = {
  moviesFavorite: SmallCards,
};

export type State = RootState;
