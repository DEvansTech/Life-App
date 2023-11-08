import * as React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

import { LandingScreen } from "./screens/landing";
import { OtpVerify } from "./screens/otp-verify";
import { EnterCellPhoneScreen } from "./screens/enter-cell-phone";
import { RegisterProcess } from "./screens/register-process";

function HomeScreen({ navigation }: { navigation: any }) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    console.log("not loaded");
    return <StatusBar />;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
