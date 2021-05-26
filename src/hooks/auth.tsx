import AsyncStorage from '@react-native-community/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthData {
  token: string;
  user: object;
}

interface AuthContextData {
  user: object;
  signIn({ email, password }: SignInCredentials): Promise<void>;
  signOut(): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>({} as AuthData);

  useEffect(() => {
    async function loadStorage(): Promise<void> {
      const token = await AsyncStorage.getItem('@Gobarber:token');
      const user = await AsyncStorage.getItem('@Gobarber:user');

      if (token && user) setAuthData({ token, user: JSON.parse(user) });
    }

    loadStorage();
  }, [AsyncStorage]);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    await AsyncStorage.multiSet([
      ['@Gobarber:token', response.data.token],
      ['@Gobarber:user', JSON.stringify(response.data.user)],
    ]);
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@Gobarber:token', '@Gobarber:user']);

    setAuthData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: authData.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('Context must be used within an  AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
