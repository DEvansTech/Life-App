import React from "react";
import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const ImageBanner = () => {
  return (
    <View className="w-full h-[163px] flex flex-col justify-center items-center relative bg-zinc-200 rounded-[11px]">
      <View className="mt-4 w-[88.74px] h-[93px] bg-black rounded-full relative">
        <View className="w-[25.56px] h-[26.27px] left-[51.82px] top-[66.73px] absolute bg-sky-900 rounded-full border-2 border-white">
          <Text className="z-5">
            <FontAwesome name={"camera"} color={"#fffff"} size={12} />
          </Text>
        </View>
      </View>

      <Text className="mt-[12] text-black text-sm font-normal leading-snug">
        Upload avatar
      </Text>
    </View>
  );
};
