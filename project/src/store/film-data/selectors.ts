import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { SmallFilmCard } from '../../types/small-film-card';

export const getFilm = (state: State): SmallFilmCard => state[NameSpace.DataFilm].film;
