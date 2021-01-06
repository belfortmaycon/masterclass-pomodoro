import { zeroLeft } from './zero-left';

export function secodsToMinutes(seconds: number): string {
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);

  // min + ':' + sec
  return `${min}:${sec}`;
}
