import { Time } from './const';

export const getUniqueItems = (items: string[]): string [] => ([...new Set(items)]);

export const getTime = (time:number): string => {
  const hours: number = Math.floor(time/Time.Minutes);
  const minutes: number = time%Time.Minutes;
  return hours > Time.InitialValueTime ? `${hours}h ${minutes}m` : `$${minutes}m`;
};

export const getVideoTime = (time: number): string => {
  time = Math.floor(time);
  const minutes = Math.floor(time / Time.Minutes);
  const hours = Math.floor(minutes/Time.Seconds);
  const seconds = Math.floor(time - minutes * Time.Seconds);
  let minutesVal = String(minutes%Time.Seconds);
  let secondsVal = String(seconds);

  if(Number(minutesVal) < Time.ValueForTime) {
    minutesVal = `${Time.InitialValueTime}${minutesVal}`;
  }
  if(Number(secondsVal) < Time.ValueForTime) {
    secondsVal = `${Time.InitialValueTime}${secondsVal}`;
  }
  return hours > Time.InitialValueTime ? `- ${hours}:${minutesVal}:${secondsVal}`:`- ${minutesVal}:${secondsVal}`;
};

