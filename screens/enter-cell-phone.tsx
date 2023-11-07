import React from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";

export const EnterCellPhoneScreen = () => {
  return (
    <SafeAreaView>
      <View className="w-full h-full flex flex-col items-center justify-between">
        <Text
          style={{ fontFamily: "Poppins" }}
          className="mt-7 text-center text-cyan-800 text-[17px] font-semibold leading-snug"
        >
          Enter your phone number {"\n"} to continue
        </Text>
        {/* input */}

        <TextInput keyboardType={"phone-pad"} />

        <View>
          <Text className="w-[330px] text-center text-neutral-400 text-sm font-normal font-['Poppins'] leading-snug">
            By giving your mobile number our server allocate for you for one
            time password
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
