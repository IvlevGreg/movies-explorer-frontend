import cn from 'classnames';
import styles from './MoviesPage.module.css';
import { MoviesCardList } from '../MoviesCardList';
import { Divider } from '../Divider';
import { useFilterMovies } from '../../utils/useFilterMovies';
import { LimitedMovies } from '../Movies/LimitedMovies';
import { SearchForm } from '../SearchForm';

const FIELDS = {
  search: '', filter: false,
};

export function MoviesPage({
  className, movies, CardComponent, limits, localStorageKey,
}) {
  const localStorageData = localStorageKey && JSON.parse(localStorage.getItem(localStorageKey));
  const initialFormData = { ...FIELDS, ...localStorageData };

  const {
    filteredMovies, handleSubmit,
  } = useFilterMovies(movies, initialFormData, localStorageKey);

  return (
    <main>
      <div className={cn(className, styles.movies, 'main__content')}>
        <SearchForm
          className={styles.movies__search}
          defaultValues={initialFormData}
          onSubmit={handleSubmit}
        />
        <Divider color="gray" className={styles.movies__divider} />
        {limits ? (
          <LimitedMovies
            movies={filteredMovies}
            CardComponent={CardComponent}
            limits={limits}
          />
        ) : (
          <MoviesCardList
            movies={filteredMovies}
            CardComponent={CardComponent}
          />
        )}
      </div>
    </main>
  );
}
