import React, { RefObject, useEffect, useState } from 'react';

type VideoPlayer = {
  playerState: {
    playerTime: number,
    isPlaying: boolean,
    loading: boolean,
    duration: number,
    timeStart: number,
    progress: number,
  }
  togglePlay: () => void,
  videoLoaded: () => void,
  handleOnTimeUpdate: () => void,
  handleFullClick: () => void,
  handleVideoProgress: (evt: React.ChangeEvent<HTMLProgressElement>) => void,
}

export const useVideoPlayer = (videoElement: RefObject<HTMLVideoElement>): VideoPlayer  => {
  const FOR_PERCENT = 100;
  const INITIAL_VALUE = 0;

  const [playerState, setPlayerState] = useState({
    playerTime: INITIAL_VALUE,
    duration: INITIAL_VALUE,
    isPlaying: false,
    progress: INITIAL_VALUE,
    loading: false,
    timeStart: INITIAL_VALUE,
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    if (!videoElement.current) {
      return;
    }
    playerState.isPlaying
      ? videoElement?.current.play()
      : videoElement?.current.pause();
  }, [playerState.isPlaying, videoElement]);

  const videoLoaded = () => {
    setPlayerState({
      ...playerState,
      loading: true,
    });
  };

  const handleOnTimeUpdate = () => {
    if (!videoElement.current) {
      return;
    }
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * FOR_PERCENT;
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
    if (!videoElement.current) {
      return;
    }
    const manualChange = Number(evt.target.value);
    videoElement.current.currentTime = (videoElement.current.duration / FOR_PERCENT) * manualChange;
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


