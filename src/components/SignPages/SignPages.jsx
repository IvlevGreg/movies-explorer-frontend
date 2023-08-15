import cn from 'classnames';
import styles from './SignPages.module.css';
import logo from '../../images/logo.svg';
import { Link } from '../Link';
import { Button } from '../Button';

export function SignPages({
  className, title, controllers, handleSubmit, link, btnText,
}) {
  // eslint-disable-next-line no-console

  return (
    <div className={cn(className, styles.page)}>
      <img src={logo} alt="лого" className={styles.page__img} />
      <h1 className={styles.page__title}>{title}</h1>
      <form
        onSubmit={handleSubmit}
        className={cn(
          styles.form__container,
          styles.form,
          styles.page__form,
          styles.form__container_size_20,
        )}
      >
        <div className={cn(styles.form__container, styles.form__container_size_24)}>
          {controllers}
        </div>

        <div className={cn(styles.form__container, styles.form__container_size_14)}>
          <Button
            type="submit"
            variant="primary"
            color="blue"
            size="l"
            block
          >
            {btnText}
          </Button>
          <p className={styles.page__signin}>
            linkText
            <Link
              href={link.href}
              color="blue"
              underline={false}
            >
              {link.text}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
