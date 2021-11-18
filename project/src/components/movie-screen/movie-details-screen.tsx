import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { SmallFilmCard } from '../../types/small-film-card';
import { api } from '../../index';
import { APIRoute} from '../../types/api';
import { useEffect } from 'react';
import { adaptFilmToClientPromo } from '../../services/adapter';
import { BACKEND_URL, ERROR_ROUTE } from '../../const';
import { getTime } from '../../utils';

export function MovieDetailsScreen(): JSX.Element {

  const numberCurrentFilmId = useParams<{id?: string}>().id;
  const [ movie, setMovie ] = useState<SmallFilmCard>();

  const history = useHistory();

  useEffect(() => {
    api.get(`${BACKEND_URL}${APIRoute.Films}/${numberCurrentFilmId}`)
      .then((response) => setMovie(adaptFilmToClientPromo(response.data)))
      .catch(() => history.push(`/${ERROR_ROUTE}`));
  }, [ history, numberCurrentFilmId]);

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{movie?.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {movie?.starring}
          </span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{getTime(Number(movie?.runTime))}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{movie?.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{movie?.released}</span>
        </p>
      </div>
    </div>
  );
}

export default MovieDetailsScreen;
