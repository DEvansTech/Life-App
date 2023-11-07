import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingScreen } from "./screens/landing";

function HomeScreen({ navigation }) {
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
          component={LandingScreen}
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
          component={LandingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
