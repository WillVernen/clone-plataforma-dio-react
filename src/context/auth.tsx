import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../services/api';
import type { IUser, IUserRecord } from '../types/user';
import type { IAuthContext, IAuthContextProvidersProps, ILoginData } from './types';

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthContextProvider = ({ children }: IAuthContextProvidersProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }: ILoginData) => {
    setLoginError(null);

    try {
      const { data: users } = await api.get<IUserRecord[]>('/users', {
        params: { email: email.trim().toLowerCase() },
      });
      const authenticatedUser = users.find(
        (candidate) => (candidate.password ?? candidate.senha) === password,
      );

      if (!authenticatedUser) {
        setLoginError('E-mail ou senha inválidos. Confira seus dados e tente novamente.');
        return;
      }

      setUser({
        id: authenticatedUser.id,
        name: authenticatedUser.name,
        email: authenticatedUser.email,
      });
      navigate('/feed');
    } catch {
      setLoginError(
        'Não foi possível acessar sua conta. Verifique se a API está em execução e tente novamente.',
      );
    }
  };

  const handleSignOut = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, loginError, handleLogin, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
