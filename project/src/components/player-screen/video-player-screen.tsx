import { useEffect, useRef, useState } from 'react';
import { generatePath, useHistory, useParams } from 'react-router-dom';
import { useVideoPlayer } from '../../hooks/video-pl';
import { SmallFilmCard } from '../../types/small-film-card';
import { api } from '../../index';
import { AppRoute, BACKEND_URL, ERROR_ROUTE} from '../../const';
import { getVideoTime } from '../../utils';
import { APIRoute } from '../../types/api';
import { adaptFilmToClientPromo } from '../../services/adapter';
import LoadingVideoScreen from '../loading/loading-video';
import React from 'react';

export function PlayerScreen(): JSX.Element {
  const numberCurrentFilmId = useParams<{id?: string}>().id;
  const [ movie, setMovie ] = useState<SmallFilmCard>();
  const videoElement = useRef(null);
  const history = useHistory();

  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleFullClick,
    handleVideoProgress,

  } = useVideoPlayer(videoElement);

  useEffect(() => {
    api.get(`${BACKEND_URL}${APIRoute.Films}/${numberCurrentFilmId}`)
      .then((response) => setMovie(adaptFilmToClientPromo(response.data)))
      .catch(() => history.push(`${ERROR_ROUTE}`));
  }, [history, numberCurrentFilmId]);

  const onExitClickHandler = () => {
    history.push(generatePath(AppRoute.Film, {id: Number(movie?.id)}));
  };

  return (
    <div className="player">
      {videoElement.current ? ' ': <LoadingVideoScreen/>}
      <video className="player__video"
        poster={movie?.backgroundImage}
        src={movie?.videoLink}
        ref={videoElement}
        onTimeUpdate={handleOnTimeUpdate}
      >
      </video>
      <button type="button" className="player__exit" onClick={onExitClickHandler}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" max='100'
              value={playerState.progress}
              onChange={(evt:React.ChangeEvent<HTMLProgressElement>) => handleVideoProgress(evt)}
            >
            </progress>
            <div className="player__toggler" style={{left: `${playerState.duration}%`}}>Toggler</div>
          </div>
          <div className="player__time-value" style={{fontSize: '18px'}}>{getVideoTime(playerState.playerTime)} </div>
        </div>
        <div className="player__controls-row">
          {!playerState.isPlaying ?
            <button type="button" className="player__play" onClick={togglePlay}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            :
            <button type="button" className="player__play" onClick={togglePlay}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>}

          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen" onClick={handleFullClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>

  );
}

export default PlayerScreen;
