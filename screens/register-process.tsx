import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { AdjustSettings, ImageBanner } from "../components";

export const RegisterProcess = ({}) => {
  return (
    // <SafeAreaView className="w-full">
    <View className=" pt-10 w-full bg-black px-10 h-full">
      <View className="flex flex-col items-center justify-center gap-4">
        <Image
          className="w-[75px] h-[75px]"
          source={require("../assets/images/app-icon.png")}
        />

        <Text
          //   style={{ fontFamily: "Poppins_400Regular" }}
          className="text-center text-[17px] font-semibold leading-snug"
        >
          Registration process
        </Text>

        {/* banner image */}
        <ImageBanner />

        {/* adjust settings */}
        <AdjustSettings />

        <TouchableOpacity>
          <View className="w-[307px] mt-2 h-[37px] flex items-center justify-center bg-neutral-500 rounded-[5px]">
            <Text className="text-center text-neutral-50 text-[13px] font-semibold leading-snug">
              Continue Registration
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    // </SafeAreaView>
  );
};
