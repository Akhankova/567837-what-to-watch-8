import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {SmallCards} from '../../types/small-film-card';

export const getGenre = (state: State): string => state[NameSpace.dataFilms].genre;
export const getMovies = (state: State): SmallCards => state[NameSpace.dataFilms].movies;
export const getFilterMovies = (state: State): SmallCards => state[NameSpace.dataFilms].filterMovies;
export const getIsDataFilmsLoadedStatus = (state: State): boolean => state[NameSpace.dataFilms].isDataLoaded;
