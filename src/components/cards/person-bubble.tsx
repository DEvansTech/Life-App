import React from "react";
import { View, Text, ImageBackground } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const PersonBubble = () => {
  return (
    <View className="flex flex-col items-center">
      <ImageBackground
        className="w-[48] h-[48] rounded-full"
        source={require("../../../assets/images/person.png")}
      >
        <View className="left-[30] top-[25] absolute">
          <View className="w-5 h-5 flex flex justify-center items-center bg-rose-600 rounded-full border-2 border-white">
            <Text className="z-5">
              <FontAwesome name={"times"} color={"#fff"} size={10} />
            </Text>
          </View>
        </View>
      </ImageBackground>

      <Text
        style={{ fontFamily: "Poppins_500Medium" }}
        className="text-black pt-1.5 text-xs leading-none"
      >
        James
      </Text>
    </View>
  );
};
