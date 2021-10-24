export type GenresAction = {
  type: string;
  payload:  {genre: string};
};

export const setGenre = (genre: string): GenresAction =>  ({
  type: 'SET_GENRE',
  payload: { genre },
});
