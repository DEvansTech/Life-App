// Home
// Add people
// Creat group
// Scan ID
// Search Nav !

import React, { PropsWithChildren } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "@Navigators/routes";
import HomeScreen from "@Screens/Home";
import AddPeopleScreen from "@Screens/AddPeople";
import CreateGroupScreen from "@Screens/CreateGroup";
import IDScanScreen from "@Screens/IDScan";

const Stack = createNativeStackNavigator();

const HomeStackNav: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.Home} screenOptions={{ gestureEnabled: true, headerShown: false }}>
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
      <Stack.Screen name={Routes.AddPeople} component={AddPeopleScreen} />
      <Stack.Screen name={Routes.CreateGroup} component={CreateGroupScreen} />
      <Stack.Screen name={Routes.IDScan} component={IDScanScreen} />
    </Stack.Navigator>
  );
}

export default HomeStackNav;