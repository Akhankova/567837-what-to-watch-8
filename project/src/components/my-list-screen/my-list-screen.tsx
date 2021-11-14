import CardFilmScreen from '../card-film-screen/card-film-screen';
import Logo from '../logo/logo';
import LogoFooter from '../logo/logo-footer';
import { useSelector} from 'react-redux';
import UserLoggedIn from '../user-info/user-signIn';
import { getIsDataFilmsLoadedStatus } from '../../store/films-data/selectors';
import { useEffect, useState } from 'react';
import {  SmallFilmCard} from '../../types/small-film-card';
import { APIRoute } from '../../types/api';
import { BACKEND_URL } from '../../const';
import { api } from '../../index';
import { useHistory } from 'react-router-dom';
import { adaptFilmToClientFilms } from '../../services/adapter';

function MyListScreen(): JSX.Element {
  const moviesLoaded = useSelector(getIsDataFilmsLoadedStatus);
  const [favouriteMovies, setFavouriteMovies] = useState<SmallFilmCard[] | null>(null);
  const history = useHistory();

  useEffect(() => {
    api.get(`${BACKEND_URL}${APIRoute.Favorite}`)
      .then((response) => setFavouriteMovies(adaptFilmToClientFilms(response.data)))
      .catch(() => history.push('/404'));
  }, [history]);

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
            {favouriteMovies?.map((film) => (
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


