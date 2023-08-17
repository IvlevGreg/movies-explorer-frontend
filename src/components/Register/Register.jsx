import { useForm } from 'react-hook-form';
import { Label } from '../Label';
import { NameController } from '../Controllers/NameController';
import { EmailController } from '../Controllers/EmailController';
import { PasswordController } from '../Controllers/PasswordController';
import { SignPages } from '../SignPages';
import { Button } from '../Button';
import styles from '../SignPages/SignPages.module.css';
import { Link } from '../Link';

export function Register({ className }) {
  const { control, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      name: '', email: '', password: '',
    },
  });

  // eslint-disable-next-line no-console
  const onSubmit = (data) => console.log(data);
  const controllers = (
    <>
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
    </>
  );

  const actionChildren = (
    <>
      <Button
        type="submit"
        variant="primary"
        color="blue"
        size="l"
        block
      >
        Зарегистрироваться
      </Button>
      <p className={styles.page__signin}>
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
    </>
  );

  return (
    <SignPages
      title="Добро пожаловать!"
      controllers={controllers}
      handleSubmit={handleSubmit(onSubmit)}
      actionChildren={actionChildren}
      className={className}
    />
  );
}
