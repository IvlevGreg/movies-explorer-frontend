import { Controller } from 'react-hook-form';
import { Input } from '../../Input';

export function PasswordController({ className, control, ...rest }) {
  return (
    <Controller
      name="password"
      control={control}
      render={({ field }) => <Input {...field} {...rest} type="password" className={className} />}
    />
  );
}
