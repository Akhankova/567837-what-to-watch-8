/* eslint-disable no-console */

import React, { useRef } from 'react';
import CardFilmScreen from '../card-film-screen/card-film-screen';
import Logo from '../logo/logo';
import LogoFooter from '../logo/logo-footer';
import {SmallCards, SmallFilmCard} from '../../types/small-film-card';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import { generatePath } from 'react-router-dom';
//import ShowMoreScreen from '../show-more/show-more';
import {useState} from 'react';


const COUNT_CARDS_STEP = 8;
type WelcomeScreenProps = {
  movies: SmallCards;
  promoMovie: SmallFilmCard;
}

const uniqueItems = (items: string[]) => [...new Set(items)];

function WelcomeScreen({movies, promoMovie}: WelcomeScreenProps): JSX.Element {
  const {released, genre, title, backgroundImage, previewImage, id} = promoMovie;
  const history = useHistory();
  const [visiblyFilmCount, setVisiblyFilmCount] = useState(COUNT_CARDS_STEP );
  const buttonShowMore = useRef<HTMLButtonElement | null>(null);

  /*const cardCount = movies.length;
  let renderedCardCount = COUNT_CARDS_STEP;
  const newRenderedCardCount = Math.min(cardCount, renderedCardCount + COUNT_CARDS_STEP);
  const cardsToShow = movies.slice(renderedCardCount, newRenderedCardCount);

  this._renderCards(cards);

  renderedCardCount = newRenderedCardCount;
  if (renderedCardCount >= cardCount) {
    remove(this._buttonShowMoreComponent);
  }*/

  const onCardClickPlayHandler = () => {
    history.push(generatePath(AppRoute.Player, {id: id}));
  };
  const onCardClickMyListHandler = () => {
    history.push(AppRoute.MyList);
  };

  const onShowMoreButtonClick = () => {
    setVisiblyFilmCount(() => {
      const nextVisCount =  visiblyFilmCount + 8;
      if (nextVisCount >= movies.length) {
        buttonShowMore.current?.remove();
        return movies.length;
      } else {
        return nextVisCount;
      }
    });
  };

  /*const onGenreClickHandler = (event: { currentTarget: { innerText: string; }; }) => {
    const cardsGenre = event.currentTarget.innerText;
    setGenre(cardsGenre);
  };*/

  const genres: string[] = [];
  movies.filter((element) => genres.push(element.genre));
  const genresUning: string[]  = uniqueItems(genres);

  return (

    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Logo />
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="/">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={previewImage} alt={title} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="/" className="catalog__genres-link">All genres</a>
            </li>
            {genresUning.map((filmGenre, idGenre) => {
              const keyValue = `${idGenre}-${filmGenre}`;
              return (
                <li key={keyValue} className="catalog__genres-item">
                  <a href="/" className="catalog__genres-link">{filmGenre}</a>
                </li>
              );
            })}

          </ul>

          <div className="catalog__films-list">

            {movies.slice().splice(0, visiblyFilmCount).map((film) => (
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

          {movies.length >COUNT_CARDS_STEP ?
            <div className="catalog__more">
              <button className="catalog__button" type="button" onClick={onShowMoreButtonClick} ref={buttonShowMore}>Show more</button>
            </div>: ' '}
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

export default WelcomeScreen;
