const mapDuration = (duration) => {
  const h = Math.floor(duration / 60);
  const m = Math.floor((duration % 60));

  const hDisplay = h > 0 ? `${h}ч ` : '';
  const mDisplay = m > 0 ? `${m}м` : '0мм';

  return hDisplay + mDisplay;
};
const mapLikedMovie = (likedMovie) => likedMovie?.reduce((acc, cur) => {
  acc[String(cur.movieId)] = cur;
  return acc;
}, {});

export const mapMovies = (allMovies, likedMovie) => {
  const mapedLikedMovie = mapLikedMovie(likedMovie);

  return allMovies.map(({
    nameRU, duration, image, id,
  }) => ({
    link: `https://api.nomoreparties.co${image.url}`,
    title: nameRU,
    duration: mapDuration(duration),
    isInitialLiked: !!mapedLikedMovie[String(id)],
  }));
};
