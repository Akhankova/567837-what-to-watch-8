/* eslint-disable no-console */
import React from 'react';
import Logo from '../logo/logo';
import CardFilmScreen from '../card-film-screen/card-film-screen';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import LogoFooter from '../logo/logo-footer';
import { generatePath, useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import {State} from '../../types/state';
import UserLoggedIn from '../user-info/user-signIn';
import UserNotLoggedIn from '../user-info/user-signout';
import { AuthorizationStatus } from '../../const';
import {useState} from 'react';
import {SmallFilmCard, SmallCards} from '../../types/small-film-card';
import { api } from '../../index';
import {APIRoute} from '../../types/api';
import { useEffect } from 'react';
import { adaptFilmToClientPromo, adaptFilmToClientFilms} from '../../services/adapter';
import { BACKEND_URL } from '../../const';

const COUNT_CARDS_WITH_MORE_LIKES = 4;

export function MovieScreen(): JSX.Element {
  const history = useHistory();
  const authStatus = useSelector((state: State) => state.authorizationStatus);
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

  const numberCurrentFilmId = useParams<{id?: string}>().id;
  const [ movie, setMovie ] = useState<SmallFilmCard>();
  const [ moviesSimilar, setMoviesSimilar ] = useState<SmallCards>([]);

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
    api.get(`${BACKEND_URL}${APIRoute.Films}/${numberCurrentFilmId}/${'similar'}`)
      .then((response) => setMoviesSimilar(adaptFilmToClientFilms(response.data)))
      .catch(() => history.push('/404'));

  }, [history, numberCurrentFilmId]);
  return (

    <React.Fragment>
      <section className="film-card film-card--full" style={{backgroundColor:movie?.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={movie?.backgroundImage} alt={movie?.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Logo/>
            </div>
            {authStatus === AuthorizationStatus.Auth ? <UserLoggedIn /> : <UserNotLoggedIn />}
          </header>

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
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <Link to={generatePath(AppRoute.Film, {id: Number(movie?.id)})} className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={generatePath(AppRoute.FilmDetails, {id: Number(movie?.id)})} className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={generatePath(AppRoute.FilmReviews, {id: Number(movie?.id)})} className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

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
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {moviesSimilar.slice(0, COUNT_CARDS_WITH_MORE_LIKES).map((film) => (
              <CardFilmScreen
                key={film.id}
                name={film.title}
                imgSrc={film.imgSrc}
                id={film.id}
                previewVideoLink={film.previewVideoLink}
                previewImage={film.previewImage}
              />
            ))}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <LogoFooter/>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default MovieScreen;
