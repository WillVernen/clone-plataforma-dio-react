import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AuthLayout } from '../../components/AuthLayout';
import { AuthFooter, AuthLink } from '../../components/AuthLayout/styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { PrivacyText } from './styles';

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
};

const schema = yup.object({
  name: yup.string().trim().min(2, 'Informe seu nome completo').required('Informe seu nome'),
  email: yup.string().trim().email('E-mail inválido').required('Informe seu e-mail'),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Crie uma senha'),
}).required();

const Register = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormValues>({
    defaultValues: { name: '', email: '', password: '' },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const [serverError, setServerError] = useState('');

  const onSubmit = async ({ name, email, password }: RegisterFormValues) => {
    setServerError('');
    const normalizedEmail = email.trim().toLowerCase();

    try {
      const { data: existingUsers } = await api.get('/users', {
        params: { email: normalizedEmail },
      });

      if (existingUsers.length > 0) {
        setServerError('Já existe uma conta cadastrada com esse e-mail.');
        return;
      }

      await api.post('/users', {
        name: name.trim(),
        email: normalizedEmail,
        password,
      });
      navigate('/login', {
        state: { message: 'Cadastro realizado! Entre com seu e-mail e sua senha.' },
      });
    } catch {
      setServerError('Não foi possível criar sua conta. Verifique se a API está em execução e tente novamente.');
    }
  };

  return (
    <AuthLayout
      title="Comece agora grátis"
      subtitle="Crie sua conta e make the change."
      message={serverError}
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          name="name"
          control={control}
          errorMessage={errors.name?.message}
          placeholder="Nome completo"
          autoComplete="name"
          leftIcon={<MdPerson />}
        />
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
          autoComplete="new-password"
          leftIcon={<MdLock />}
        />
        <Button
          title={isSubmitting ? 'Criando conta...' : 'Criar minha conta'}
          variant="secondary"
          type="submit"
          fullWidth
          disabled={isSubmitting}
        />
      </form>
      <PrivacyText>
        Ao clicar em “criar minha conta grátis”, declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
      </PrivacyText>
      <AuthFooter>
        Já tenho conta. <AuthLink as={Link} to="/login">Fazer login</AuthLink>
      </AuthFooter>
    </AuthLayout>
  );
};

export { Register };
