import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SideBarView from "../screens/sidebar/sidebar";

export type SideBarStackParams = {
  sidebar: undefined;
};

const MenuNav = createNativeStackNavigator<SideBarStackParams>();

export /**
 * Settings Stack, used for navigating between settings and password screen
 *
 * @return {*}
 */
const SideBarStack: React.FC<{}> = () => {
  return (
    <MenuNav.Navigator>
      <MenuNav.Screen
        name="sidebar"
        component={SideBarView}
        options={{ headerShown: false }}
      />
    </MenuNav.Navigator>
  );
};
