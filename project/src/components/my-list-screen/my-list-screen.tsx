import CardFilmScreen from '../card-film-screen/card-film-screen';
import Logo from '../logo/logo';
import LogoFooter from '../logo/logo-footer';
import { useSelector} from 'react-redux';
import {State} from '../../types/state';
import {useDispatch} from 'react-redux';
import { useEffect} from 'react';
import { setFavorite } from '../../store/action';
import UserLoggedIn from '../user-info/user-signIn';


function MyListScreen(): JSX.Element {
  const movies = useSelector((state: State) => state.moviesFavorite);
  const moviesLoaded = useSelector((state: State) => state.isDataPromoLoadedFavorite);
  const dispatchAction = useDispatch();
  useEffect(() => {
    if(movies.length === 0) {
      dispatchAction(setFavorite(movies));
    }
  });
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo/>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <UserLoggedIn/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {moviesLoaded ?
          <div className="catalog__films-list">
            {movies.map((film) => (
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
          : ' '}
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
  );
}

export default MyListScreen;
