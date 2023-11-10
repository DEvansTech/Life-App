import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export const RegistrationSuccess = () => {
  return (
    <SafeAreaView>
      <View className="w-full h-full flex flex-col items-center justify-between">
        <View className="items-center mt-[190]">
          <Image className="w-[171px] h-[171px]" source={require("../../../assets/images/app-icon.png")} />

          <Text
            style={{ fontFamily: "Poppins" }}
            className="mt-20 text-center text-zinc-600 text-[17px] font-semibold leading-snug"
          >
            Hello <Text className="text-primary-color ">Jonathan Doe</Text>
          </Text>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="mt-2 text-center text-sm text-zinc-600 leading-snug"
          >
            You sucessfully updated all {"\n"} information
          </Text>
        </View>
        <View className="pb-12">
          <TouchableOpacity>
            <View className="w-[307px] h-[37px] flex items-center justify-center bg-primary-color rounded-[5px]">
              <Text className="text-center text-neutral-50 text-[13px] font-semibold font-['Poppins'] leading-snug">
                Continue to the app
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
