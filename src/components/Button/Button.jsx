import cn from 'classnames';
import styles from './Button.module.css';

export function Button({
  className, children, variant = 'primary', disabled, color = 'Blue', size = 'm', block, isLoading, ...rest
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
      [styles.button_color_red]: color === 'red',
      [styles.button_color_gray]: color === 'gray',
      // size
      [styles.button_size_m]: size === 'm',
      [styles.button_size_l]: size === 'l',
      [styles.button_size_0]: size === '0',

      [styles.button_w_100]: block,
    },
  );

  return (

  // eslint-disable-next-line react/button-has-type
    <button {...rest} className={classNames} disabled={disabled || !!isLoading}>
      {isLoading ? 'загрузка' : children}
    </button>
  );
}
