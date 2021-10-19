/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const setGenre = (genre: string) => ({
  type: 'SET_GENRE',
  payload: genre,
});
