import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { AdjustSettings, ImageBanner } from "../../components";

export const RegisterProcess = ({}) => {
  return (
    <SafeAreaView className="w-full">
      <View className=" pt-10 w-full px-5 h-full">
        <View className="flex flex-col items-center justify-center gap-y-4">
          <Image
            className="w-[60px] h-[60px]"
            source={require("../../../assets/images/app-icon.png")}
          />

          <Text
            //   style={{ fontFamily: "Poppins_400Regular" }}
            className="text-center mt-4 text-[17px] text-zinc-600 font-semibold leading-snug "
          >
            Registration process
          </Text>

          {/* banner image */}
          <View className="w-full">
            <ImageBanner />
          </View>

          {/* adjust settings */}
          <View className="w-full pt-[10]">
            <AdjustSettings />
          </View>

          <TouchableOpacity>
            <View className="w-[307px] mt-[68] h-[37px] flex items-center justify-center bg-neutral-500 rounded-[5px]">
              <Text className="text-center text-neutral-50 text-[13px] font-semibold leading-snug">
                Continue Registration
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
