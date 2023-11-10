import React from "react";
import { View, Text, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const SmallPersonCard = () => {
  return (
    <View className="w-full flex flex-row items-center justify-between bg-white">
      <View className="flex flex-row items-center">
        <Image
          className="w-[36] h-[36] rounded-full"
          source={require("../../../assets/images/person.png")}
        />
        <View className="pl-2.5">
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-zinc-600 text-sm font-semibold leading-snug"
          >
            Anna Marie .{" "}
            <Text
              style={{ fontFamily: "Poppins_400Regular", fontSize: 12 }}
              className="text-zinc-600"
            >
              32 min ago
            </Text>
          </Text>
        </View>
      </View>
      {/* <FontAwesome name={"chevron-right"} color={"#A7A7A7"} size={14} /> */}
    </View>
  );
};
