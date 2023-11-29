import React from "react";
import { TextInput, View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const SearchComp = ({}) => {
  return (
    <View className="w-full flex pt-2.5 pb-4">
      <View
        style={{
          backgroundColor: "rgba(150, 180, 209, 0.4)",
        }}
        className={`flex flex-row items-center py-[8] px-[16] w-full rounded 
       `}
      >
        <FontAwesome
          className="opacity-100"
          name="search"
          color={"#fff"}
          size={16}
        />

        <TextInput
          style={{ fontSize: 14, fontFamily: "Poppins_300Light" }}
          placeholder="Search"
          placeholderTextColor={"#C9C9C9"}
          className="ml-3 text-white"
        />
      </View>
    </View>
  );
};
