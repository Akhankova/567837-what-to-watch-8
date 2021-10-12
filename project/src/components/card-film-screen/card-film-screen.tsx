import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import { generatePath } from 'react-router-dom';

type Props = {
  name: string;
  imgSrc: string;
  id: number;
}

function CardFilmScreen(props: Props): JSX.Element {
  const {name, imgSrc, id} = props;
  const history = useHistory();
  const [filmCardId, setFilmCardId] = useState(0);

  const onSmallCardHandler = (element:number) => {
    setFilmCardId(element);
  };


  return (
    <article className="small-film-card catalog__films-card" valueId={filmCardId} {...filmCardId} onClick={() => history.push(generatePath('/films/:id', {id: id}))} onMouseOver ={() => setTimeout( () => {onSmallCardHandler(id);}, 1000)}>
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
