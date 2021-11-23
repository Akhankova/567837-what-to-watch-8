export const BACKEND_URL = 'https://8.react.pages.academy/wtw';
export const AUTH_TOKEN_KEY_NAME = 'wtw-token';
export const LOGIN_ERROR = 'Произошла ошибка регистрации. В поле «логин» должен вводиться корректный домен. Повторите попытку';
export const FOR_PERCENT = 100;
export const INITIAL_VALUE = 0;

export const RegularExpression = {
  RegularExpressionPassword: /(?=[A-Za-z0-9])(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+/,
  RegularExpressionEmail: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+/,
} as const;

export enum GenresLengthValue {
  MinValue = 0,
  MaxValue = 9,
}

export enum ErrorRoute {
  PageNotFound = 404,
  ErrorNoAuth = 401,
}

export enum FilmsCount {
  StartFilmsCount = 8,
  CountFilmsStep = 8,
  InitValueMoviesWithFilter = 0,
  CountFilmsWithLikes = 4,
}

export enum ReviewsInfo {
  ReviewsMinLength = 0,
  MaxLengthComment = 400,
  MinLengthComment = 50,
  MinValueRating = 0,
}

export enum Time {
  Minutes = 60,
  Seconds = 60,
  ValueForTime = 10,
  TimeForMouseOver = 1000,
  RequestTimeout = 5000,
  InitialValueTime = 0,
}

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

export enum Rating {
  RatingMin = 1,
  RatingMax = 10,
  RatingValueTwo = 2,
  RatingValueThree = 3,
  RatingValueFour = 4,
  RatingValueFive = 5,
  RatingValueSix = 6,
  RatingValueSeven = 7,
  RatingValueEight = 8,
  RatingValueNine = 9,
}

export enum RatingValue {
  BadRating = 3,
  NormalRating = 5,
  GoodRating = 8,
  VeryGoodRating = 10,
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const getRatingText = (element:number): string | undefined => {
  switch (true) {
    case (element<RatingValue.BadRating):
      return 'Bad';
    case (element < RatingValue.NormalRating):
      return 'Normal';
    case (element < RatingValue.GoodRating):
      return 'Good';
    case (element < RatingValue.VeryGoodRating):
      return 'Very good';
    case (element === RatingValue.VeryGoodRating):
      return 'Awesome';
  }
};

