import {SmallCards, SmallFilmCard} from '../types/small-film-card';
import {AuthorizationStatus} from '../types/api';

export type State = {
  genre: string,
  movies: SmallCards,
  promoFilm: SmallFilmCard,
  filterMovies: SmallCards,
  countCardStep: number,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  isDataPromoLoaded: boolean,
  moviesFavorite: SmallCards,
  isDataPromoLoadedFavorite: boolean,
};
