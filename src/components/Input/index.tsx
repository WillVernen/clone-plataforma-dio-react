import type { ReactNode, InputHTMLAttributes } from 'react';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';

import { ErrorText, IconContainer, InputContainer, InputText } from './styles';
import { Controller } from 'react-hook-form';

type InputProps<TFieldValues extends FieldValues = FieldValues> = InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: ReactNode;
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  errorMessage?: string;
};

const Input = <TFieldValues extends FieldValues = FieldValues>({ leftIcon, name, control, errorMessage, ...rest }: InputProps<TFieldValues>) => {
  const errorId = `${name}-error`;

  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer aria-hidden="true">{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <InputText
              {...field}
              {...rest}
              aria-label={rest.placeholder}
              aria-invalid={Boolean(errorMessage)}
              aria-describedby={errorMessage ? errorId : undefined}
            />
          )}
        />
      </InputContainer>
      {errorMessage ? <ErrorText id={errorId} role="alert">{errorMessage}</ErrorText> : null}
    </>
  );
};

export { Input };