import cn from 'classnames';
import styles from './Button.module.css';

export function Button({
  className, children, variant = 'primary', color = 'Blue', size = 'm', block, ...rest
}) {
  const classNames = cn(
    className,
    styles.button,
    {
      // variant
      [styles.button_variant_primary]: variant === 'primary',
      [styles.button_variant_text]: variant === 'text',
      [styles.button_color_blue]: color === 'blue',
      [styles.button_color_green]: color === 'green',
      // size
      [styles.button_size_m]: size === 'm',
      [styles.button_size_l]: size === 'l',

      [styles.button_w_100]: block,
    },
  );

  return (

  // eslint-disable-next-line react/button-has-type
    <button {...rest} className={classNames}>
      {children}
    </button>
  );
}
