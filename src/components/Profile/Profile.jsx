import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './Profile.module.css';
import { Label } from '../Label';
import { EmailController } from '../Controllers/EmailController';
import { NameController } from '../Controllers/NameController';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { SignPages } from '../SignPages';

export function Profile({ className }) {
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const { control, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      name: 'Виталий', email: 'pochta@yandex.ru',
    },
  });

  const onSubmit = (data) => {
    setIsFormDisabled(true);
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const controllers = (
    <>
      <Label
        direction="row"
        errorMessage={errors.name?.message}
        label="Имя"
      >
        <NameController
          control={control}
          className={styles.form__input}
          disabled={isFormDisabled}
        />
      </Label>
      <Divider color="gray" />
      <Label
        direction="row"
        errorMessage={errors.email?.message}
        label="E-mail"
      >
        <EmailController
          control={control}
          className={styles.form__input}
          disabled={isFormDisabled}
        />
      </Label>

    </>
  );

  const actionChildren = (
    <>
      <Button
        variant="text"
        type="button"
        size="m"
        onClick={() => {
          if (isFormDisabled) {
            setIsFormDisabled(false);
          } else {
            handleSubmit(onSubmit)();
          }
        }}
      >
        {isFormDisabled ? 'Редактировать' : 'Сохранить'}
      </Button>
      <Button
        variant="text"
        color="red"
        size="m"
        type="button"
        onClick={() => {
        }}
      >
        Выйти из аккаунта
      </Button>
    </>
  );

  return (
    <SignPages
      title="Рады видеть!"
      controllers={controllers}
      handleSubmit={handleSubmit(onSubmit)}
      actionChildren={actionChildren}
      className={className}
      isLogo={false}
    />
  );
}
