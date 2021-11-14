export const BACKEND_URL = 'https://8.react.pages.academy/wtw';
export const REGULAR_EXPRESSION = /(?=[A-Za-z0-9])(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+/;
export const COUNT_CARDS_WITH_MORE_LIKES = 4;
export const FAVORITE_STATUS_NOT_FAVORITE = 0;
export const FAVORITE_STATUS_FAVORITE = 1;
export const ERROR_ROUTE = 404;
export const TIME_FOR_MOUSE_OVER = 1000;

export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Main = '/',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  FilmDetails = '/films/:id/details',
  FilmReviews = '/films/:id/reviews',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

