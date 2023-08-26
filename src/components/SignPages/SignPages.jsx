import cn from 'classnames';
import styles from './SignPages.module.css';
import logo from '../../images/logo.svg';
import { FormErrorText } from '../FormErrorText';

export function SignPages({
  className, title, controllers, formErrors, handleSubmit, actionChildren, isLogo = true,
}) {
  return (
    <div className={cn(className, styles.page, { [styles.page_logo]: isLogo })}>
      {isLogo && <img src={logo} alt="лого" className={styles.page__img} />}
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
        <div className={cn(
          styles.form__container,
          styles.form__controllers,
          styles.form__container_size_24,
        )}
        >
          {controllers}
        </div>

        <div className={cn(styles.form__container, styles.form__container_size_14)}>
          {formErrors && (
          <FormErrorText>
            {(formErrors.message || 'неизвестная ошибка')}
          </FormErrorText>
          ) }
          {actionChildren}
        </div>
      </form>
    </div>
  );
}
