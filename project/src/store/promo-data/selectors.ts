import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {SmallFilmCard} from '../../types/small-film-card';

export const getIsDataPromoLoadedStatus = (state: State): boolean => state[NameSpace.dataPromo].isDataPromoLoaded;
export const getPromoFilm = (state: State): SmallFilmCard => state[NameSpace.dataPromo].promoFilm;
