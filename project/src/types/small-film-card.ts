export type SmallFilmCard = {
  id: number,
  title: string,
  imgSrc: string,
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

export type Comment = {
  id: number,
  user: CommentUser,
  rating: number,
  comment: string,
  date : string,
};

export type CommentUser = {
  id: number,
  name: string
};

export type ServerMovie = {
  ['preview_image']: string,
  ['poster_image']: string,
  ['background_image']: string,
  ['background_color']: string,
  ['scores_count']: number,
  ['video_link']: string,
  ['preview_video_link']: string,
  ['run_time']: number,
  ['is_favorite']: boolean,
  id: number,
  name: string,
  genre: string,
  released: number,
  rating: number,
  description: string,
  director: string,
  starring: string[],
}

export type CommentServer = {
  rating: number,
  comment: string,
};

export type CardComments = Comment[];

export type SmallCards = SmallFilmCard[];
