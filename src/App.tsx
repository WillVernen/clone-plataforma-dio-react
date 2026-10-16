import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';

import { AuthContextProvider } from './context/auth';
import { useAuth } from './hooks/useAuth';
import { Feed } from './pages/feed';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Register } from './pages/register';

const ProtectedFeed = () => {
  const { user } = useAuth();

  return user ? <Feed /> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/feed" element={<ProtectedFeed />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
