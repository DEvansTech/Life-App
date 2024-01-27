import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { Routes } from "../../navigators/routes";

const EnterEmailAndPassword = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <View>
      <TextInput
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <Button
        onPress={() => { navigation.navigate(Routes.DisplayNameAndAvatar) }}
        title="Submit"
        accessibilityLabel="Navigate to Display Name Setting page"
      />
    </View>
  );
}

export default EnterEmailAndPassword;