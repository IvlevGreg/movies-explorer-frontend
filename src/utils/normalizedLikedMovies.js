import { normalizeDuration } from './normalizeDuration';

export const normalizedLikedMovies = (
  movies,
) => movies?.map(({
  nameRU, duration, image, _id, movieId,
}) => ({
  link: image,
  title: nameRU,
  duration: normalizeDuration(duration),

  movieId,
  _id,
}));
