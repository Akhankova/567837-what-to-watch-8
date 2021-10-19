/* eslint-disable @typescript-eslint/no-unused-vars */

export const initialState = {
  genre: 'All genres',
  movies: [],
};

const reducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'SET_GENRE':
      return {...state, genre: action.payload};
    default:
      return state;
  }
};
