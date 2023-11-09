import * as React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import { LandingScreen } from "./screens/landing";
import { OtpVerify } from "./screens/otp-verify";
import { EnterCellPhoneScreen } from "./screens/enter-cell-phone";
import { RegisterProcess } from "./screens/register-process";
import { SuccessScreen } from "./screens/success";
import { RegisterProcessDeactivated } from "./screens/registration-pro-deactivated";
import { RegisterProcessDeactivatedTwo } from "./screens/registration-pro-deactivated2";
import { RegisterProcessDeactivatedThree } from "./screens/registration-pro-deactivated3";
import { RegistrationSuccess } from "./screens/registration-success";
import { ModalTest } from "./screens/modal-test";

function HomeScreen({ navigation }: { navigation: any }) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    console.log("not loaded");
    return <StatusBar />;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      {/* <Button
        onPress={() => navigation.navigate("Landing")}
        title="Go to Landing"
      />
      <Button onPress={() => navigation.navigate("OTP")} title="Go to OTP" />
      <Button
        onPress={() => navigation.navigate("Cell-Phone")}
        title="Go to Cell"
      /> */}
      <Button
        onPress={() => navigation.navigate("Register-Process")}
        title="Register Process"
      />
      <Button
        onPress={() => navigation.navigate("Success")}
        title="Success Screen"
      />
      <Button
        onPress={() => navigation.navigate("Register-Pro-Deactivated")}
        title="Reg Pro Dev"
      />
      <Button
        onPress={() => navigation.navigate("Register-Pro-Deactivated-Two")}
        title="Reg Pro dev 2"
      />
      <Button
        onPress={() => navigation.navigate("Register-Pro-Deactivated-Three")}
        title="Reg Pro dev 3"
      />
      <Button
        onPress={() => navigation.navigate("Register-Success")}
        title="Reg Success"
      />
      <Button
        onPress={() => navigation.navigate("Modal-Test")}
        title="Modal Test"
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTP"
          component={OtpVerify}
          options={{
            title: "OTP Verification",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "rgb(242, 242, 242)",
            },
          }}
        />
        <Stack.Screen
          name="Cell-Phone"
          component={EnterCellPhoneScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register-Process"
          component={RegisterProcess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Success"
          component={SuccessScreen}
          options={{
            title: "Back to edit",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "rgb(242, 242, 242)",
            },
            headerTintColor: "#52525b",
          }}
        />
        <Stack.Screen
          name="Register-Pro-Deactivated"
          component={RegisterProcessDeactivated}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register-Pro-Deactivated-Two"
          component={RegisterProcessDeactivatedTwo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register-Pro-Deactivated-Three"
          component={RegisterProcessDeactivatedThree}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register-Success"
          component={RegistrationSuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Modal-Test"
          component={ModalTest}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
