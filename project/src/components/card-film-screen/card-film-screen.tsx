import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {useState} from 'react';

type Props = {
  name: string;
  imgSrc: string;
  id: number;
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

function CardFilmScreen(props: Props): JSX.Element {
  const {name, imgSrc, id} = props;
  const history = useHistory();
  const [filmCardId, setFilmCardId] = useState(0);

  const onSmallCardHandler = (element:number) => {
    setFilmCardId(element);
    //console.log(filmCardId);
  };


  return (
    <article className="small-film-card catalog__films-card" valueId={filmCardId} {...filmCardId} onClick={() => history.push(AppRoute.Film)} onMouseOver ={() => setTimeout( () => {onSmallCardHandler(id);}, 1000)}>
      <div className="small-film-card__image">
        <img src={imgSrc} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film}>{name}</Link>
      </h3>
    </article>
  );
}
export default CardFilmScreen;
