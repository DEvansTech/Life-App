// Home
// Add people
// Creat group
// Scan ID
// Search Nav !

import React, { PropsWithChildren } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../routes";
import HomeScreen from "../../screens/Home";
import AddPeopleScreen from "../../screens/AddPeople";
import CreateGroupScreen from "../../screens/CreateGroup";
import IDScanScreen from "../../screens/IDScan";

const Stack = createNativeStackNavigator();

const HomeStackNav: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.Home} >
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
      <Stack.Screen name={Routes.AddPeople} component={AddPeopleScreen} />
      <Stack.Screen name={Routes.CreateGroup} component={CreateGroupScreen} />
      <Stack.Screen name={Routes.IDScan} component={IDScanScreen} />
    </Stack.Navigator>
  );
}

export default HomeStackNav;