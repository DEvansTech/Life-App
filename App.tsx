import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { LandingScreen } from "./screens/landing";
import { EnterCellPhoneScreen } from "./screens/enter-cell-phone";
import { OtpVerify } from "./screens/otp-verify";

export default function App() {
  return (
    <NavigationContainer>
      <View>
        <LandingScreen />
        {/* <EnterCellPhoneScreen/> */}
        {/* <OtpVerify /> */}
      </View>
    </NavigationContainer>
  );
}
