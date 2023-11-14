import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/home/home";
import { HomeAddPeople } from "../screens/home/add-people";
import { ChatScreen } from "../screens/chat/chat";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons, Foundation, Feather } from "@expo/vector-icons";

// export type BottomTabParams = {
//   HomeTab: HomeStackParams<"Home">;
//   Explore: MessageStackParams<"Message-screen">;
// };

export type BottomTabParams = {
  HomeTab: undefined;
  Chats: undefined;
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
  <Foundation
    name={focused ? "home" : "home"}
    color={color}
    size={size}
  />
);

const ExploreIcon = ({ focused, color, size }: TabBarIconProps) => (
  <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
);

const settingsIcon = ({ focused, color, size }: TabBarIconProps) => (
  <Feather name="settings" size={size} color={color} />
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
          tabBarIcon: HomeIcon,
          headerShown: false,
          // headerStyle: {
          //   backgroundColor: "#00406E",
          // },
          // headerTintColor: "white",
        }}
      />

      <Tabs.Screen
        name="Chats"
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
