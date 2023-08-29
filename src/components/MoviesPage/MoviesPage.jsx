import cn from 'classnames';
import styles from './MoviesPage.module.css';
import { MoviesCardList } from '../MoviesCardList';
import { SearchForm } from '../SearchForm';
import { Divider } from '../Divider';
import { useFilterMovies } from '../../utils/useFilterMovies';
import { LimitedMovies } from '../Movies/LimitedMovies';

const FIELDS = {
  search: '', filter: false,
};

export function MoviesPage({
  className, movies, CardComponent, limits, localStorageKey,
}) {
  const initialFormData = JSON.parse(localStorage.getItem(localStorageKey)) || FIELDS;

  const {
    filteredMovies,
    handleSubmit,
  } = useFilterMovies(movies, initialFormData, localStorageKey);
  console.log(filteredMovies);
  // console.log('filteredMovies', filteredMovies);
  // console.log(movies);
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
        )
          : (
            <MoviesCardList
              movies={filteredMovies}
              CardComponent={CardComponent}
            />
          )}
      </div>
    </main>
  );
}
