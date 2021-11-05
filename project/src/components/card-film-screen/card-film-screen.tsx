import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import { generatePath } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {useState, useEffect, useRef} from 'react';


const TIME_FOR_MOUSE_OVER = 1000;

type Props = {
  name: string;
  imgSrc: string;
  id: number;
  previewVideoLink: string;
  previewImage: string;
}

function CardFilmScreen(props: Props): JSX.Element {
  const {name, id, previewVideoLink, previewImage} = props;
  const history = useHistory();
  const [filmCardId, setFilmCardId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMouseOver, setMouseOver] = useState(false);

  const onSmallCardHandler = (element:number) => setFilmCardId(element);

  const timeAfterHover = useRef<number | null>(null);

  const getTime = () => {

    if (timeAfterHover.current) {
      clearTimeout(timeAfterHover.current);
      timeAfterHover.current = null;
    }
  };

  useEffect(() => {
    getTime();
    if (!isMouseOver) {
      setIsPlaying(false);
    }
    if (isMouseOver) {
      timeAfterHover.current = window.setInterval(() => setIsPlaying(true), TIME_FOR_MOUSE_OVER);
    }
    return getTime;

  }, [isMouseOver]);

  const onCardMouseOverHandler = () => {
    (onSmallCardHandler(Number(id))
    );
    setMouseOver(true);
  };

  const onCardClickHandler = () => {
    history.push(generatePath(AppRoute.Film, {id: id}));
  };

  return (
    <article className="small-film-card catalog__films-card" value={filmCardId} {...filmCardId} onClick={onCardClickHandler} onMouseOver={onCardMouseOverHandler} onMouseLeave={() => setMouseOver(false)}>
      { isPlaying
        ? <VideoPlayer previewVideoLink={previewVideoLink} imgSrc={previewImage}/>
        :
        <div className="small-film-card__image">
          <img src={previewImage} alt={name} width="280" height="175"/>
        </div>}

      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.Film, {id: id})}>{name}</Link>
      </h3>
    </article>
  );
}
export default CardFilmScreen;
