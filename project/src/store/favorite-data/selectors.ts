import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {SmallCards} from '../../types/small-film-card';

export const getFavoriteFilmsLoadedStatus = (state: State): boolean => state[NameSpace.dataFavorite].isDataLoadedFavorite;
export const getFavoriteFilms = (state: State): SmallCards => state[NameSpace.dataFavorite].moviesFavorite;
