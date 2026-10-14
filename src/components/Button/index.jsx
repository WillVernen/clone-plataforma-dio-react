import { ButtonContainer } from './styles';

const Button = ({ title, variant = 'primary', type = 'button', as = 'button', fullWidth = false, ...props }) => {
  return (
    <ButtonContainer
      as={as}
      $variant={variant}
      $fullWidth={fullWidth}
      {...(as === 'button' ? { type } : {})}
      {...props}
    >
        {title}
    </ButtonContainer>
  )
}

export { Button }