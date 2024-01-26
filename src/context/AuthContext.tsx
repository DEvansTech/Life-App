import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction
} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export type AuthContextType = {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
  userName: string;
  setUserName: Dispatch<SetStateAction<any>>;
  phone: string;
  setPhone: Dispatch<SetStateAction<any>>;
  emailLogin: (email: string, password: string) => void;
  phoneLogin: (phone: string) => void;
  phoneRegister: (
    name: string,
    userName: string,
    password: string,
    phone: string,
    email: string
  ) => void;
  logout: () => void;
  checkExpireTime: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const emailLogin = async (email: string, password: string) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (e: any) {
    switch (e.code) {
      case 'auth/wrong-password':
        console.error('The email or password entered is incorrect. Please try again');
        break;
      case 'auth/invalid-email':
        console.error('The email address entered is not valid.  Please try again.');
        break;
      case 'auth/user-not-found':
        console.error('The email address entered does not match an account in the system.  Please try again.');
        break;
    }
  }
};

const phoneLogin = async (phone: string) => {

}

const phoneRegister = async (
  name: string,
  userName: string,
  password: string,
  phone: string,
  email: string
) => { };

const checkExpireTime = async () => {
  return await auth().currentUser?.getIdTokenResult();
};

const logout = async () => {
  try {
    await auth().signOut();
  } catch (e) {
    console.error(e);
  }
};

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userName,
        setUserName,
        phone,
        setPhone,
        emailLogin,
        phoneLogin,
        phoneRegister,
        logout,
        checkExpireTime
      }}>
      {children}
    </AuthContext.Provider>
  );
};
