import { Controller } from 'react-hook-form';
import { REQUIRED_MESSAGE } from '../../../utils/validation';
import { Input } from '../../Input';

export function NameController({ className, control, ...rest }) {
  return (
    <Controller
      name="name"
      control={control}
      rules={{ required: { value: true, message: REQUIRED_MESSAGE } }}
      render={({ field }) => <Input {...field} {...rest} className={className} />}
    />
  );
}
