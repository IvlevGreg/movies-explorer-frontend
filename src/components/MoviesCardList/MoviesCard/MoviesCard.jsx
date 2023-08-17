import cn from 'classnames';
import { useState } from 'react';
import styles from './MoviesCard.module.css';
import { Button } from '../../Button';

export function MoviesCard({
  className, link, alt, title, duration, isInitialLiked = false,
}) {
  const [isLiked, setIsLiked] = useState(isInitialLiked);

  const onClickLike = () => setIsLiked((state) => !state);
  return (
    <li className={cn(className, styles.movie)}>
      <img src={link} alt={alt || title} className={styles.movie__img} />
      <div className={styles.movie__container}>
        <div className={styles.movie__content}>
          <p className={styles.movie__title}>{title}</p>
          <Button
            className={cn(styles.btn, { [styles.btn_like]: isLiked })}
            onClick={onClickLike}
          />
        </div>
        <p className={styles.movie__duration}>
          {duration}
        </p>
      </div>
    </li>
  );
}
