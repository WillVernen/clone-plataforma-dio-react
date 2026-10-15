import type { ElementType, ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  as?: ElementType;
} & Record<string, unknown>;

const Button = ({ title, variant = 'primary', type = 'button', as: Component = 'button', fullWidth = false, ...props }: ButtonProps) => {
  return (
    <ButtonContainer
      as={Component}
      $variant={variant}
      $fullWidth={fullWidth}
      {...(Component === 'button' ? { type } : {})}
      {...props}
    >
      {title}
    </ButtonContainer>
  );
};

export { Button };