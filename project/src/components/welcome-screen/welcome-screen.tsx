import React, { useEffect, useRef } from 'react';
import CardFilmScreen from '../card-film-screen/card-film-screen';
import LogoFooter from '../logo/logo-footer';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import GenresScreen from '../genres-screen/genres-screen';
import {  setGenre, setFilmsFilter } from '../../store/action';
import LoadingScreen from '../loading/loading';
import PromoScreen from '../promo/promo';
import { getFilterMovies, getGenre, getMovies } from '../../store/films-data/selectors';


const COUNT_CARDS_STEP = 8;
const uniqueItems = (items: string[]) => [...new Set(items)];

function WelcomeScreen(): JSX.Element {

  const movies = useSelector(getMovies);
  const moviesWithFilter = useSelector(getFilterMovies);
  const genreState = useSelector(getGenre);

  const genres: string[] = [];
  movies.filter((element) => genres.push(element.genre));
  const genresUning: string[]  = uniqueItems(genres);

  const [visiblyFilmCount, setVisiblyFilmCount] = useState(COUNT_CARDS_STEP);
  const buttonShowMore = useRef<HTMLButtonElement | null>(null);

  const dispatchAction = useDispatch();

  useEffect(() => {
    dispatchAction(setFilmsFilter(moviesWithFilter));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genreState]);


  const genreNew = (newGenre: string) => dispatchAction(setGenre(newGenre));
  useEffect(() => {
    setVisiblyFilmCount(8);
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
            { moviesWithFilter.length > 0  ?
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


