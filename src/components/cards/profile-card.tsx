import React from "react";
import { View, Text, Image } from "react-native";

export const ProfileCard = () => {
  return (
    <View className="bg-white flex flex-row items-center">
      <Image
        className="w-[55] h-[55] rounded-full"
        source={require("../../../assets/images/person.png")}
      />
      <View className="pl-3.5">
        <Text
          style={{ fontFamily: "Poppins_600SemiBold" }}
          className="text-black text-base font-semibold leading-snug"
        >
          Michel Lin
        </Text>
        <Text style={{ fontFamily: "Poppins_400Regular" }} className="text-neutral-500 text-xs font-normal font-['Poppins'] leading-snug">
          Lorem ispum Lorem ispum
        </Text>
      </View>
    </View>
  );
};
