import {createContext, ReactNode, useState} from 'react';

const API_URL = 'http://10.0.2.2:5000';

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
    
    return true;
  };

  const signIn = async (email: string, password: string): Promise<boolean> => {
    return true;
  };

  const signOut = async (): Promise<void> => {};

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        isLoading,
        signIn,
        signUp,
        signOut,
      }}>{children}</AuthContext.Provider>
  );
};
