import React from 'react';
import Logo from '../logo/logo';
import CardFilmScreen from '../card-film-screen/card-film-screen';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import LogoFooter from '../logo/logo-footer';
import { generatePath, useParams } from 'react-router-dom';
import {SmallCards} from '../../types/small-film-card';

const COUNT_CARDS_WITH_MORE_LIKES = 4;
const INDEX_FILM_ID = 0;

type WelcomeScreenProps = {
  movies: SmallCards;
}

function MovieScreen({movies}: WelcomeScreenProps): JSX.Element {
  const history = useHistory();
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
  const filmsLike = movies.filter((element) => element.genre === activeFilmCard[INDEX_FILM_ID].genre);

  return (
    <React.Fragment>
      <section className="film-card film-card--full" style={{backgroundColor:activeFilmCard[INDEX_FILM_ID].backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={activeFilmCard[INDEX_FILM_ID].backgroundImage} alt={activeFilmCard[INDEX_FILM_ID].title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Logo/>
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link" href='/'>Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{activeFilmCard[INDEX_FILM_ID].title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{activeFilmCard[INDEX_FILM_ID].genre}</span>
                <span className="film-card__year">{activeFilmCard[INDEX_FILM_ID].released}</span>
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
                <Link to={generatePath(AppRoute.AddReview, {id: activeFilmCard[INDEX_FILM_ID].id})} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={activeFilmCard[0].previewImage} alt={activeFilmCard[INDEX_FILM_ID].title} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <Link to={generatePath(AppRoute.Film, {id: activeFilmCard[INDEX_FILM_ID].id})} className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={generatePath(AppRoute.FilmDetails, {id: activeFilmCard[INDEX_FILM_ID].id})} className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={generatePath(AppRoute.FilmReviews, {id: activeFilmCard[INDEX_FILM_ID].id})} className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{activeFilmCard[INDEX_FILM_ID].rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{getRatingText(activeFilmCard[INDEX_FILM_ID].rating)}</span>
                  <span className="film-rating__count">{activeFilmCard[INDEX_FILM_ID].scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                {activeFilmCard[0].description}

                <p className="film-card__director"><strong>Director: {activeFilmCard[INDEX_FILM_ID].director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {activeFilmCard[INDEX_FILM_ID].starring} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {filmsLike.splice(0, COUNT_CARDS_WITH_MORE_LIKES).map((film) => (
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
