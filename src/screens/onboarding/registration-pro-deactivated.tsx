import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ImageBannerHeader, FieldInput } from "../../components";

export const RegisterProcessDeactivated = () => {
  const inputValues = [
    {
      label: "Your display name",
      placeholder: "Enter your display name",
      password: false,
    },
    {
      label: "Email address",
      placeholder: "Enter your email address",
      password: false,
    },
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
    <View className="w-full">
      <ImageBannerHeader title={["Complete your", "profile in life app"]} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView className=" w-full px-8 h-full">
          <View className="pt-3 flex flex-col items-center justify-center gap-y-5">
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
              <Text className="w-[282px] pl-3 text-zinc-600 text-sm font-normal leading-snug">
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
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
