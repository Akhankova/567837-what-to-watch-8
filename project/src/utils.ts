import { MINUTES, SECONDS, INITIAL_VALUE, VALUE_FOR_TIME } from './const';

export const getUniqueItems = (items: string[]): string [] => ([...new Set(items)]);

export const getTime = (time:number): string => {
  const hours: number = Math.floor(time/MINUTES);
  const minutes: number = time%MINUTES;
  return hours > INITIAL_VALUE ? `${hours}h ${minutes}m` : `$${minutes}m`;
};

export const getVideoTime = (time: number): string => {
  time = Math.floor(time);
  const minutes = Math.floor(time / SECONDS);
  const hours = Math.floor(minutes/SECONDS);
  const seconds = Math.floor(time - minutes * SECONDS);
  let minutesVal = String(minutes%SECONDS);
  let secondsVal = String(seconds);

  if(Number(minutesVal) < VALUE_FOR_TIME) {
    minutesVal = `${INITIAL_VALUE}${minutesVal}`;
  }
  if(Number(secondsVal) < VALUE_FOR_TIME) {
    secondsVal = `${INITIAL_VALUE}${secondsVal}`;
  }
  return hours > INITIAL_VALUE ? `- ${hours}:${minutesVal}:${secondsVal}`:`- ${minutesVal}:${secondsVal}`;
};

