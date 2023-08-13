import cn from 'classnames';
import styles from './Promo.module.css';
import { Heading } from '../../Heading';

export function Promo({ className }) {
  return (
    <div className={cn(className, styles.promo)}>
      <Heading size={1} className={styles.promo__title}>
        Учебный проект студента факультета
        Веб-разработки.
      </Heading>
    </div>
  );
}
