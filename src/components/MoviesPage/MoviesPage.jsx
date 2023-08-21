import cn from 'classnames';
import styles from './MoviesPage.module.css';
import { MoviesCardList } from '../MoviesCardList';
import { SearchForm } from '../SearchForm';
import { Divider } from '../Divider';

export function MoviesPage({ className, movies, CardComponent }) {
  return (
    <div className={cn(className, styles.movies, 'main__content')}>
      <SearchForm className={styles.movies__search} />
      <Divider color="gray" className={styles.movies__divider} />
      <MoviesCardList movies={movies} CardComponent={CardComponent} />
    </div>
  );
}
