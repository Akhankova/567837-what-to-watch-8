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
};

export type Movie = {
  id: number;
  name: string;
  previewImage: string;
  posterImage: string;
  backgroundImage: string;
  genre: string;
  released: number;
  isFavorite: boolean;
};
