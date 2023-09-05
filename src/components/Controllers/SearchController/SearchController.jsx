import { Controller } from 'react-hook-form';
import { Input } from '../../Input';

export function SearchController({ className, control, ...rest }) {
  return (
    <Controller
      name="search"
      control={control}
      render={({ field }) => <Input {...field} {...rest} className={className} />}
    />
  );
}
