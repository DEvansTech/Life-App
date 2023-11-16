import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { HomeStackParams } from "../../navigation/home-stack";
import { StackScreenProps } from "@react-navigation/stack";
import { BasicHeader } from "../../components/basic-header";
import { DefaultSearchComp } from "../../components/default-search";
import { AntDesign } from "@expo/vector-icons";

type SearchScreenProps = StackScreenProps<HomeStackParams, "Search">;

export const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [inputType, setInputType] = useState<"username" | "number">("username");

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
      <View className="px-5">
        <View className="flex flex-row pt-4">
          <Pressable
            onPress={() => setInputType("username")}
            className="flex flex-row items-center w-1/2"
          >
            {inputType === "username" ? (
              <AntDesign name="checkcircle" size={24} color="#2A5C81" />
            ) : (
              <View className="w-6 h-6 rounded-full border border-neutral-500" />
            )}
            <Text
              className={`${
                inputType === "username" ? "text-[#58575D]" : "text-[#707071]"
              } pl-2.5 font-Poppins_500 text-sm`}
            >
              Username
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setInputType("number")}
            className="flex flex-row items-center w-1/2"
          >
            {inputType === "number" ? (
              <AntDesign name="checkcircle" size={24} color="#2A5C81" />
            ) : (
              <View className="w-6 h-6 rounded-full border border-neutral-500" />
            )}
            <Text
              className={`${
                inputType === "number" ? "text-[#58575D]" : "text-[#707071]"
              } pl-2.5 font-Poppins_500 text-sm`}
            >
              Phone Number
            </Text>
          </Pressable>
        </View>
        <View className="py-4">
          <DefaultSearchComp placeholder="Search friends" />
        </View>
        <View className="pt-[140px] items-center justify-center ">
          <Image source={require("../../../assets/images/group.png")} />
          <View className="pt-6 px-[40px]">
            <Text className="text-[#707071] text-sm text-center font-Poppins_600">
              Search friends using their username or phone number
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
