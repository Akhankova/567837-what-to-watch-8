import { useHistory, Link } from 'react-router-dom';
import { AppRoute, Time } from '../../const';
import { generatePath } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import { useState, useEffect, useRef } from 'react';

type Props = {
  name: string;
  id: number;
  previewVideoLink: string;
  previewImage: string;
}

function CardFilmScreen(props: Props): JSX.Element {
  const {name, id, previewVideoLink, previewImage} = props;

  const timeAfterHover = useRef<number | null>(null);
  const history = useHistory();
  const [filmCardId, setFilmCardId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMouseOver, setMouseOver] = useState(false);

  const getFilmId = (element:number) => setFilmCardId(element);

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
      timeAfterHover.current = window.setInterval(() => setIsPlaying(true), Time.TimeForMouseOver);
    }
    return getTime;
  }, [isMouseOver]);

  const handleCardMouseOver = () => {
    (getFilmId(Number(id))
    );
    setMouseOver(true);
  };

  const handleCardClick = () => {
    history.push(generatePath(AppRoute.Film, {id: id}));
  };

  return (
    <article className="small-film-card catalog__films-card" id={String(filmCardId)} {...filmCardId} onClick={handleCardClick} onMouseOver={handleCardMouseOver} onMouseLeave={() => setMouseOver(false)}>
      <div className="small-film-card__image">
        { isPlaying
          ? <VideoPlayer previewVideoLink={previewVideoLink} imgSrc={previewImage}/>
          :
          <img src={previewImage} alt={name} width="280" height="175"/>}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.Film, {id: id})}>{name}</Link>
      </h3>
    </article>
  );
}

export default CardFilmScreen;
