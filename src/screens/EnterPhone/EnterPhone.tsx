import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { Routes } from "../../navigators/routes";

const EnterPhoneScreen = ({ navigation }: any) => {
  const [phone, setPhone] = useState("");

  return (
    <View>
      <Text>Enter Phone number</Text>
      <TextInput
        onChangeText={setPhone}
        value={phone}
      />
      <Button
        onPress={() => navigation.navigate(Routes.VerifyOTP)}
        title="Get OTP"
        accessibilityLabel="Navigate to OTP page"
      />
    </View>
  );
}

export default EnterPhoneScreen;