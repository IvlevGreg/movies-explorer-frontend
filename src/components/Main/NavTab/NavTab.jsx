import cn from 'classnames';
import styles from './NavTab.module.css';
import { List } from '../../List';
import { Link } from '../../Link';

const LINKS = [
  { children: <Link href="#about" className={styles.nav__link}>О проекте</Link> },
  { children: <Link href="#technologies" className={styles.nav__link}>Технологии</Link> },
  { children: <Link href="#student" className={styles.nav__link}>Студент</Link> },
];

export function NavTab({ className }) {
  return (
    <nav className={cn(className, styles.nav)}>
      <List elements={LINKS} className={styles.nav__list} />
    </nav>
  );
}
