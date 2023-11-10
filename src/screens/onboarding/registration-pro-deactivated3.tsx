import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FieldInput } from "../../components";

export const RegisterProcessDeactivatedThree = () => {
  const inputValues = [
    {
      label: "Enter your username",
      placeholder: "Please select a username",
      password: false,
    },
    {
      label: "Enter your password",
      placeholder: " *  *  *  *  *  *  *",
      password: true,
    },
    {
      label: "retype your password",
      placeholder: " *  *  *  *  *  *  *",
      password: true,
    },
  ];

  return (
    <SafeAreaView className="w-full">
      <KeyboardAvoidingView
        className="px-8"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="pt-4 flex flex-col items-center justify-center gap-y-5">
          <View className="mb-4 item-start flex flex-row gap-x-[9px]">
            <View className="w-3 h-3 bg-zinc-400 rounded-full" />
            <View className="w-3 h-3 bg-primary-color rounded-full" />
            <View className="w-3 h-3 bg-zinc-400 rounded-full" />
          </View>

          <Text className=" mb-4 text-center text-black text-base font-semibold font-['Poppins'] leading-relaxed">
            Update the authentication {"\n"} details here
          </Text>

          {/* input */}
          {inputValues.map((input) => {
            return (
              <View className="w-full">
                <FieldInput
                  key={input.label}
                  label={input.label}
                  placeholder={input.placeholder}
                  password={input.password}
                />
              </View>
            );
          })}

          <View className="flex flex-row">
            <View className="w-4 h-4 mt-0.5 rounded-full bg-blue-400" />
            <Text className="w-[282px] pl-3 text-zinc-600 text-sm font-normal font-['Poppins'] leading-snug">
              I agree with the{" "}
              <Text className="text-primary-color">Terms and Conditions</Text>{" "}
              and <Text className="text-primary-color">Privacy Policy</Text>
            </Text>
          </View>

          <TouchableOpacity className="pb-5">
            <View className="w-[307px] h-[37px] flex items-center justify-center bg-primary-color rounded-[5px] mb-1">
              <Text className="text-center text-neutral-50 text-[13px] font-semibold leading-snug">
                Confirm Registration
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
