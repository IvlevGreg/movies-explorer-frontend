import { Controller } from 'react-hook-form';
import { Input } from '../../Input';

export function NameController({ className, control, ...rest }) {
  return (
    <Controller
      name="name"
      control={control}
      render={({ field }) => <Input {...field} {...rest} className={className} />}
    />
  );
}
