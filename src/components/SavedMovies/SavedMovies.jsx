import { useEffect, useState } from 'react';
import { MoviesPage } from '../MoviesPage';
import { MoviesCardSaved } from '../MoviesCardSaved';
import { MainApi } from '../../utils/Api/MainApi';
import { normalizedLikedMovies } from '../../utils/normalizedLikedMovies';

export function SavedMovies({ className }) {
  const [movies, setMovies] = useState(null);
  const [moviesStatus, setMoviesStatus] = useState('initial');
  const [movieError, setMovieError] = useState(null);

  useEffect(() => {
    if (moviesStatus !== 'initial') return;
    setMoviesStatus('loading');
    MainApi.getMovies()
      .then((likedMovie) => {
        setMovies(normalizedLikedMovies(likedMovie));
        setMoviesStatus('success');
      }).catch((e) => {
        setMoviesStatus('error');
        setMovieError(e.message);
      });
  }, [moviesStatus]);

  const mapMoviesComponent = {
    initial: <h1>loading</h1>,
    loading: <h1>loading</h1>,
    success: <MoviesPage movies={movies} CardComponent={MoviesCardSaved} className={className} />,
    error: (
      <>
        <h1>упс... произошла ошибка</h1>
        <h2>{movieError}</h2>
      </>
    ),
  };

  return (mapMoviesComponent[moviesStatus]);
}
