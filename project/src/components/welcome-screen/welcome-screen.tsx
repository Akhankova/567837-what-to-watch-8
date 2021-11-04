import React, { useEffect, useRef } from 'react';
import CardFilmScreen from '../card-film-screen/card-film-screen';
import Logo from '../logo/logo';
import LogoFooter from '../logo/logo-footer';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import { generatePath } from 'react-router-dom';
import {useState} from 'react';
import {State} from '../../types/state';
import {useDispatch, useSelector} from 'react-redux';
import GenresScreen from '../genres-screen/genres-screen';
import {  setGenre, setMovies, setPromo } from '../../store/action';
import LoadingScreen from '../loading/loading';
import UserLoggedIn from '../user-info/user-signIn';
import UserNotLoggedIn from '../user-info/user-signout';
import { AuthorizationStatus } from '../../const';


const COUNT_CARDS_STEP = 8;
const uniqueItems = (items: string[]) => [...new Set(items)];

function WelcomeScreen(): JSX.Element {

  const movies = useSelector((state: State) => state.movies);
  const moviesWithFilter = useSelector((state: State) => state.filterMovies);
  const genreState = useSelector((state: State) => state.genre);
  //const dataPromoLoaded = useSelector((state: State) => state.isDataPromoLoaded);
  const promo = useSelector((state: State) => state.promoFilm);
  const authStatus = useSelector((state: State) => state.authorizationStatus);
  const genres: string[] = [];
  movies.filter((element) => genres.push(element.genre));
  const genresUning: string[]  = uniqueItems(genres);

  const history = useHistory();
  const [visiblyFilmCount, setVisiblyFilmCount] = useState(COUNT_CARDS_STEP);
  const buttonShowMore = useRef<HTMLButtonElement | null>(null);

  const dispatchAction = useDispatch();
  useEffect(() => {
    if(movies.length === 0) {
      dispatchAction(setMovies(movies));
      dispatchAction(setGenre(genreState));
      dispatchAction(setPromo(promo));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const genreNew = (newGenre: string) => dispatchAction(setGenre(newGenre));
  useEffect(() => {
    setVisiblyFilmCount(8);
  }, [genreState]);

  const onCardClickPlayHandler = () => {
    history.push(generatePath(AppRoute.Player, {id: promo.id}));
  };
  const onCardClickMyListHandler = () => {
    history.push(AppRoute.MyList);
  };

  const onShowMoreButtonClick = () => {
    setVisiblyFilmCount(() => {
      const nextVisCount =  visiblyFilmCount + COUNT_CARDS_STEP;
      if (nextVisCount >= moviesWithFilter.length) {
        buttonShowMore.current?.remove();
        return moviesWithFilter.length;
      } else {
        return nextVisCount;
      }
    });

  };

  return (

    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo.backgroundImage} alt={promo.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Logo />
          </div>
          {authStatus === AuthorizationStatus.Auth ? <UserLoggedIn /> : <UserNotLoggedIn />}
        </header>
        {promo ?
          <div className="film-card__wrap">
            <div className="film-card__info">
              <div className="film-card__poster">
                <img src={promo.previewImage} alt={promo.title} width="218" height="327" />
              </div>

              <div className="film-card__desc">
                <h2 className="film-card__title">{promo.title}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{promo.genre}</span>
                  <span className="film-card__year">{promo.released}</span>
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
          </div> : ''}
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <GenresScreen genre={genresUning} onClick={genreNew}/>
          </ul>

          <div className="catalog__films-list">
            { moviesWithFilter  ?
              moviesWithFilter.slice().splice(0, visiblyFilmCount).map((film) => (
                <CardFilmScreen
                  key={film.id}
                  name={film.title}
                  imgSrc={film.imgSrc}
                  id={film.id}
                  previewVideoLink={film.previewVideoLink}
                  previewImage={film.previewImage}
                />
              )) : <LoadingScreen/>}


          </div>

          {moviesWithFilter.length > COUNT_CARDS_STEP ?
            <div className="catalog__more">
              <button className="catalog__button" type="button" onClick={onShowMoreButtonClick} ref={buttonShowMore}>Show more</button>
            </div>  : ' '}
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


