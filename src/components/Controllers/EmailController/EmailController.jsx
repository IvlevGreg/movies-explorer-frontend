import { Controller } from 'react-hook-form';
import { Input } from '../../Input';

export function EmailController({ className, control, ...rest }) {
  return (
    <Controller
      name="email"
      control={control}
      render={({ field }) => <Input {...field} {...rest} className={className} />}
    />
  );
}
