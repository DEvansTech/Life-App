import React from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  View
} from "react-native";
import { Routes } from "../../navigators/routes";

const VerifyOTPScreen = ({ navigation }: any) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView>
        <Text
          style={{ fontFamily: "Poppins" }}
        >
          Please Validate the OTP {"\n"} number
        </Text>
        <View>
          <TextInput
            keyboardType="phone-pad"
            placeholder="0"
          />
          <TextInput
            keyboardType="phone-pad"
            placeholder="0"
          />
          <TextInput
            keyboardType="phone-pad"
            placeholder="0"
          />
          <TextInput
            keyboardType="phone-pad"
            placeholder="0"
          />
          <TextInput
            keyboardType="phone-pad"
            placeholder="0"
          />
          <TextInput
            keyboardType="phone-pad"
            placeholder="0"
          />
        </View>
        <View>
          <Button
            onPress={() => { navigation.navigate(Routes.EnterEmailAndPassword) }}
            title="Confirm"
            color="#f194ff"
            accessibilityLabel="Confirm OTP code"
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default VerifyOTPScreen;