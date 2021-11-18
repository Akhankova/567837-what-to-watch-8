import React, { useEffect, useRef } from 'react';
import CardFilmScreen from '../card-film-screen/card-film-screen';
import LogoFooter from '../logo/logo-footer';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GenresScreen from '../genres-screen/genres-screen';
import { setGenre } from '../../store/action';
import LoadingScreen from '../loading/loading';
import PromoScreen from '../promo/promo';
import { getFilterMovies, getGenre, getMovies } from '../../store/films-data/selectors';
import { loadFilmsFilter } from '../../store/api-actions';
import { getUniqueItems } from '../../utils';
import { COUNT_CARDS_STEP } from '../../const';

function WelcomeScreen(): JSX.Element {
  const INIT_VALUE = 0;
  const START_COUNT_FILMS = 8;

  const movies = useSelector(getMovies);
  const moviesWithFilter = useSelector(getFilterMovies);
  const genreState = useSelector(getGenre);

  const genres: string[] = [];
  movies.filter((element) => genres.push(element.genre));
  const genresUning: string[]  = getUniqueItems(genres);

  const [visiblyFilmCount, setVisiblyFilmCount] = useState(COUNT_CARDS_STEP);
  const buttonShowMore = useRef<HTMLButtonElement | null>(null);

  const dispatchAction = useDispatch();

  useEffect(() => {
    dispatchAction(loadFilmsFilter());
  }, [dispatchAction, genreState]);


  const genreNew = (newGenre: string) => dispatchAction(setGenre(newGenre));
  useEffect(() => {
    setVisiblyFilmCount(START_COUNT_FILMS);
  }, [genreState]);

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
      <PromoScreen/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <GenresScreen genre={genresUning} onClick={genreNew}/>
          </ul>
          <div className="catalog__films-list">
            { moviesWithFilter.length > INIT_VALUE  ?
              moviesWithFilter.slice().splice(INIT_VALUE, visiblyFilmCount).map((film) => (
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


