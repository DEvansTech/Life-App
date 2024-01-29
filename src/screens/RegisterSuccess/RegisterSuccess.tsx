import useAuth from "@Hooks/useAuth";
import { Routes } from "@Navigators/routes";
import React, { useEffect } from "react";
import { Button, View } from "react-native";

const RegisterSuccessScreen = ({ navigation, route }: any) => {
  const phoneNum = route.params.phone;
  const code = route.params.code;
  const { signIn, authData } = useAuth();
  useEffect(() => {
    if (authData !== undefined) {
      navigation.navigate(Routes.BottomTabNav);
    }
  }, [authData])
  return (
    <View>
      <Button
        onPress={() => { console.log(phoneNum, code); signIn(phoneNum, code) }}
        title="Continue to the app"
        accessibilityLabel="Navigate to Home"
      />
    </View>
  );
}

export default RegisterSuccessScreen;