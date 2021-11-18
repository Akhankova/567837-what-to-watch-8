import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {SmallCards} from '../../types/small-film-card';

export const getFavoriteFilms = (state: State): SmallCards => state[NameSpace.dataFavorite].moviesFavorite;
