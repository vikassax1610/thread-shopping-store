import { createContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../utils/constants';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  mobile?: string;
  addresses?: Address[];
}

export interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  fullName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  isDefault?: boolean;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (data: { name: string; email: string; mobile: string; password: string }) => Promise<boolean>;
  updateProfile: (data: Partial<AuthUser>) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users
const DEMO_USERS: Record<string, { password: string; name: string; mobile: string }> = {
  'demo@threads.com': {
    password: '123456',
    name: 'Saurav Kumar',
    mobile: '+91 9876543210',
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useLocalStorage<AuthUser | null>(STORAGE_KEYS.AUTH_USER, null);
  const [loading] = [false]; // Simplified loading state

  const login = async (email: string, password: string): Promise<boolean> => {
    // Demo authentication
    const demoUser = DEMO_USERS[email];
    if (demoUser && demoUser.password === password) {
      const newUser: AuthUser = {
        id: Math.random().toString(36).substring(7),
        email,
        name: demoUser.name,
        mobile: demoUser.mobile,
        addresses: [
          {
            id: '1',
            type: 'home',
            fullName: demoUser.name,
            phone: demoUser.mobile,
            address: '24, Green Park',
            city: 'New Delhi',
            state: 'Delhi',
            zip: '110016',
            isDefault: true,
          },
        ],
      };
      setUser(newUser);
      return true;
    }
    return false;
  };

  const register = async (data: { name: string; email: string; mobile: string; password: string }): Promise<boolean> => {
    // Simple registration: just create the user
    const newUser: AuthUser = {
      id: Math.random().toString(36).substring(7),
      email: data.email,
      name: data.name,
      mobile: data.mobile,
      addresses: [],
    };
    setUser(newUser);
    // Also store this user for future logins
    DEMO_USERS[data.email] = {
      password: data.password,
      name: data.name,
      mobile: data.mobile,
    };
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (data: Partial<AuthUser>) => {
    setUser((old) => (old ? { ...old, ...data } : null));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: user !== null,
        loading,
        login,
        logout,
        register,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
