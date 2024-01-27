import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { Routes } from "../../navigators/routes";
import useAuth from "../../hooks/useAuth";


const LandingScreen = ({ navigation }: any) => {
  const { authData, loading } = useAuth();

  useEffect(() => {
    console.log(authData);
    if (authData || authData !== undefined) navigation.navigate(Routes.BottomTabNav);
  }, [authData]);

  return (
    <View>
      <Text>Life App: {JSON.stringify(authData)}</Text>
      <Button
        onPress={() => navigation.navigate(Routes.EnterPhone)}
        title="Login"
        color="#841584"
        accessibilityLabel="Navigate to login page"
      />
      <Button
        onPress={() => navigation.navigate(Routes.EnterPhone)}
        title="Register"
        color="#f194ff"
        accessibilityLabel="Navigate to register page"
      />
    </View>
  );
}

export default LandingScreen;