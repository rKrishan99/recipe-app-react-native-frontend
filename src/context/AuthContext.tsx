import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {createContext, ReactNode, useState} from 'react';

const API_URL = 'http://192.168.43.221:5000';

interface AuthContextData {
  token: string | null;
  isLoading: boolean;
  userId: string | null;
  signUp: (email: string, password: string) => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const signUp = async (email: string, password: string): Promise<boolean> => {
    console.log(email, password);

    try {
      const result = await axios.post(`${API_URL}/api/auth/register`, {
        email,
        password,
      });

      if (result?.data?.success) return true;
      else return false;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }

      return false;
    }
  };

  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      const result = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });

      const {token, userId, success} = result?.data;

      if (success) {
        //Store token in async store
        await AsyncStorage.setItem('token', token);
        setToken(token);
        await AsyncStorage.setItem('userId', userId);
        setUserId(userId);

        return true;

      }else{
        return false;
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }

      return false;
    }
  };

  const signOut = async (): Promise<void> => {
    try{
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userId');
      setUserId(null);
      setToken(null)

    }catch(e){
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        isLoading,
        signIn,
        signUp,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
