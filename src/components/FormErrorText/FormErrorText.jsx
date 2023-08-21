import cn from 'classnames';
import styles from './FormErrorText.module.css';

export function FormErrorText({ className, children }) {
  return (
    <p className={cn(className, styles.text)}>
      {children}
    </p>
  );
}
