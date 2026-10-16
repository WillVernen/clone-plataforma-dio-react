import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AuthContextProvider } from './auth';
import { useAuth } from '../hooks/useAuth';
import { api } from '../services/api';

jest.mock('../services/api', () => ({
  api: {
    get: jest.fn(),
  },
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

const mockGet = api.get as jest.Mock;

const AuthControls = () => {
  const { user, loginError, handleLogin, handleSignOut } = useAuth();

  return (
    <div>
      <p>{user?.name ?? 'Não autenticado'}</p>
      {loginError ? <p role="alert">{loginError}</p> : null}
      <button onClick={() => handleLogin({ email: ' WILL@EMAIL.COM ', password: '123456' })}>
        Entrar
      </button>
      <button onClick={handleSignOut}>Sair</button>
    </div>
  );
};

const renderAuthControls = () => render(
  <AuthContextProvider>
    <AuthControls />
  </AuthContextProvider>,
);

describe('AuthContextProvider', () => {
  beforeEach(() => {
    mockGet.mockReset();
  });

  it('authenticates with a normalized email and exposes only public user data', async () => {
    mockGet.mockResolvedValueOnce({
      data: [{ id: 1, name: 'Will', email: 'will@email.com', password: '123456' }],
    });
    renderAuthControls();

    fireEvent.click(screen.getByRole('button', { name: 'Entrar' }));

    expect(await screen.findByText('Will')).toBeInTheDocument();
    expect(mockGet).toHaveBeenCalledWith('/users', {
      params: { email: 'will@email.com' },
    });
  });

  it('shows an error when the credentials do not match', async () => {
    mockGet.mockResolvedValueOnce({
      data: [{ id: 1, name: 'Will', email: 'will@email.com', password: 'different' }],
    });
    renderAuthControls();

    fireEvent.click(screen.getByRole('button', { name: 'Entrar' }));

    expect(await screen.findByRole('alert')).toHaveTextContent('E-mail ou senha inválidos');
    expect(screen.getByText('Não autenticado')).toBeInTheDocument();
  });

  it('clears the authenticated user on sign out', async () => {
    mockGet.mockResolvedValueOnce({
      data: [{ id: 1, name: 'Will', email: 'will@email.com', password: '123456' }],
    });
    renderAuthControls();

    fireEvent.click(screen.getByRole('button', { name: 'Entrar' }));
    expect(await screen.findByText('Will')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Sair' }));
    await waitFor(() => expect(screen.getByText('Não autenticado')).toBeInTheDocument());
  });

  it('shows an API error when the request fails', async () => {
    mockGet.mockRejectedValueOnce(new Error('API unavailable'));
    renderAuthControls();

    fireEvent.click(screen.getByRole('button', { name: 'Entrar' }));

    expect(await screen.findByRole('alert')).toHaveTextContent('Não foi possível acessar sua conta');
  });
});
