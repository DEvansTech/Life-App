import React, { useEffect } from "react";
import LoadingComp from "@Components/Loading";
import useAuth from "@Hooks/useAuth";
import { Routes } from "@Navigators/routes";

import styles from "./styles";

const LoadingScreen = ({ navigation }: any) => {
  const { authData, loading } = useAuth();

  useEffect(() => {
    console.log(authData);
    if (!loading) {
      if (authData) {
        if (authData.email) navigation.navigate(Routes.BottomTabNav);
        else navigation.navigate(Routes.RegisterProcess);
      } else navigation.navigate(Routes.Landing);
    }
  }, [authData, loading]);

  return (
    <LoadingComp />
  );
}

export default LoadingScreen;