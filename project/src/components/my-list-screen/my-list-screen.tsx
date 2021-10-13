import CardFilmScreen from '../card-film-screen/card-film-screen';
import Logo from '../logo/logo';
import LogoFooter from '../logo/logo-footer';
import {SmallCards} from '../../types/small-film-card';

type WelcomeScreenProps = {
  movies: SmallCards;
}

function MyListScreen({movies}: WelcomeScreenProps): JSX.Element {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo/>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {movies.map((film) => (
            <CardFilmScreen
              key={film.id}
              name={film.title}
              imgSrc={film.imgSrc}
              id={film.id}
            />
          )).filter((card) => card)}
        </div>
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
