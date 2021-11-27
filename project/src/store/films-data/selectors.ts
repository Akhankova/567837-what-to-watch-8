import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {SmallCards} from '../../types/small-film-card';
import { createSelector } from 'reselect';

export const getGenre = (state: State): string => state[NameSpace.DataFilms].genre;
export const getMovies = (state: State): SmallCards => state[NameSpace.DataFilms].movies;
export const getIsDataFilmsLoadedStatus = (state: State): boolean => state[NameSpace.DataFilms].isDataLoaded;

export const getFilterMovies = createSelector<State, SmallCards, string, SmallCards>(
  getMovies,
  getGenre,
  (movies, genre) =>
    genre !== 'All genres' ? movies.filter((film) => film.genre  === genre) : movies,
);
