import React from "react";
import { Button, View } from "react-native";
import useAuth from "@Hooks/useAuth";
import { Routes } from "@Navigators/routes";

const DisplayNameAndAvatarScreen = ({ navigation }: any) => {
  const { register } = useAuth();
  const handleRegister = async () => {
    register("12345678", "zackhartson.tech@outlook.com", "123456", "zack", "");
    navigation.navigate(Routes.RegisterSuccess);
  }
  return (
    <View>
      <Button
        onPress={handleRegister}
        title="Submit"
        accessibilityLabel="register"
      />
    </View>
  );
}

export default DisplayNameAndAvatarScreen;