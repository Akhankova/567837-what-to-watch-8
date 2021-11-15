import { useEffect, useState } from 'react';

export const useVideoPlayer = (videoElement: any)  => {
  const [playerState, setPlayerState] = useState({
    playerTime: 0,
    duration: 0,
    isPlaying: true,
    progress: 0,
    speed: 0,
    loading: false,
    timeStart: 0,
    autoplay: 'autoPlay',
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    if (playerState.loading) {
      playerState.isPlaying
        ? videoElement.current.play()
        : videoElement.current.pause();
    }

  }, [playerState, playerState.isPlaying, playerState.loading, videoElement]);

  const videoLoaded = () => {
    setPlayerState({
      ...playerState,
      loading: true,
    });
  };

  const handleOnTimeUpdate = () => {
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
    const playerTime = videoElement.current.duration - videoElement.current.currentTime;
    const duration = progress;
    const timeStart = videoElement.current.currentTime;
    setPlayerState({
      ...playerState,
      progress,
      playerTime,
      duration,
      timeStart,
      loading: true,
    });
  };

  const handleFullClick = () => {
    if (!videoElement.current) {
      return;
    }
    videoElement.current.requestFullscreen();
  };

  const handleVideoProgress = (evt: React.ChangeEvent<HTMLProgressElement>) => {
    const manualChange = Number(evt.target.value);
    videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleFullClick,
    videoLoaded,
  };

};

export default useVideoPlayer;
