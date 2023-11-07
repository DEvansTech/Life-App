import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const OtpVerify = () => {
  const countries = [
    { title: "USA" },
    {
      title: "JPN",
    },
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView>
        <View className=" pt-10 w-full h-full flex flex-col items-center justify-center gap-4 px-8">
          <Text
            style={{ fontFamily: "Poppins" }}
            className="mt-7 text-center text-cyan-800 text-[17px] font-semibold leading-snug"
          >
            Enter your phone number {"\n"} to continue
          </Text>

          <View>
            <Text className="w-[330px] text-center text-neutral-400 text-sm font-normal font-['Poppins'] leading-snug">
              12 sec left
            </Text>
          </View>

          <TouchableOpacity>
            <View className="w-[307px] mt-2 h-[37px] flex items-center justify-center bg-cyan-800 rounded-[5px]">
              <Text className="text-center text-neutral-50 text-[13px] font-semibold font-['Poppins'] leading-snug">
                Verify OTP
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text className="ext-center text-slate-400 text-xs font-semibold font-['Poppins'] leading-snug">
              Resend OTP
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  dropdown1BtnStyle: {
    flex: 1,
    height: 50,
    width: 90,
    backgroundColor: "rgb(248 250 252)",
    borderRadius: 8,
    boarderRight: 1,
    borderColor: "#fff",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1RowStyle: {
    // backgroundColor: "#EFEFEF",
    // borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
});
