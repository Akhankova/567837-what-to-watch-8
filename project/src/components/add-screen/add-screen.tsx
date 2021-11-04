/* eslint-disable no-console */
import Logo from '../logo/logo';
import FormNewComment from '../form-new-comment/form-new-comment';
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import {State} from '../../types/state';
import UserLoggedIn from '../user-info/user-signIn';
import UserNotLoggedIn from '../user-info/user-signout';
import { AuthorizationStatus } from '../../const';
import axios from 'axios';
import {APIRoute} from '../../types/api';
import {useState} from 'react';
import {SmallFilmCard} from '../../types/small-film-card';
import { adaptFilmToClientPromo} from '../../services/adapter';
import { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
//import {CardComments} from '../../types/small-film-card';

const INDEX_FILM_ID = 0;
const BACKEND_URL = 'https://8.react.pages.academy/wtw';

function AddScreen(): JSX.Element {
  const movies = useSelector((state: State) => state.movies);
  const filmId = useParams<{id?: string}>();
  const currentFilmId = filmId.id;
  const numberCurrentFilmId = currentFilmId;
  const activeFilmCard = movies.filter((element) => element.id === Number(numberCurrentFilmId));
  const authStatus = useSelector((state: State) => state.authorizationStatus);
  const history = useHistory();
  const [ movie, setFilm ] = useState<SmallFilmCard>(activeFilmCard[INDEX_FILM_ID]);
  //const [ reviews, setReviews ] = useState<CardComments>([]);


  useEffect(() => {
    axios.get(`${BACKEND_URL}${APIRoute.Films}/${numberCurrentFilmId}`)
      .then((response) => setFilm(adaptFilmToClientPromo(response.data)))
      .catch(() => history.push('/404'));

  }, [history, numberCurrentFilmId]);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movie.backgroundImage} alt={movie.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Logo/>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href='film-page.html' className="breadcrumbs__link">{movie.title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href='/'>Add review</a>
              </li>

            </ul>
          </nav>

          {authStatus === AuthorizationStatus.Auth ? <UserLoggedIn /> : <UserNotLoggedIn />}
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={movie.previewImage} alt={movie.title} width="218" height="327" />
        </div>
      </div>

      <FormNewComment/>

    </section>
  );
}

export default AddScreen;
