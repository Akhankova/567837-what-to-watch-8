import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
//import {useState, ChangeEvent} from 'react';
//import {Link} from 'react-router-dom';

type Props = {
  name: string;
  imgSrc: string;
}

/*function CardFilmScreen({name, imgSrc}: Props): JSX.Element {

  return (
    <Link className="small-film-card catalog__films-card" to={AppRoute.Film} style={{textDecoration: 'none', color: '#DFCF77'}}>
      <div className="small-film-card__image">
        <img src={imgSrc} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </Link>
  );
}*/

function CardFilmScreen({name, imgSrc}: Props): JSX.Element {
  const history = useHistory();
  return (
    <article className="small-film-card catalog__films-card" onClick={() => history.push(AppRoute.Film)}>
      <div className="small-film-card__image">
        <img src={imgSrc} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}
export default CardFilmScreen;
