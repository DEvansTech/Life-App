import React from "react";
import { View, Text } from "react-native";
import { HomeStackParams } from "../../navigation/home-stack";
import { StackScreenProps } from "@react-navigation/stack";

type SearchScreenProps = StackScreenProps<HomeStackParams, "Search">;

export const SearchScreen: React.FC<SearchScreenProps> = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};
