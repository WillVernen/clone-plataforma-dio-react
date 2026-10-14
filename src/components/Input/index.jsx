import React from 'react';

import { ErrorText, IconContainer, InputContainer, InputText } from './styles';
import { Controller } from 'react-hook-form';

const Input = ({ leftIcon, name, control, errorMessage, ...rest }) => {
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
  )
}

export { Input };