import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SideBarView from "../screens/sidebar/sidebar";
import AccountSettingsView from "../screens/sidebar/account_settings";
import ZedPayView from "../screens/sidebar/zed_pay";
import PrivacyPolicyView from "../screens/sidebar/privacy_policy";
import EulaView from "../screens/sidebar/eula";
import TermsOfUseView from "../screens/sidebar/terms_of_use";

export type SideBarStackParams = {
  sidebar: undefined;
  account_settings: undefined;
  zed_pay: undefined;
  privacy_policy: undefined;
  eula: undefined;
  terms_of_use: undefined;
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
      <MenuNav.Screen
        name="account_settings"
        component={AccountSettingsView}
        options={{ 
          headerShown: false 
        }}
      />
      <MenuNav.Screen
        name="privacy_policy"
        component={PrivacyPolicyView}
        options={{ 
          headerShown: false 
        }}
      />
      <MenuNav.Screen
        name="zed_pay"
        component={ZedPayView}
        options={{ 
          headerShown: false 
        }}
      />
      <MenuNav.Screen
        name="eula"
        component={EulaView}
        options={{ 
          headerShown: false 
        }}
      />
      <MenuNav.Screen
        name="terms_of_use"
        component={TermsOfUseView}
        options={{ 
          headerShown: false 
        }}
      />
    </MenuNav.Navigator>
  );
};
