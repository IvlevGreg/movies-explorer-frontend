import { normalizeDuration } from './normalizeDuration';

export const normalizedLikedMovies = (
  movies,
) => movies?.map(({
  nameRU, duration, image, _id, movieId, nameEN,
}) => ({
  link: image,
  title: nameRU,
  normalizedDuration: normalizeDuration(duration),

  duration,
  nameRU,
  nameEN,
  movieId,
  _id,
}));
