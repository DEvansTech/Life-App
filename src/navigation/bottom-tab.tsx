import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/home/home";
import { ChatScreen } from "../screens/chat/chat";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

// export type BottomTabParams = {
//   HomeTab: HomeStackParams<"Home">;
//   Explore: MessageStackParams<"Message-screen">;
// };

export type BottomTabParams = {
  HomeTab: undefined;
  Chat: undefined;
};

/*
    Define Icons
*/
interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}
const HomeIcon = ({ focused, color, size }: TabBarIconProps) => (
  <MaterialCommunityIcons
    name={focused ? "home" : "home-outline"}
    // color={"#2A5C81"}
    color={color}
    size={size}
  />
);

const ExploreIcon = ({ focused, color, size }: TabBarIconProps) => (
  <MaterialIcons
    name={focused ? "search" : "search"}
    color={color}
    size={size}
  />
);

const Tabs = createBottomTabNavigator<BottomTabParams>();

export const BottomTabNavigator: React.FC<{}> = () => {
  return (
    <Tabs.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#2A5C81",
        tabBarStyle: { paddingTop: 10 },
      }}
    >
      <Tabs.Screen
        name="HomeTab"
        component={HomeScreen}
        // initialParams={{
        //   initialRouteName: "My-Profile",
        // }}

        options={{
          title: "Home",
          headerTitle: "Home",
          headerShown: false,
          tabBarIcon: HomeIcon,
          //   tabBarLabelStyle: { color: "#2A5C81" },
        }}
      />

      <Tabs.Screen
        name="Chat"
        component={ChatScreen}
        // initialParams={{
        //   initialRouteName: "Explore-Tabs",
        // }}
        options={{
          headerTitle: "Chat",
          tabBarIcon: ExploreIcon,
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};
