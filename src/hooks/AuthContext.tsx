import { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  categoria: 'P' | 'A';
  genero: 'M' | 'F' | 'O';
  phone: string;
  groups: [];
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<string>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@TCC:token');
    const user = localStorage.getItem('@TCC:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    let result = '';
    await api.post('/authenticate/token/obtain/', {
      email,
      password,
    }).then((response) => {
      const { token, user } = response.data;
      localStorage.setItem('@TCC:token', token);
      localStorage.setItem('@TCC:user', JSON.stringify(user));
  
      setData({ token, user });

      result = 'Sucesso'
    }).catch((err) => {
      result = err = err.response.data.detail ? 'Credênciais inválidas' : 'Erro ao fazer login, tente novamente';
    });

    return result;
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@TCC:token');
    localStorage.removeItem('@TCC:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth precisa ser utilizado junto ao AuthProvider');
  }

  return context;
}
