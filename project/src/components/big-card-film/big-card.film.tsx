import React, { useEffect, useState } from 'react';
import { AppRoute, BACKEND_URL, AuthorizationStatus, FilmsCount, ErrorText, ErrorRoute } from '../../const';
import { generatePath, useParams, Link, useHistory } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { SmallCards, SmallFilmCard } from '../../types/small-film-card';
import { api } from '../../index';
import { APIRoute } from '../../types/api';
import { adaptFilmToClientFilms } from '../../services/adapter';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import { MovieScreen } from '../movie-screen/movie-screen';
import { MovieReviewsScreen } from '../movie-screen/movie-reviews-screen';
import { MovieDetailsScreen } from '../movie-screen/movie-details-screen';
import { FilmCardTabs } from './tabs';
import { loadFavoriteStatus, loadPromo } from '../../store/api-actions';
import { getFilm } from '../../store/film-data/selectors';
import LogoFooter from '../logo/logo-footer';
import CardFilmScreen from '../card-film-screen/card-film-screen';
import HeaderScreen from '../header/header';
import { toast } from 'react-toastify';

export function FilmBigCard(): JSX.Element {
  const history = useHistory();
  const authStatus = useSelector(getAuthorizationStatus);
  const numberCurrentFilmId = useParams<{id?: string}>().id;
  const filmCard = useSelector(getFilm);
  const [activeTab, onClick] = useState('Overview');
  const [moviesSimilar, setMoviesSimilar] = useState<SmallCards>([]);

  const handlePlayButtonClick = () => {
    history.push(generatePath(AppRoute.Player, {id: Number(filmCard?.id)}));
  };

  const dispatchAction = useDispatch();
  useEffect(() => {
    dispatchAction(loadFavoriteStatus(numberCurrentFilmId));
  }, [dispatchAction, numberCurrentFilmId]);

  useEffect(() => {
    api.get(`${BACKEND_URL}${APIRoute.Films}/${numberCurrentFilmId}/similar`)
      .then((response) => setMoviesSimilar(adaptFilmToClientFilms(response.data)))
      .catch((error) => {
        if (error.response?.status === ErrorRoute.PageNotFound)
        {history.push(`/${ErrorRoute.PageNotFound}`);}
        else {toast.info(ErrorText.LoadingErrorSimilar);}
      });
  }, [history, numberCurrentFilmId]);

  const handleMyListButtonClick = async () => {
    if (authStatus === AuthorizationStatus.Unknown || authStatus === AuthorizationStatus.NoAuth) {
      return history.push(AppRoute.SignIn);
    }
    api.post<SmallFilmCard>(`${BACKEND_URL}${APIRoute.Favorite}/${numberCurrentFilmId}/${+!filmCard?.isFavorite}`)
      .then(()=> {
        dispatchAction(loadFavoriteStatus(numberCurrentFilmId));
        dispatchAction(loadPromo());
      })
      .catch(() => toast.info(ErrorText.AddError));
  };

  return (
    <React.Fragment>
      <section className="film-card film-card--full" style={{backgroundColor:filmCard?.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={filmCard?.backgroundImage} alt={filmCard?.title} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <HeaderScreen/>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmCard?.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmCard?.genre}</span>
                <span className="film-card__year">{filmCard?.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={handlePlayButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={handleMyListButtonClick}>
                  {filmCard?.isFavorite && authStatus !== 'UNKNOWN' ?
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg> :
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>}
                  <span>My list</span>
                </button>
                {authStatus === AuthorizationStatus.Auth ? <Link to={generatePath(AppRoute.AddReview, {id: Number(filmCard?.id)})} className="btn film-card__button">Add review</Link> : ' '}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmCard?.previewImage} alt={filmCard?.title} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <FilmCardTabs activeTab={activeTab} onClick={onClick}/>
              </nav>
              { (activeTab === 'Overview') && <MovieScreen/>}
              { (activeTab === 'Reviews') && <MovieReviewsScreen/>}
              { (activeTab === 'Details') && <MovieDetailsScreen/>}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {moviesSimilar.slice(FilmsCount.InitValueMoviesWithFilter, FilmsCount.CountFilmsWithLikes).map((film) => (
              <CardFilmScreen
                key={film.id}
                name={film.title}
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
