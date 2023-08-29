import cn from 'classnames';
import { useState } from 'react';
import styles from './MoviesPage.module.css';
import { MoviesCardList } from '../MoviesCardList';
import { SearchForm } from '../SearchForm';
import { Divider } from '../Divider';
import { Button } from '../Button';

export function MoviesPage({
  className, movies, CardComponent, handleMoreMovie, isAllMoviesShow,
}) {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  console.log(filteredMovies);
  console.log(movies);
  return (
    <div className={cn(className, styles.movies, 'main__content')}>
      <SearchForm className={styles.movies__search} />
      <Divider color="gray" className={styles.movies__divider} />
      <MoviesCardList
        movies={movies}
        handleMoreMovie={handleMoreMovie}
        isAllMoviesShow={isAllMoviesShow}
        CardComponent={CardComponent}
      />

    </div>
  );
}
