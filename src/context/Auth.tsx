import React, { useState, useEffect, PropsWithChildren } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FirebaseAuthTypes, firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import Config from "../../config";
import { getProfile, insertProfile } from "../redux/firestore";

// Firebase config
if (!firebase.apps.length) {
  firebase.initializeApp(Config.firebaseEnv);
}

export type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signInWithPhoneNumber: (phone: string) => void;
  signInWithEmailPassword: (email: string, password: string) => void;
  confirmCode: (code: string) => void;
  register: (
    phone: string,
    email: string,
    password: string,
    fullName: string,
    userName: string,
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
  phone?: string;
};

export const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult>();

  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorageData function.
    loadStorageData();
  }, []);

  useEffect(
    () =>
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          const token = await user.getIdToken();
          const _profile = await getProfile(user.uid);
          const _authData = {
            token,
            email: user.email || "",
            name: user.displayName || _profile?.fullName || "",
            displayName: _profile?.username || "",
            avatar: user.photoURL || "",
            phone: user.phoneNumber || "",

          };
          setAuthData(_authData);
          await AsyncStorage.setItem("@AuthData", JSON.stringify(_authData));
        } else { }
      }),
    []
  );

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

  const signInWithPhoneNumber = async (phone: string) => {
    const confirmation = await auth().signInWithPhoneNumber(phone);
    setConfirm(confirmation);
  }

  const signInWithEmailPassword = async (email: string, password: string) => {
    await auth().signInWithEmailAndPassword(email, password);
  }

  const confirmCode = async (code: string) => {
    try {
      await confirm?.confirm(code);
    } catch (error) { 
      console.log(error);
     }
  }

  const register = async (
    phone: string,
    email: string,
    password: string,
    fullName: string,
    userName: string,
    avatar: string
  ) => {
    const newUser = await auth().currentUser;
    if (newUser) {
      try {
        const emailCredential = auth.EmailAuthProvider.credential(email, password);
        await newUser.linkWithCredential(emailCredential);

        const update = {
          displayName: fullName,
          photoURL: avatar,
        };
        await newUser?.updateProfile(update);
        
        const payload = {
          id: newUser.uid, 
          fullName,
          email,
          username: userName,
          phone
        };
        insertProfile(payload);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const signOut = async () => {
    await auth().signOut()
    setAuthData(undefined);
    await AsyncStorage.removeItem("@AuthData");
  }

  return (
    <AuthContext.Provider value={{
      authData,
      loading,
      signInWithPhoneNumber,
      signInWithEmailPassword,
      confirmCode,
      register,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;