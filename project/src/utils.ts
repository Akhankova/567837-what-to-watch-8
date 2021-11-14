export const MINUTES = 60;
export const uniqueItems = (items: string[]): string [] => ([...new Set(items)]);

export const getTime = (time:number): string => {
  const hours: number = Math.floor(time/MINUTES);
  const minutes: number = time%MINUTES;
  return hours > 0 ? `${hours}h ${minutes}m` : `$${minutes}m`;
};

export const getVideoTime = (time: number): string => {
  time = Math.floor(time);
  const minutes = Math.floor(time / 60);
  const hours = Math.floor(minutes/60);
  const seconds = Math.floor(time - minutes * 60);
  let minutesVal = String(minutes%60);
  let secondsVal = String(seconds);
  if(Number(minutesVal) < 10) {
    minutesVal = `0${  minutesVal}`;
  }
  if(Number(secondsVal) < 10) {
    secondsVal = `0${  secondsVal}`;
  }
  return hours > 0 ? `- ${hours}:${minutesVal}:${secondsVal}`:`- ${minutesVal}:${secondsVal}`;
};
