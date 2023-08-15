import { useForm } from 'react-hook-form';
import { Label } from '../Label';
import { NameController } from '../Controllers/NameController';
import { EmailController } from '../Controllers/EmailController';
import { PasswordController } from '../Controllers/PasswordController';
import { SignPages } from '../SignPages';

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

  const linkProps = {
    linkText: 'Уже зарегистрированы? ',
    href: 'signin',
    text: 'Войти',
  };

  return (
    <SignPages
      defaultValues={{
        name: '', email: '', password: '',
      }}
      title="Добро пожаловать!"
      controllers={controllers}
      handleSubmit={handleSubmit(onSubmit)}
      btnText="Зарегистрироваться"
      link={linkProps}
      className={className}
    />
  );
}
