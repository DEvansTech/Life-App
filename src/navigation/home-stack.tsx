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
import { GroupCreation } from "../screens/home/group-creation";
import { SearchScreen } from "../screens/home/search";

/**
 * Type for the home stack params
 */
export type HomeStackParams = {
  Home: undefined;
  HomeAdd: undefined;
  SideBar: undefined;
  GroupCreation: undefined;
  Search: undefined;
};

// define the stack navigator
const StackNav = createNativeStackNavigator<HomeStackParams>();

// define the screen props
type HomeStackTabParams = BottomTabScreenProps<BottomTabParams, "HomeTab">;

export interface HomeStackScreenParams<
  T extends keyof HomeStackParams = "Home"
> {
  initialRouteName?: T;
  initialProfileParams?: HomeStackParams[T];
}

export /**
 * Home Stack, used for navigating between the different screens associated with the home content
 * Dealing with nesting nav types: https://reactnavigation.org/docs/typescript#nesting-navigators
 *
 * @return {*}
 */
const HomeStackNav: React.FC<HomeStackTabParams> = ({ navigation, route }) => {
  // hide tab bar in specific screens
  // resource: https://stackoverflow.com/questions/51352081/react-navigation-how-to-hide-tabbar-from-inside-stack-navigation/64789273#64789273
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "GroupCreation" || routeName === "Search")
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    else navigation.setOptions({ tabBarStyle: { display: "flex" } });
  }, [navigation, route]);

  // get the route params
  //   const { initialRouteName, initialProfileParams } =
  //     useRoute<RouteProp<{ params: HomeStackScreenParams }, "params">>().params;

  return (
    <StackNav.Navigator
      screenOptions={{ gestureEnabled: true }}
      initialRouteName={"Home"}
    >
      <StackNav.Screen
        name="Home"
        component={HomeScreen}
        options={{
          animationTypeForReplace: "pop",
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="HomeAdd"
        component={HomeAddPeople}
        options={{
          animationTypeForReplace: 'pop',
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="GroupCreation"
        component={GroupCreation}
        options={{
          animationTypeForReplace: "pop",
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="SideBar"
        component={SideBarStack}
        options={{
          animationTypeForReplace: "pop",
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="Search"
        component={SearchScreen}
        options={{
          animationTypeForReplace: "pop",
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
  );
};
