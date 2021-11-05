import { SmallFilmCard, ServerMovie } from '../types/small-film-card';

export const adaptFilmToClient = (film: ServerMovie): SmallFilmCard => {
  const {
    name,
    description,
    rating,
    director,
    genre,
    released,
    id,
    starring,
  } = film;


  return {
    id,
    title: name,
    imgSrc: film['preview_image'],
    previewImage: film['poster_image'],
    backgroundImage: film['background_image'],
    backgroundColor: film['background_color'],
    videoLink: film['video_link'],
    previewVideoLink: film['preview_video_link'],
    description,
    rating,
    scoresCount: film['scores_count'],
    director,
    starring,
    runTime: film['run_time'],
    genre,
    released,
    isFavorite: film['is_favorite'],
    comments: film['comments'],
  };
};

export const adaptFilmToClientPromo = (film: ServerMovie): SmallFilmCard  =>  adaptFilmToClient(film);

export const adaptFilmToClientFilms = (film: ServerMovie[]): SmallFilmCard[]  => film.map((item) => adaptFilmToClient(item));