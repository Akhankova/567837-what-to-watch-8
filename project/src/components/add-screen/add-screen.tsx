import Logo from '../logo/logo';
import FormNewComment from '../form-new-comment/form-new-comment';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserLoggedIn from '../user-info/user-signIn';
import UserNotLoggedIn from '../user-info/user-signout';
import { AuthorizationStatus } from '../../const';
import { api } from '../../index';
import { APIRoute } from '../../types/api';
import { useState, useEffect } from 'react';
import { SmallFilmCard } from '../../types/small-film-card';
import { adaptFilmToClientPromo } from '../../services/adapter';
import { BACKEND_URL } from '../../const';
import { getAuthorizationStatus } from '../../store/user-data/selectors';

function AddScreen(): JSX.Element {
  const numberCurrentFilmId = useParams<{id?: string}>().id;
  const authStatus = useSelector(getAuthorizationStatus);
  const history = useHistory();
  const [ movie, setFilm ] = useState<SmallFilmCard>();

  useEffect(() => {
    api.get(`${BACKEND_URL}${APIRoute.Films}/${numberCurrentFilmId}`)
      .then((response) => setFilm(adaptFilmToClientPromo(response.data)))
      .catch(() => history.push('/404'));
  }, [history, numberCurrentFilmId]);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movie?.backgroundImage} alt={movie?.title} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <Logo/>
          </div>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href='film-page.html' className="breadcrumbs__link">{movie?.title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href='/'>Add review</a>
              </li>
            </ul>
          </nav>
          {authStatus === AuthorizationStatus.Auth ? <UserLoggedIn /> : <UserNotLoggedIn />}
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={movie?.previewImage} alt={movie?.title} width="218" height="327" />
        </div>
      </div>
      <FormNewComment/>
    </section>
  );
}

export default AddScreen;
