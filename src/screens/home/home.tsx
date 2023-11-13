import React from "react";
import { View, Text } from "react-native";
import { HomeHeader } from "../../components/home-header";

export const HomeScreen = () => {
  return (
    <View>
      <HomeHeader />
      <Text className="pt-20 text-red-600">Home</Text>
    </View>
  );
};
