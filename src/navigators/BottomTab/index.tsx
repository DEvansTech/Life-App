// HomeNav
// ChatNav
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Routes } from "@Navigators/routes";
import ChatStackNav from "@Navigators/Chat";
import HomeStackNav from "@Navigators/Home"
const Tab = createBottomTabNavigator();

interface TabBarIconProps {
  isFocused: boolean;
  color: string;
  size: number;
}
const HomeIcon = ({ isFocused, color, size }: TabBarIconProps) => (
  <Foundation name="home" color={color} size={size} />
)
const ChatIcon = ({ isFocused, color, size }: TabBarIconProps) => (
  <Ionicons name="chatbubble-ellipses-outline" color={color} size={size} />
)

const BottomTabNav: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#2A5C81",
        tabBarBackground: () => (<View className="bg-[#FAFAFA] w-full h-full"></View>),
        tabBarStyle: { paddingTop: 10 }
      }}
      initialRouteName={Routes.HomeStackNav}
    >
      <Tab.Screen
        name={Routes.HomeStackNav}
        component={HomeStackNav}
        options={{
          title: "Home",
          headerTitle: "Home",
          tabBarIcon: HomeIcon,
          headerShown: false
        }}
      />
      <Tab.Screen
        name={Routes.ChatStackNav}
        component={ChatStackNav}
        options={{
          title: "Chat",
          headerTitle: "Chat",
          tabBarIcon: ChatIcon,
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNav;