import { formatNumber } from "../helper/formatter";

export const getTimeString = (time: number) => {
  const secs: number = time%60;
  const mins: number = Math.floor(time/60);
  return `${formatNumber(mins)}:${formatNumber(secs)}`
}