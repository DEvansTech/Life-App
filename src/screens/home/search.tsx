import React from "react";
import { View, Text } from "react-native";
import { HomeStackParams } from "../../navigation/home-stack";
import { StackScreenProps } from "@react-navigation/stack";
import { BasicHeader } from "../../components/basic-header";

type SearchScreenProps = StackScreenProps<HomeStackParams, "Search">;

export const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  return (
    <View className="h-full w-fill bg-white">
      <BasicHeader
        backHandler={() => navigation.goBack()}
        hasBack
        containerParams="border-b border-[#C9C9C9]"
        backgroundColor="bg-white"
        textColor="text-black"
        name="Search Friends"
        iconColor="#58575D"
      />
      <Text>Search</Text>
    </View>
  );
};
