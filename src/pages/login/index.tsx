import { useState } from 'react';
import { MdEmail, MdLock } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AuthLayout } from '../../components/AuthLayout';
import { AuthFooter, AuthLink } from '../../components/AuthLayout/styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/useAuth';

type LoginFormValues = {
  email: string;
  password: string;
};

type LoginLocationState = {
  message?: string;
};

const schema = yup.object({
  email: yup.string().trim().email('E-mail inválido').required('Informe seu e-mail'),
  password: yup.string().min(6, 'No mínimo 6 caracteres').required('Informe sua senha'),
}).required();

const Login = () => {
  const { handleLogin, loginError } = useAuth();
  const location = useLocation();
  const registrationMessage = (location.state as LoginLocationState | null)?.message;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData: LoginFormValues) => {
    setIsSubmitting(true);
    await handleLogin(formData);
    setIsSubmitting(false);
  };

  return (
    <AuthLayout
      title="Entre na sua conta"
      subtitle="Faça seu login e make the change."
      message={loginError || registrationMessage}
      messageType={registrationMessage && !loginError ? 'success' : 'error'}
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
          disabled={isSubmitting || !isValid}
        />
      </form>
      <AuthFooter>
        <AuthLink as={Link} to="/cadastro">Criar minha conta</AuthLink>
      </AuthFooter>
    </AuthLayout>
  );
};

export { Login };
