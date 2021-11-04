/* eslint-disable no-console */
import React, { useEffect } from 'react';
import Logo from '../logo/logo';
import CardFilmScreen from '../card-film-screen/card-film-screen';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import dayjs from 'dayjs';
import LogoFooter from '../logo/logo-footer';
import { generatePath, useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import {State} from '../../types/state';
import UserLoggedIn from '../user-info/user-signIn';
import UserNotLoggedIn from '../user-info/user-signout';
import { AuthorizationStatus } from '../../const';
import axios from 'axios';
import {APIRoute} from '../../types/api';
//import {setComments} from '../../store/action';
//import {useDispatch} from 'react-redux';
import {CardComments} from '../../types/small-film-card';
import {useState} from 'react';
import {SmallFilmCard, SmallCards} from '../../types/small-film-card';
import { adaptFilmToClientPromo, adaptFilmToClientFilms} from '../../services/adapter';

const COUNT_CARDS_WITH_MORE_LIKES = 4;
//splice(0, COUNT_CARDS_WITH_MORE_LIKES)
const INDEX_FILM_ID = 0;
const BACKEND_URL = 'https://8.react.pages.academy/wtw';


function MovieReviewsScreen(): JSX.Element {
  const movies = useSelector((state: State) => state.filterMovies);
  const history = useHistory();
  const authStatus = useSelector((state: State) => state.authorizationStatus);
  const onCardClickPlayHandler = () => {
    history.push(generatePath(AppRoute.Player, {id: activeFilmCard[INDEX_FILM_ID].id}));
  };
  const onCardClickMyListHandler = () => {
    history.push(AppRoute.MyList);
  };
  const filmId = useParams<{id?: string}>();
  const currentFilmId = filmId.id;
  const numberCurrentFilmId = currentFilmId;
  const activeFilmCard = movies.filter((element) => element.id === Number(numberCurrentFilmId));
  const [ reviews, setReviews ] = useState<CardComments>([]);
  const [ movie, setFilm ] = useState<SmallFilmCard>(activeFilmCard[INDEX_FILM_ID]);
  const [ moviesSimilar, setMoviesSimilar ] = useState<SmallCards>([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}${APIRoute.Comments}/${numberCurrentFilmId}`)
      .then((response) => setReviews(response.data));
    axios.get(`${BACKEND_URL}${APIRoute.Films}/${numberCurrentFilmId}`)
      .then((response) => setFilm(adaptFilmToClientPromo(response.data)));
    axios.get(`${BACKEND_URL}${APIRoute.Films}/${numberCurrentFilmId}/${'similar'}`)
      .then((response) => setMoviesSimilar(adaptFilmToClientFilms(response.data)));

  }, [numberCurrentFilmId]);
  useEffect(() => {
    axios.get(`${BACKEND_URL}${APIRoute.Comments}/${numberCurrentFilmId}`)
      .then((response) => setReviews(response.data));
  }, []);

  console.log(reviews);
  return (
    <React.Fragment>
      <section className="film-card film-card--full" style={{backgroundColor:movie.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={movie.backgroundImage} alt={movie.title} />
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
              <h2 className="film-card__title">{movie.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movie.genre}</span>
                <span className="film-card__year">{movie.released}</span>
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
                {authStatus === AuthorizationStatus.Auth ? <Link to={generatePath(AppRoute.AddReview, {id: movie.id})} className="btn film-card__button">Add review</Link> : ' '}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={movie.previewImage} alt={movie.title} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <Link to={generatePath(AppRoute.Film, {id: movie.id})} className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={generatePath(AppRoute.FilmDetails, {id: movie.id})} className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <Link to={generatePath(AppRoute.FilmReviews, {id: movie.id})} className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

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

export default MovieReviewsScreen;
