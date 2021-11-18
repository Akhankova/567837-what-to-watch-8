export const BACKEND_URL = 'https://8.react.pages.academy/wtw';
export const REGULAR_EXPRESSION = /(?=[A-Za-z0-9])(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+/;
export const REGULAR_EXPRESSION_EMAIL = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+/;
export const COUNT_CARDS_WITH_MORE_LIKES = 4;
export const ERROR_ROUTE = 404;
export const ERROR_ROUTE_NO_AUTH = 401;
export const TIME_FOR_MOUSE_OVER = 1000;
export const AUTH_STATUS_UNKNOWN = 'UNKNOWN';
export const AUTH_STATUS_NO_AUTH= 'NO_AUTH';
export const COUNT_CARDS_STEP = 8;
export const AUTH_TOKEN_KEY_NAME = 'wtw-token';
export const MINUTES = 60;
export const SECONDS = 60;
export const INITIAL_VALUE = 0;
export const VALUE_FOR_TIME = 10;
export const REQUEST_TIMEOUT = 5000;
export const RATING_MIN = 1;
export const RATING_MAX = 10;
export const RATING_TWO = 2;
export const RATING_THREE = 3;
export const RATING_FOUR = 4;
export const RATING_FIVE = 5;
export const RATING_SIX = 6;
export const RATING_SEVEN = 7;
export const RATING_EIGHT = 8;
export const RATING_NINE = 9;

const BADRATING = 3;
const NORMAL_RATING = 5;
const GOOD_RATING = 8;
const VERY_GOOD_RATING = 10;

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

export const getRatingText = (element:number): string | undefined => {
  switch (true) {
    case (element<BADRATING):
      return 'Bad';
    case (element < NORMAL_RATING):
      return 'Normal';
    case (element < GOOD_RATING):
      return 'Good';
    case (element < VERY_GOOD_RATING):
      return 'Very good';
    case (element === VERY_GOOD_RATING):
      return 'Awesome';
  }
};

