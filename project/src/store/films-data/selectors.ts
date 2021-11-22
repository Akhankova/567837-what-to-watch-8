import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {SmallCards} from '../../types/small-film-card';

export const getGenre = (state: State): string => state[NameSpace.DataFilms].genre;
export const getMovies = (state: State): SmallCards => state[NameSpace.DataFilms].movies;
export const getFilterMovies = (state: State): SmallCards => state[NameSpace.DataFilms].filterMovies;
export const getIsDataFilmsLoadedStatus = (state: State): boolean => state[NameSpace.DataFilms].isDataLoaded;
