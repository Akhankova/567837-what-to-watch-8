export const BACKEND_URL = 'https://8.react.pages.academy/wtw';

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

