import { filmsData } from './films-data';
import { makeFakeFilmList } from '../../mocks/mocks';
import { setFilms } from '../action';
import { SmallCards } from '../../types/small-film-card';

const movies = makeFakeFilmList(10);

describe('Reducer: filmData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmsData(void 0, { type: 'UNKNOWN_ACTION' })).toEqual({
      movies: [],
      isDataLoaded: false, genre: 'All genres',
    });
  });

  it('should update films by load films', () => {
    const state = { movies: [] as SmallCards, isDataLoaded: false, genre: 'All genres'};
    expect(filmsData(state, setFilms(movies))).toEqual({
      movies,
      isDataLoaded: true, genre: 'All genres',
    });
  });
});
