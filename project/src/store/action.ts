/* eslint-disable no-console */

export const setGenre = (genre: string) : any => ({
  type: 'SET_GENRE',
  payload: { genre },
});
