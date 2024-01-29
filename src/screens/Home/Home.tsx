import React from "react";
import { Button, Text, View } from "react-native";
import styles from "./styles";
import useAuth from "@Hooks/useAuth";
import { Routes } from "@Navigators/routes";

const HomeScreen = ({ navigation }: any) => {
  const { signOut } = useAuth();
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => { signOut(); navigation.navigate(Routes.Landing) }}
        title="Sign out"
        accessibilityLabel="Sign out"
      />
    </View>
  );
}

export default HomeScreen;