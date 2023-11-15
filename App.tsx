import * as React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import {
  LandingScreen,
  OtpVerify,
  EnterCellPhoneScreen,
  RegisterProcess,
  SuccessScreen,
  RegisterProcessDeactivated,
  RegisterProcessDeactivatedTwo,
  RegisterProcessDeactivatedThree,
  RegistrationSuccess,
  ModalTest,
} from "./src/screens/onboarding";
import { BottomTabNavigator } from "./src/navigation/bottom-tab";
import SidebarView from "./src/screens/sidebar/sidebar";
import PrivacyPolicyView from "./src/screens/sidebar/privacy_policy";
import EulaView from "./src/screens/sidebar/eula";
import TermsOfUseView from "./src/screens/sidebar/terms_of_use";
import AccountSettingsView from "./src/screens/sidebar/account_settings";
import ZedPayView from "./src/screens/sidebar/zed_pay";
import PinUpdateView from "./src/screens/sidebar/pin_update";
import CreditCardSettingsView from "./src/screens/sidebar/creditcard_settings";

function HomeScreen({ navigation }: { navigation: any }) {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
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
      />
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
      /> */}
      <Button
        onPress={() => navigation.navigate("Modal-Test")}
        title="Modal Test"
      />
      <Button onPress={() => navigation.navigate("Tabs")} title="Bottom Tab" />
      <Button onPress={() => navigation.navigate("sidebar")} title="Sidebar" />
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
        <Stack.Screen
          name="Tabs"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sidebar"
          component={SidebarView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="privacy_policy"
          component={PrivacyPolicyView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="eula"
          component={EulaView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="terms_of_use"
          component={TermsOfUseView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="account_settings"
          component={AccountSettingsView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="zed_pay"
          component={ZedPayView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pin_update"
          component={PinUpdateView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="credit_settings"
          component={CreditCardSettingsView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
