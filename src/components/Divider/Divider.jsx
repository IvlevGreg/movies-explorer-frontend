import cn from 'classnames';
import styles from './Divider.module.css';

export function Divider({ className, color }) {
  const classNames = cn(className, styles.divider, {
    [styles.divider_color_black]: color === 'black',
    [styles.divider_color_white]: color === 'white',
  });
  return (
    <div className={classNames} />
  );
}
