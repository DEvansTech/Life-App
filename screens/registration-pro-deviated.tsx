import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { ImageBannerHeader, FieldInput } from "../components";

export const RegisterProcessDeviated = ({}) => {
  return (
    <View className="w-full">
      <ImageBannerHeader />

      <View className=" pt-10 w-full px-8 h-full">
        <View className="flex flex-col items-center justify-center gap-y-4">
          {/* input */}
          <FieldInput
            label="Your display name"
            placeholder="Enter your display name"
          />
          <TouchableOpacity>
            <View className="w-[307px] mt-[68] h-[37px] flex items-center justify-center bg-primary-color rounded-[5px]">
              <Text className="text-center text-neutral-50 text-[13px] font-semibold leading-snug">
                Confirm Registration
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
