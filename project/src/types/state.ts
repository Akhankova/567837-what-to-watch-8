import { SmallCards, SmallFilmCard } from './small-film-card';
import { AuthorizationStatus } from './api';
import { RootState } from '../store/root-reducer';
import { User } from './user';

export type AuthorizationStatusState = {
  authorizationStatus: AuthorizationStatus,
  userUrl: User,
};

export type FilmDataState = {
  genre: string,
  movies: SmallCards,
  isDataLoaded: boolean,
};

export type PromoDateState = {
  promoFilm: SmallFilmCard,
};

export type FilmDateState = {
  film: SmallFilmCard,
};

export type State = RootState;
