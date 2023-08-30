import cn from 'classnames';
import { forwardRef } from 'react';
import styles from './Input.module.css';

export const Input = forwardRef(({
  // eslint-disable-next-line no-unused-vars
  className, innerRef, borderRadius = 8, ...rest
}, ref) => {
  const classNames = cn(className, styles.input, {
    [styles.input_radius_40]: borderRadius === 40, [styles.input_radius_8]: borderRadius === 8,
  });

  return <input {...rest} ref={ref} className={classNames} />;
});
