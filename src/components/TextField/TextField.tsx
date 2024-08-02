import { InputHTMLAttributes, forwardRef } from 'react';

import * as S from './style';

type Props = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<any>;

export const TextField = forwardRef<HTMLInputElement, Props>(({ label, error, ...rest }, ref) => {
  return (
    <div>
      <label htmlFor={rest.id}>{label}</label>
      <S.Input ref={ref} aria-invalid={error ? 'true' : 'false'} {...rest} />
      <S.Error>{error}</S.Error>
    </div>
  );
});
