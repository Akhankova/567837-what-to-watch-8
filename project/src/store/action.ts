export const setGenre = (genre:string) =>  ({
  type: 'SET_GENRE',
  payload: { genre },
} as const);


