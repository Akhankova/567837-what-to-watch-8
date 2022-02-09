import { filmData } from './film-data';
import { makeFakeFilm } from '../../mocks/mocks';
import { setFilm } from '../action';
import { SmallFilmCard } from '../../types/small-film-card';

const film = makeFakeFilm();

describe('Reducer: filmData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmData(void 0, { type: 'UNKNOWN_ACTION' })).toEqual({
      film: {} as SmallFilmCard || null,
    });
  });

  it('should update film by load film', () => {
    const state = { film: {} as SmallFilmCard || null};
    expect(filmData(state, setFilm(film))).toEqual({
      film,
    });
  });
});
