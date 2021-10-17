import Logo from '../logo/logo';
import FormNewComment from '../form-new-comment/form-new-comment';
import { useParams } from 'react-router-dom';
import {SmallCards} from '../../types/small-film-card';

const INDEX_FILM_ID = 0;

type AddScreenProps = {
  movies: SmallCards;
}

function AddScreen({movies}: AddScreenProps): JSX.Element {
  const filmId = useParams<{id?: string}>();
  const currentFilmId = filmId.id;
  const numberCurrentFilmId = currentFilmId;
  const activeFilmCard = movies.filter((element) => element.id === Number(numberCurrentFilmId));

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={activeFilmCard[INDEX_FILM_ID].backgroundImage} alt={activeFilmCard[INDEX_FILM_ID].title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Logo/>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href='film-page.html' className="breadcrumbs__link">{activeFilmCard[INDEX_FILM_ID].title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href='/'>Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img src={activeFilmCard[INDEX_FILM_ID].previewImage} alt={activeFilmCard[INDEX_FILM_ID].title} width="218" height="327" />
        </div>
      </div>

      <FormNewComment />

    </section>
  );
}

export default AddScreen;
