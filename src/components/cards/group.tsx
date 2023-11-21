import React from "react";
import { View, Text, Image } from "react-native";

export const GroupCard = () => {
  return (
    <View className="w-full flex flex-row items-center justify-between bg-white">
      <View className="flex flex-row items-center">
        <Image
          className="w-[48] h-[48] rounded-full"
          source={require("../../../assets/images/anna_marie.png")}
        />
        <View className="pl-4">
          <Text
            className="text-zinc-600 text-sm font-semibold leading-snug font-Poppins_600"
          >
            Animal Lover .{" "}
            <Text
              className="text-zinc-600 text-xs font-Poppins_400"
            >
              12 new
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
