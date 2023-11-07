import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { LandingScreen } from "./screens/landing";
import { EnterCellPhoneScreen } from "./screens/enter-cell-phone";

export default function App() {
  return (
    <View>
      <EnterCellPhoneScreen />
    </View>
  );
}
