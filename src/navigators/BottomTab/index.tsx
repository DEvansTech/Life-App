// HomeNav
// ChatNav
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Routes } from "../routes";
import HomeStackNav from "../Home";
import ChatStackNav from "../Chat";

const Tab = createBottomTabNavigator();

const BottomTabNav: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.HomeStackNav}
    >
      <Tab.Screen name={Routes.HomeStackNav} component={HomeStackNav}></Tab.Screen>
      <Tab.Screen name={Routes.ChatStackNav} component={ChatStackNav}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default BottomTabNav;