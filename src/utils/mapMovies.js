import { normalizeDuration } from './normalizeDuration';

const mapLikedMovieIntoObject = (likedMovie) => likedMovie?.reduce((acc, cur) => {
  acc[String(cur.movieId)] = cur;
  return acc;
}, {});

export const normalizeMovies = (
  movies,
) => movies?.map(({
  nameRU, duration, image,
}) => ({
  link: image,
  title: nameRU,
  duration: normalizeDuration(duration),
}));

export const mapMovies = (allMovies, likedMovie) => {
  const mapedLikedMovie = mapLikedMovieIntoObject(likedMovie);

  return allMovies.map(({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    owner,
    nameRU,
    nameEN,
    id,
  }) => ({
    thumbnail: `https://api.nomoreparties.co${image?.formats?.thumbnail?.url}`,
    normalizedDuration: normalizeDuration(duration),
    isInitialLiked: !!mapedLikedMovie[String(id)],

    country,
    director,
    duration,
    year,
    description,
    image: `https://api.nomoreparties.co${image.url}`,
    trailerLink,
    owner,
    movieId: String(id),
    nameRU,
    nameEN,
  }));
};
