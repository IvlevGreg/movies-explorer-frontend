import cn from 'classnames';
import styles from './Link.module.css';

export function Link({
  className, children, underline = true, size, color, variant, ...rest
}) {
  const classNames = cn(className, styles.link, {
    [styles.link__underline]: !underline,
    // color
    [styles.link_color_green]: color === 'green',

    // variant
    [styles.link_variant_primary]: variant === 'primary',

    // size
    [styles.link_size_m]: size === 'm',
  });

  return (
    <a {...rest} className={classNames}>
      {children}
    </a>
  );
}
