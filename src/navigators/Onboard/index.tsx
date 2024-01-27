import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../routes";
import LandingScreen from "../../screens/Landing";
import EnterPhoneScreen from "../../screens/EnterPhone";
import VerifyOTPScreen from "../../screens/VerifyOTP";
import EnterEmailAndPassword from "../../screens/EnterEmailAndPassword";
import RegisterSuccessScreen from "../../screens/RegisterSuccess";
import DisplayNameAndAvatarScreen from "../../screens/DisplayNameAndAvatar";
import BottomTabNav from "../BottomTab";

const Stack = createNativeStackNavigator();

const OnboardStackNav: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="LandingScreen">
      <Stack.Screen name={Routes.Landing} component={LandingScreen} />
      <Stack.Screen name={Routes.EnterPhone} component={EnterPhoneScreen} />
      <Stack.Screen name={Routes.VerifyOTP} component={VerifyOTPScreen} />
      <Stack.Screen name={Routes.EnterEmailAndPassword} component={EnterEmailAndPassword} />
      <Stack.Screen name={Routes.DisplayNameAndAvatar} component={DisplayNameAndAvatarScreen} />
      <Stack.Screen name={Routes.RegisterSuccess} component={RegisterSuccessScreen} />
      <Stack.Screen name={Routes.BottomTabNav} component={BottomTabNav} />
    </Stack.Navigator>
  );
}

export default OnboardStackNav;