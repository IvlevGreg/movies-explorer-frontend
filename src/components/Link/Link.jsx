import cn from 'classnames';
import styles from './Link.module.css';

export function Link({ className, children, ...rest }) {
  return (
    <a {...rest} className={cn(className, styles.link)}>
      {children}
    </a>
  );
}
