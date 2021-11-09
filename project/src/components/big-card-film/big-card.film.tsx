import React from 'react';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import { generatePath, useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { AuthorizationStatus } from '../../const';
import {useState} from 'react';
import {SmallFilmCard} from '../../types/small-film-card';
import { api } from '../../index';
import {APIRoute} from '../../types/api';
import { useEffect } from 'react';
import { adaptFilmToClientPromo} from '../../services/adapter';
import { BACKEND_URL } from '../../const';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import HeaderScreen from '../header/header';
import { MovieScreen } from '../movie-screen/movie-screen';
import { MovieReviewsScreen } from '../movie-screen/movie-reviews-screen';
import { MovieDetailsScreen } from '../movie-screen/movie-details-screen';
import { FilmCardTabs } from './tabs';

export function FilmBigCard(): JSX.Element {
  const history = useHistory();
  const authStatus = useSelector(getAuthorizationStatus);
  const [activTab, onClick] = useState('Overview');

  const numberCurrentFilmId = useParams<{id?: string}>().id;
  const [ movie, setMovie ] = useState<SmallFilmCard>();

  const onCardClickPlayHandler = () => {
    history.push(generatePath(AppRoute.Player, {id: Number(movie?.id)}));
  };
  const onCardClickMyListHandler = () => {
    history.push(AppRoute.MyList);
  };

  useEffect(() => {
    api.get(`${BACKEND_URL}${APIRoute.Films}/${numberCurrentFilmId}`)
      .then((response) => setMovie(adaptFilmToClientPromo(response.data)))
      .catch(() => history.push('/404'));
  }, [history, numberCurrentFilmId]);

  return (
    <section className="film-card film-card--full" style={{backgroundColor:movie?.backgroundColor}}>
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={movie?.backgroundImage} alt={movie?.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <HeaderScreen/>

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{movie?.title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{movie?.genre}</span>
              <span className="film-card__year">{movie?.released}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span onClick={onCardClickPlayHandler}>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span onClick={onCardClickMyListHandler}>My list</span>
              </button>
              {authStatus === AuthorizationStatus.Auth ? <Link to={generatePath(AppRoute.AddReview, {id: Number(movie?.id)})} className="btn film-card__button">Add review</Link> : ' '}
            </div>
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={movie?.previewImage} alt={movie?.title} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <nav className="film-nav film-card__nav">
              <FilmCardTabs activTab={activTab} onClick={onClick}/>
            </nav>
            { (activTab === 'Overview') && <MovieScreen/>}
            { (activTab === 'Reviews') && <MovieReviewsScreen/>}
            { (activTab === 'Details') && <MovieDetailsScreen/>}
          </div>
        </div>
      </div>
    </section>

  );
}

export default React.memo(FilmBigCard);
