import { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import {APIRoute} from '../../types/api';
import {CardComments} from '../../types/small-film-card';
import {useState} from 'react';
import { api } from '../../index';
import { BACKEND_URL } from '../../const';

export function MovieReviewsScreen(): JSX.Element {
  const numberCurrentFilmId = useParams<{id?: string}>().id;
  const [ reviews, setReviews ] = useState<CardComments>([]);
  const history = useHistory();

  useEffect(() => {
    api.get(`${BACKEND_URL}${APIRoute.Comments}/${numberCurrentFilmId}`)
      .then((response) => setReviews(response.data))
      .catch(() => history.push('/404'));
  }, [history, numberCurrentFilmId]);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.length > 0 ? reviews.map((comment) => {
          const keyValue = comment.id;
          return (
            <div key={keyValue} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{comment.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{comment.user.name}</cite>
                  <time className="review__date" dateTime="2016-12-24">{dayjs(comment.date).format('MMMM DD, YYYY')}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{comment.rating}</div>
            </div>);}) : ' '}
      </div>
    </div>
  );
}

export default MovieReviewsScreen;
