import { promoData } from './promo-data';
import { makeFakeFilm } from '../../mocks/mocks';
import { setPromo } from '../action';
import { SmallFilmCard } from '../../types/small-film-card';

const promoFilm = makeFakeFilm();

describe('Reducer: filmData', () => {
  it('without additional parameters should return initial state', () => {
    expect(promoData(void 0, { type: 'UNKNOWN_ACTION' })).toEqual({
      promoFilm: {} as SmallFilmCard || null,
    });
  });

  it('should update film by load film', () => {
    const state = { promoFilm: {} as SmallFilmCard || null};
    expect(promoData(state, setPromo(promoFilm))).toEqual({
      promoFilm,
    });
  });
});
