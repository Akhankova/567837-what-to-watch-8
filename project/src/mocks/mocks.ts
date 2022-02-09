import { name, lorem, datatype, internet, image } from 'faker';
import { Comment, SmallFilmCard } from '../types/small-film-card';
import { User } from '../types/user';

export const makeFakeUser = (token = ''): User => ({
  id: datatype.number(),
  avatarUrl: internet.avatar(),
  name: name.firstName(),
  email: internet.email(),
  token,
});

export const makeFakeFilm = (): SmallFilmCard => ({
  id: datatype.number(),
  title: name.title(),
  backgroundColor: internet.color(),
  backgroundImage: image.imageUrl(),
  description: lorem.paragraph(),
  director: name.firstName(),
  genre: datatype.string(),
  isFavorite: datatype.boolean(),
  imgSrc: image.imageUrl(),
  previewImage: image.imageUrl(),
  previewVideoLink: internet.url(),
  videoLink: internet.url(),
  rating: datatype.number({min: 0, max: 10, precision: 2}),
  released: datatype.datetime().getFullYear(),
  runTime: datatype.number(),
  scoresCount: datatype.number(),
  starring: datatype.array(),
});

export const makeFakeComment = (): Comment => ({
  id: datatype.number(),
  comment: lorem.paragraph(),
  rating: datatype.number(),
  date: datatype.datetime().toISOString(),
  user: {
    id: datatype.number(),
    name: name.firstName(),
  },
});

export const makeFakeCommentList = (count: number): Array<Comment> =>
  new Array(count).fill(null).map(() => makeFakeComment());

export const makeFakeFilmList = (count: number): Array<SmallFilmCard> =>
  new Array(count).fill(null).map(() => makeFakeFilm());
