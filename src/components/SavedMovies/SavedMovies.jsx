import { MoviesPage } from '../MoviesPage';
import { MoviesCardSaved } from '../MoviesCardSaved';

const MOVIES = [...Array(3)].map((_, i) => ({
  link: 'https://catherineasquithgallery.com/uploads/posts/'
        + '2021-02/1614265048_4-p-cherno-belii-fon-peizazh-8.jpg',
  title: '33 слова о дизайне',
  duration: '1ч 47м',
  isInitialLiked: i % 4 === 0,
}));
export function SavedMovies({ className }) {
  return (
    <MoviesPage movies={MOVIES} CardComponent={MoviesCardSaved} className={className} />
  );
}
