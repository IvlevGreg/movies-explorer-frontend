import { Controller } from 'react-hook-form';
import { Input } from '../../Input';
import { REQUIRED_MESSAGE } from '../../../utils/validation';

export function SearchController({ className, control, ...rest }) {
  return (
    <Controller
      name="search"
      control={control}
      rules={{ required: { value: true, message: REQUIRED_MESSAGE } }}
      render={({ field }) => <Input {...field} {...rest} className={className} />}
    />
  );
}
