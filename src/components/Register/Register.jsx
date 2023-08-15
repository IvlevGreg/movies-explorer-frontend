import cn from 'classnames';
import { useForm } from 'react-hook-form';
import styles from './Register.module.css';
import logo from '../../images/logo.svg';
import { Link } from '../Link';
import { Label } from '../Label';
import { NameController } from '../Controllers/NameController';
import { EmailController } from '../Controllers/EmailController';
import { PasswordController } from '../Controllers/PasswordController';
import { Button } from '../Button';

export function Register({ className }) {
  const { control, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      name: '', email: '', password: '',
    },
  });
    // eslint-disable-next-line no-console
  const onSubmit = (data) => console.log(data);

  return (
    <div className={cn(className, styles.register)}>
      <img src={logo} alt="лого" className={styles.register__img} />
      <h1 className={styles.register__title}>Добро пожаловать!</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(styles.form__container, styles.form, styles.form__container_size_20)}
      >
        <div className={cn(styles.form__container, styles.form__container_size_24)}>
          <Label
            errorMessage={errors.name?.message}
            label="Имя"
          >
            <NameController control={control} />
          </Label>

          <Label
            errorMessage={errors.email?.message}
            label="E-mail"
          >
            <EmailController control={control} />
          </Label>

          <Label
            errorMessage={errors.password?.message}
            label="Пароль"
          >
            <PasswordController control={control} />
          </Label>
        </div>

        <div className={cn(styles.form__container, styles.form__container_size_14)}>
          <Button
            type="submit"
            variant="primary"
            color="blue"
            size="l"
            block
          >
            Зарегистрироваться
          </Button>
          <p className={styles.register__signin}>
            Уже зарегистрированы?
            {' '}
            <Link
              href="signin"
              color="blue"
              underline={false}
            >
              Войти
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
