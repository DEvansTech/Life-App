import React from "react";
import { View, Text, Image } from "react-native";

export const GroupCard = () => {
  return (
    <View className="w-full flex flex-row items-center justify-between bg-white">
      <View className="flex flex-row items-center">
        <Image
          className="w-[48] h-[48] rounded-full"
          source={require("../../../assets/images/person.png")}
        />
        <View className="pl-4">
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-zinc-600 text-sm font-semibold leading-snug"
          >
            Animal Lover .{" "}
            <Text
              style={{ fontFamily: "Poppins_400Regular", fontSize: 12 }}
              className="text-zinc-600"
            >
              12 new
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
