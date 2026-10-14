import { Header } from '../Header';
import {
  AuthContainer,
  FormPanel,
  FormTitle,
  IntroText,
  StatusMessage,
  Subtitle,
} from './styles';

const AuthLayout = ({ title, subtitle, message, messageType = 'error', children }) => (
  <>
    <Header />
    <AuthContainer>
      <IntroText>
        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
      </IntroText>
      <FormPanel>
        <FormTitle>{title}</FormTitle>
        <Subtitle>{subtitle}</Subtitle>
        {message ? (
          <StatusMessage $type={messageType} role={messageType === 'success' ? 'status' : 'alert'}>
            {message}
          </StatusMessage>
        ) : null}
        {children}
      </FormPanel>
    </AuthContainer>
  </>
);

export { AuthLayout };
