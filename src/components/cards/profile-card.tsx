import React from "react";
import { View, Text, Image } from "react-native";

export const ProfileCard = () => {
  return (
    <View className="bg-white flex flex-row items-center">
      <Image
        className="w-[55] h-[55] rounded-full"
        source={require("../../../assets/images/seth_yates.png")}
      />
      <View className="pl-3.5">
        <Text
          className="text-black text-base font-semibold leading-snug font-Poppins_600"
        >
          Michel Lin
        </Text>
        <Text className="text-neutral-500 text-xs font-normal font-Poppins_400 leading-snug">
          Lorem ispum Lorem ispum
        </Text>
      </View>
    </View>
  );
};
