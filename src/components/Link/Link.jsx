import cn from 'classnames';
import styles from './Link.module.css';

export function Link({
  className, children, underline = true, ...rest
}) {
  return (
    <a {...rest} className={cn(className, styles.link, { [styles.link__underline]: !underline })}>
      {children}
    </a>
  );
}
