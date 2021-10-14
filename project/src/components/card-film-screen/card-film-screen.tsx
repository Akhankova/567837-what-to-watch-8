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

  const onCardMouseOverHandler = () => {
    onSmallCardHandler(id);
  };

  const onCardClickHandler = () => {
    history.push(generatePath(AppRoute.Film, {id: id}));
  };

  const debounce = <F extends ((...args: any) => any)>(func: F, waitFor: number) => {
    let timeout: any;

    return (...args: any) => {
      clearTimeout(timeout);
      timeout= setTimeout(() => func(...args), waitFor);
    };

  };

  return (
    <article className="small-film-card catalog__films-card" value={filmCardId} {...filmCardId} onClick={onCardClickHandler} onMouseOver={debounce(onCardMouseOverHandler,2000)}>
      <div className="small-film-card__image">
        <img src={imgSrc} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.Film, {id: id})}>{name}</Link>
      </h3>
    </article>
  );
}
export default CardFilmScreen;
