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
import { FilmsCount } from '../../const';

function WelcomeScreen(): JSX.Element {

  const movies = useSelector(getMovies);
  const moviesWithFilter = useSelector(getFilterMovies);
  const genreState = useSelector(getGenre);

  const genres: string[] = [];
  movies.filter((element) => genres.push(element.genre));
  const genresUnique: string[]  = getUniqueItems(genres);

  const [visiblyFilmCount, setVisiblyFilmCount] = useState(FilmsCount.CountFilmsStep);
  const buttonShowMore = useRef<HTMLButtonElement | null>(null);

  const dispatchAction = useDispatch();

  useEffect(() => {
    dispatchAction(loadFilmsFilter());
  }, [dispatchAction, genreState]);


  const getGenreNew = (newGenre: string) => dispatchAction(setGenre(newGenre));

  useEffect(() => {
    setVisiblyFilmCount(FilmsCount.StartFilmsCount);
  }, [genreState]);

  const handleShowMoreButtonClick = () => {
    setVisiblyFilmCount(() => {
      const nextVisCount =  visiblyFilmCount + FilmsCount.CountFilmsStep;
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
            <GenresScreen genre={genresUnique} onClick={getGenreNew}/>
          </ul>
          <div className="catalog__films-list">
            { moviesWithFilter.length > FilmsCount.InitValueMoviesWithFilter  ?
              moviesWithFilter.slice().splice(FilmsCount.InitValueMoviesWithFilter, visiblyFilmCount).map((film) => (
                <CardFilmScreen
                  key={film.id}
                  name={film.title}
                  id={film.id}
                  previewVideoLink={film.previewVideoLink}
                  previewImage={film.previewImage}
                />
              )) : <LoadingScreen/>}
          </div>
          {moviesWithFilter.length > FilmsCount.CountFilmsStep ?
            <div className="catalog__more">
              <button className="catalog__button" type="button" onClick={handleShowMoreButtonClick} ref={buttonShowMore}>Show more</button>
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


