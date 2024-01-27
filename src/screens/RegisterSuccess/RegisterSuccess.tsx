import React from "react";
import { Button, View } from "react-native";

const RegisterSuccessScreen = () => {
  return (
    <View>
      <Button
        onPress={() => console.log("Registeration Successful")}
        title="Continue to the app"
        accessibilityLabel="Navigate to Home"
      />
    </View>
  );
}

export default RegisterSuccessScreen;