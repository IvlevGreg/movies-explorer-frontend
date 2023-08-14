import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import { Button } from '../Button';

export function NotFoundPage({ className }) {
  const navigate = useNavigate();

  return (
    <>
      <div className={cn(className, styles.page404)}>
        <h1 className={styles.page404__title}>404</h1>
        <p className={styles.page404__text}>Страница не найдена</p>
      </div>

      <Button
        onClick={() => navigate(-1)}
        variant="text"
        className={styles.page404__btn}
      >
        назад
      </Button>
    </>
  );
}
