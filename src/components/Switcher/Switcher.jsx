import cn from 'classnames';
import { forwardRef } from 'react';
import styles from './Switcher.module.css';

export const Switcher = forwardRef(({ className, ...rest }, ref) => (
  <label className={cn(className, styles.switcher)}>
    <input
      {...rest}
      checked={rest.value}
      ref={ref}
      type="checkbox"
      className={styles.switcher__input}
    />
    <span
      className={styles.switcher__switch}
    />
  </label>
));
