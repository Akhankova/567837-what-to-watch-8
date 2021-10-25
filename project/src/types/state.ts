import {SmallCards, SmallFilmCard} from '../types/small-film-card';

export type State = {
  genre: string,
  movies: SmallCards,
  promoFilm: SmallFilmCard,
  filterMovies: SmallCards,
  countCardStep: number;
};
