import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  RouteProp,
  getFocusedRouteNameFromRoute,
  useRoute,
} from "@react-navigation/native";

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { HomeScreen } from "../screens/home/home";
import { HomeAddPeople } from "../screens/home/add-people";
import { BottomTabParams } from "./bottom-tab";
import { SideBarStack } from "./menu-stack";
import { ChatScreen } from "../screens/chat/chat";
import ChatDetails from "../screens/chat/chat_details";

/**
 * Type for the home stack params
 */
export type MessageStackParams = {
  Chat: undefined;
  "Chat-Details": undefined;
};

// define the stack navigator
const StackNav = createNativeStackNavigator<MessageStackParams>();

// define the screen props
type MessageStackTabParams = BottomTabScreenProps<BottomTabParams, "ChatsTab">;

export interface MessageStackScreenParams<
  T extends keyof MessageStackParams = "Chat"
> {
  initialRouteName?: T;
  initialProfileParams?: MessageStackParams[T];
}

export /**
 * Message Stack, used for navigating between the different screens associated with the Message content
 * Dealing with nesting nav types: https://reactnavigation.org/docs/typescript#nesting-navigators
 *
 * @return {*}
 */
const MessageStackNav: React.FC<MessageStackTabParams> = ({
  navigation,
  route,
}) => {
  // hide tab bar in specific screens
  // resource: https://stackoverflow.com/questions/51352081/react-navigation-how-to-hide-tabbar-from-inside-stack-navigation/64789273#64789273
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      (routeName === "View-Comp" || routeName === "View-Team" || "Chat-Details") &&
      Platform.OS !== "ios"
    )
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    else navigation.setOptions({ tabBarStyle: { display: "flex" } });
  }, [navigation, route]);

  // get the route params
  //   const { initialRouteName, initialProfileParams } =
  //     useRoute<RouteProp<{ params: HomeStackScreenParams }, "params">>().params;

  return (
    <StackNav.Navigator
      screenOptions={{ gestureEnabled: true }}
      initialRouteName={"Chat"}
    >
      <StackNav.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          animationTypeForReplace: "pop",
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="Chat-Details"
        component={ChatDetails}
        options={{
          animationTypeForReplace: "pop",
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
  );
};
