import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import styles from './SearchForm.module.css';
import { Label } from '../Label';
import { SearchController } from '../Controllers/SearchController';
import { Button } from '../Button';
import { FilterCheckboxController } from '../Controllers/FilterCheckboxController';

export function SearchForm({ className, onSubmit, defaultValues }) {
  const {
    control, watch, formState: { errors }, handleSubmit,
  } = useForm({
    defaultValues,
    // resolver: joiResolver(schemaSearchForm),
  });

  useEffect(() => {
    const subscription = watch(handleSubmit(onSubmit));
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  return (
    <form
      className={cn(className, styles.form)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Label
        errorMessage={errors.search?.message}
      >
        <SearchController control={control} placeholder="Фильм" borderRadius={40} />
        <Button className={styles.form__btn} />
      </Label>

      <label
        className={styles.form__label_checkbox}
      >
        <FilterCheckboxController control={control} />
        Короткометражки
      </label>

    </form>
  );
}
