import { MoviesPage } from '../MoviesPage';
import { MoviesCardMain } from '../MoviesCardMain';

const MOVIES = [...Array(8)].map((_, i) => ({
  link: 'https://catherineasquithgallery.com/uploads/posts/'
        + '2021-02/1614265048_4-p-cherno-belii-fon-peizazh-8.jpg',
  title: '33 слова о дизайне',
  duration: '1ч 47м',
  isInitialLiked: i % 4 === 0,
}));
export function Movies({ className }) {
  return (
    <MoviesPage movies={MOVIES} className={className} CardComponent={MoviesCardMain} />
  );
}
