export type SmallFilmCard = {
  id: number;
  title: string;
  imgSrc: string;
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
  comments: CardComments,
};

export type Comment = {
  id: number,
  user: {
    id: number,
    name: string
  },
  rating: number,
  comment: string,
  date : string,
};

export type CardComments = Comment[];

export type SmallCards = SmallFilmCard[];
