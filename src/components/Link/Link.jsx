import cn from 'classnames';
import { Link as LinkRouter, NavLink } from 'react-router-dom';
import styles from './Link.module.css';

export function Link({
  className, children, underline = true, size, color, variant, type = 'a', ...rest
}) {
  const classNames = cn(className, styles.link, {
    [styles.link__underline]: !underline, // color
    [styles.link_color_green]: color === 'green',
    [styles.link_color_blue]: color === 'blue',

    // variant
    [styles.link_variant_primary]: variant === 'primary',

    // size
    [styles.link_size_m]: size === 'm',
  });

  const mapLinkComponents = {
    a: (
      <a {...rest} className={classNames}>
        {children}
      </a>
    ),
    LinkRouter: (
      <LinkRouter {...rest} className={classNames}>
        {children}
      </LinkRouter>
    ),
    NavLink: (
      <NavLink
        {...rest}
        className={({ isActive }) => cn(classNames, { [styles.link_active]: isActive })}
      >
        {children}
      </NavLink>
    ),
  };

  return mapLinkComponents[type] || mapLinkComponents.a;
}
