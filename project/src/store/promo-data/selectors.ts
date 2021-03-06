import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { SmallFilmCard } from '../../types/small-film-card';

export const getPromoFilm = (state: State): SmallFilmCard => state[NameSpace.DataPromo].promoFilm;
