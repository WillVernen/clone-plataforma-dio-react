import { MdEmail, MdLock } from 'react-icons/md';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AuthLayout } from '../../components/AuthLayout';
import { AuthFooter, AuthLink } from '../../components/AuthLayout/styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

const schema = yup.object({
  email: yup.string().trim().email('E-mail inválido').required('Informe seu e-mail'),
  password: yup.string().required('Informe sua senha'),
}).required();

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const registrationMessage = location.state?.message;
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const [serverError, setServerError] = useState('');

  const onSubmit = async ({ email, password }) => {
    setServerError('');
    try {
      const { data: users } = await api.get('/users', {
        params: { email: email.trim().toLowerCase(), senha: password },
      });

      if (users.length === 1) {
        navigate('/feed');
        return;
      }

      setServerError('E-mail ou senha inválidos. Confira seus dados e tente novamente.');
    } catch {
      setServerError('Não foi possível acessar sua conta. Verifique se a API está em execução e tente novamente.');
    }
  };

  return (
    <AuthLayout
      title="Entre na sua conta"
      subtitle="Faça seu login e make the change."
      message={serverError || registrationMessage}
      messageType={registrationMessage && !serverError ? 'success' : 'error'}
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          name="email"
          control={control}
          errorMessage={errors.email?.message}
          placeholder="E-mail"
          type="email"
          autoComplete="email"
          leftIcon={<MdEmail />}
        />
        <Input
          name="password"
          control={control}
          errorMessage={errors.password?.message}
          placeholder="Senha"
          type="password"
          autoComplete="current-password"
          leftIcon={<MdLock />}
        />
        <Button
          title={isSubmitting ? 'Entrando...' : 'Entrar'}
          variant="secondary"
          type="submit"
          fullWidth
          disabled={isSubmitting}
        />
      </form>
      <AuthFooter>
        <AuthLink as={Link} to="/cadastro">Criar minha conta</AuthLink>
      </AuthFooter>
    </AuthLayout>
  );
};

export { Login };
