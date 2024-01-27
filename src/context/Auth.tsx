import React, { useState, useEffect, PropsWithChildren } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn: (phone: string, code: string) => void;
  register: (
    phone: string,
    email: string,
    password: string,
    displayName: string,
    avatar: string
  ) => void;
  signOut: () => void;
};

export type AuthData = {
  token: string;
  email: string;
  name: string;
  displayName: string;
  avatar?: string;
};

export const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorageData function.
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      //Try get the data from Async Storage
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        //If there are data, it's converted to an Object and the state is updated.
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
    } finally {
      //loading finished
      setLoading(false);
    }
  }

  const signIn = async (phone: string, code: string) => {
    // try to login to firebase and get data from firebase
    const _authData = {
      token: "0x0329498a832909f09a9d0abe",
      email: "zackhartson.tech@outlook.com",
      name: "Zachary Hartson",
      displayName: "Zack",
    }

    setAuthData(_authData);
    await AsyncStorage.setItem("@AuthData", JSON.stringify(_authData));
  }

  const register = async (
    phone: string,
    email: string,
    password: string,
    displayName: string,
    avatar: string
  ) => {
    const _authData = {
      token: "0x0329498a832909f09a9d0abe",
      email: "zackhartson.tech@outlook.com",
      name: "Zachary Hartson",
      displayName: "Zack",
    }

    setAuthData(_authData);
    await AsyncStorage.setItem("@AuthData", JSON.stringify(_authData));
  }

  const signOut = async () => {
    setAuthData(undefined);
    await AsyncStorage.removeItem("@AuthData");
  }
  return (
    <AuthContext.Provider value={{
      authData,
      loading,
      signIn,
      register,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;