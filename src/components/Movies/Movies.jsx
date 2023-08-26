import { useEffect, useState } from 'react';
import { MoviesPage } from '../MoviesPage';
import { MoviesCardMain } from '../MoviesCardMain';
import { MoviesApi } from '../../utils/Api/MoviesApi';
import { mapMovies } from './Movies.lib';
import { MainApi } from '../../utils/Api/MainApi';

const MOVIES = [...Array(8)].map((_, i) => ({
  link: 'https://catherineasquithgallery.com/uploads/posts/' + '2021-02/1614265048_4-p-cherno-belii-fon-peizazh-8.jpg',
  title: '33 слова о дизайне',
  duration: '1ч 47м',
  isInitialLiked: i % 4 === 0,
}));

export function Movies({ className }) {
  const [movies, setMovies] = useState(null);
  const [moviesStatus, setMoviesStatus] = useState('initial');
  const [movieError, setMovieError] = useState(null);

  useEffect(() => {
    if (moviesStatus !== 'initial') return;
    setMoviesStatus('loading');
    Promise.all([MoviesApi.getMovies(), MainApi.getMovies()])
      .then(([allMovies, likedMovie]) => {
        setMovies(mapMovies(allMovies, likedMovie));
        setMoviesStatus('success');
      }).catch((e) => {
        setMoviesStatus('error');
        setMovieError(e.message);
      });
  }, [moviesStatus]);

  const mapMoviesComponent = {
    initial: <h1>loading</h1>,
    loading: <h1>loading</h1>,
    success: <MoviesPage movies={movies} className={className} CardComponent={MoviesCardMain} />,
    error: (
      <>
        <h1>упс... произошла ошибка</h1>
        <h2>{movieError}</h2>
      </>
    ),
  };

  return (mapMoviesComponent[moviesStatus]);
}
