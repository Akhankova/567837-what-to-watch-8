import {useHistory} from 'react-router-dom';
import {  useParams } from 'react-router-dom';
import {useState} from 'react';
import {SmallFilmCard} from '../../types/small-film-card';
import { api } from '../../index';
import {APIRoute} from '../../types/api';
import { useEffect } from 'react';
import { adaptFilmToClientPromo} from '../../services/adapter';
import { BACKEND_URL } from '../../const';
import React from 'react';


export function MovieScreen(): JSX.Element {
  const history = useHistory();
  const numberCurrentFilmId = useParams<{id?: string}>().id;
  const [ movie, setMovie ] = useState<SmallFilmCard>();

  const getRatingText = (element:number) => {
    switch (true) {
      case (element<3):
        return 'Bad';
      case (element < 5):
        return 'Normal';
      case (element < 8):
        return 'Good';
      case (element < 10):
        return 'Very good';
      case (element === 10):
        return 'Awesome';
    }
  };

  useEffect(() => {
    api.get(`${BACKEND_URL}${APIRoute.Films}/${numberCurrentFilmId}`)
      .then((response) => setMovie(adaptFilmToClientPromo(response.data)))
      .catch(() => history.push('/404'));
  }, [ history, numberCurrentFilmId]);

  return (

    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{movie?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingText(Number(movie?.rating))}</span>
          <span className="film-rating__count">{movie?.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {movie?.description}

        <p className="film-card__director"><strong>Director: {movie?.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {movie?.starring} and other</strong></p>
      </div>
    </React.Fragment>
  );
}

export default MovieScreen;
