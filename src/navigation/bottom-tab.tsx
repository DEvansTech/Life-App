import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Foundation, Feather } from "@expo/vector-icons";
import { HomeStackNav, HomeStackScreenParams } from "./home-stack";
import { MessageStackNav, MessageStackScreenParams } from "./message-stack";

export type BottomTabParams = {
  HomeTab: HomeStackScreenParams<"Home">;
  ChatsTab: MessageStackScreenParams<"Chat">;
};

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}
const HomeIcon = ({ focused, color, size }: TabBarIconProps) => (
  <Foundation name={focused ? "home" : "home"} color={color} size={size} />
);

const ExploreIcon = ({ focused, color, size }: TabBarIconProps) => (
  <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
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
        component={HomeStackNav}
        // component={HomeAddPeople}
        // component={HomeScreen}
        initialParams={{
          initialRouteName: "Home",
        }}
        options={{
          title: "Home",
          headerTitle: "Home",
          tabBarIcon: HomeIcon,
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="ChatsTab"
        component={MessageStackNav}
        options={{
          title: 'Chats',
          headerTitle: "Chat",
          tabBarIcon: ExploreIcon,
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};
