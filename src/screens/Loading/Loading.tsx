import React, { useEffect } from "react";
import LoadingComp from "@Components/Loading";
import useAuth from "@Hooks/useAuth";
import { Routes } from "@Navigators/routes";

import styles from "./styles";

const LoadingScreen = ({ navigation }: any) => {
  const { authData, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (authData || authData !== undefined) navigation.navigate(Routes.BottomTabNav);
      else navigation.navigate(Routes.Landing);
    }
  }, [authData, loading]);

  return (
    <LoadingComp />
  );
}

export default LoadingScreen;