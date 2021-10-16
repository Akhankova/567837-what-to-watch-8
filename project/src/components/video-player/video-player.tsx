import {useRef, useEffect} from 'react';

 type VideoPlayerProps = {
   previewVideoLink: string;
   imgSrc: string;
 }

function VideoPlayer({previewVideoLink, imgSrc}: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.muted = true;
      videoRef.current.autoplay = true;
    }
  });

  return (
    <video src={previewVideoLink} className="player__video" poster={imgSrc} ref={videoRef}></video>
  );
}

export default VideoPlayer;