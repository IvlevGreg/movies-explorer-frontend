import cn from 'classnames';
import styles from './Promo.module.css';
import { Heading } from '../../Heading';

export function Promo({ className }) {
  return (
    <section className={cn(className, styles.promo)}>
      <div className="main__content">
        <Heading size={1} className={styles.promo__title}>
          Учебный проект студента факультета
          Веб-разработки.
        </Heading>
      </div>

    </section>
  );
}
