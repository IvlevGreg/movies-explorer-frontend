import { Controller } from 'react-hook-form';
import { Switcher } from '../../Switcher';

export function FilterCheckboxController({ className, control, ...rest }) {
  return (
    <Controller
      name="filter"
      control={control}
      render={({ field }) => (
        <Switcher
          {...field}
          {...rest}
          className={className}
        />
      )}
    />
  );
}
