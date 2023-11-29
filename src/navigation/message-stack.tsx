import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { BottomTabParams } from "./bottom-tab";
import { ChatScreen } from "../screens/chat/chat";
import ChatDetails from "../screens/chat/chat_details";
import IncomingCallView from "../screens/chat/incoming-call";
import OnCallAudioView from "../screens/chat/on-call";
import VideoIncomingCallView from "../screens/chat/video-incoming-call";
import OnCallVideoView from "../screens/chat/video-on-call";
import AddBalanceView from "../screens/zedpay/add_balance";
import AddCardDetailsView from "../screens/zedpay/add_card_details";

/**
 * Type for the home stack params
 */
export type MessageStackParams = {
  Chat: undefined;
  "Chat-Details": undefined;
  "Incoming-Call": undefined;
  "On-Call-Audio": undefined;
  "Video-Incoming-Call": undefined;
  "On-Call-Video": undefined;
  "ZedPay-Add-Balance": undefined;
  "ZedPay-Add-Card-Details": undefined;
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
      (routeName === "View-Comp" ||
        routeName === "View-Team" ||
        routeName === "Chat-Details" ||
        routeName === "ZedPay-Add-Balance" ||
        routeName === "ZedPay-Add-Card-Details") &&
      Platform.OS !== "ios"
    ) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else if (
      routeName === "Incoming-Call" ||
      routeName === "On-Call-Audio" ||
      routeName === "Video-Incoming-Call" ||
      routeName === "On-Call-Video"
    ) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else navigation.setOptions({ tabBarStyle: { display: "flex" } });
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
      <StackNav.Screen
        name="Incoming-Call"
        component={IncomingCallView}
        options={{
          animationTypeForReplace: "pop",
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="On-Call-Audio"
        component={OnCallAudioView}
        options={{
          animationTypeForReplace: "pop",
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="Video-Incoming-Call"
        component={VideoIncomingCallView}
        options={{
          animationTypeForReplace: "pop",
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="On-Call-Video"
        component={OnCallVideoView}
        options={{
          animationTypeForReplace: "pop",
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="ZedPay-Add-Balance"
        component={AddBalanceView}
        options={{
          animationTypeForReplace: "pop",
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="ZedPay-Add-Card-Details"
        component={AddCardDetailsView}
        options={{
          animationTypeForReplace: "pop",
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
  );
};
