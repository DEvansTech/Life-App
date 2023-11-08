import React from "react";
import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const ImageBanner = () => {
  return (
    <View className="w-full h-[163px] flex flex-col justify-center items-center relative bg-zinc-200 rounded-[11px]">
      <View className="mt-4 w-[88.74px] h-[93px] bg-black rounded-full relative">
        <View className="left-[52px] top-[67px] absolute">
          <View className="w-[26px] h-[26px] flex flex justify-center items-center bg-sky-900 rounded-full border-2 border-white">
            <Text className="z-5">
              <FontAwesome name={"camera"} color={"#fff"} size={12} />
            </Text>
          </View>
        </View>
      </View>

      <Text className="mt-[12] text-black text-sm font-normal leading-snug">
        Upload avatar
      </Text>
    </View>
  );
};
