import React, { useEffect, useState } from 'react';
import { AppRoute, BACKEND_URL, AuthorizationStatus } from '../../const';
import { generatePath, useParams, Link, useHistory } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { ServerMovie, SmallCards, SmallFilmCard} from '../../types/small-film-card';
import { api } from '../../index';
import {APIRoute} from '../../types/api';
import { adaptFilmToClientFilms, adaptFilmToClientPromo} from '../../services/adapter';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import HeaderScreen from '../header/header';
import { MovieScreen } from '../movie-screen/movie-screen';
import { MovieReviewsScreen } from '../movie-screen/movie-reviews-screen';
import { MovieDetailsScreen } from '../movie-screen/movie-details-screen';
import { FilmCardTabs } from './tabs';
import LogoFooter from '../logo/logo-footer';
import CardFilmScreen from '../card-film-screen/card-film-screen';
import { COUNT_CARDS_WITH_MORE_LIKES, FAVORITE_STATUS_NOT_FAVORITE, FAVORITE_STATUS_FAVORITE, ERROR_ROUTE} from '../../const';

export function FilmBigCard(): JSX.Element {
  const history = useHistory();
  const authStatus = useSelector(getAuthorizationStatus);
  const numberCurrentFilmId = useParams<{id?: string}>().id;

  const [activTab, onClick] = useState('Overview');
  const [ movie, setMovie ] = useState<SmallFilmCard>();
  const [ favoriteStatus, setFavoriteStatus ] = useState(movie?.isFavorite ? 1 : 0);
  const [ moviesSimilar, setMoviesSimilar ] = useState<SmallCards>([]);

  const onCardClickPlayHandler = () => {
    history.push(generatePath(AppRoute.Player, {id: Number(movie?.id)}));
  };

  const postFavoriteStatus = async (status: number): Promise<void> => {
    await api.post<ServerMovie[]>(`${BACKEND_URL}${APIRoute.Favorite}/${numberCurrentFilmId}/${status}`);
  };

  useEffect(() => {
    api.get(`${BACKEND_URL}${APIRoute.Films}/${numberCurrentFilmId}/${'similar'}`)
      .then((response) => setMoviesSimilar(adaptFilmToClientFilms(response.data)))
      .catch(() => history.push(`/${ERROR_ROUTE}`));
  }, [history, numberCurrentFilmId]);

  useEffect(() => {
    api.get(`${BACKEND_URL}${APIRoute.Films}/${numberCurrentFilmId}`)
      .then((response) => setMovie(adaptFilmToClientPromo(response.data)))
      .catch(() => history.push(`/${ERROR_ROUTE}`));
  }, [history, numberCurrentFilmId, setFavoriteStatus]);

  const onCardClickMyListHandler = async () => {
    if (authStatus === 'UNKNOWN') {
      return history.push(AppRoute.SignIn);
    }
    if (favoriteStatus === FAVORITE_STATUS_FAVORITE) {
      setFavoriteStatus(FAVORITE_STATUS_NOT_FAVORITE);
      postFavoriteStatus(FAVORITE_STATUS_NOT_FAVORITE);
    }
    if (favoriteStatus === FAVORITE_STATUS_NOT_FAVORITE) {
      setFavoriteStatus(FAVORITE_STATUS_FAVORITE);
      postFavoriteStatus(FAVORITE_STATUS_FAVORITE);
    }
  };

  return (
    <React.Fragment>
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
                <button className="btn btn--list film-card__button" type="button" onClick={onCardClickMyListHandler}>
                  {favoriteStatus ?
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg> :
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>}
                  <span>My list</span>
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

export default React.memo(FilmBigCard);
