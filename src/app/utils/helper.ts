import { IMovie } from '../interface/movie.interface';

// Shuffle function using the Fisher-Yates algorithm
export function shuffleArray(array: IMovie[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
