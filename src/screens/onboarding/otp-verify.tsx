import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export const OtpVerify = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView>
        <View className=" pt-10 w-full px-10 h-full">
          <View className="flex flex-col items-center justify-center gap-4">
            <Text
              style={{ fontFamily: "Poppins" }}
              className="mt-7 text-center text-primary-color text-[17px] font-semibold leading-snug"
            >
              Please Validate the OTP {"\n"} number
            </Text>

            <View className="w-full h-20 flex flex-row justify-center items-center gap-2.5 ">
              <TextInput
                keyboardType={"phone-pad"}
                placeholder="0"
                className="w-14 h-16 text-center text-stone-300 text-base font-normal font-['Poppins'] leading-snug bg-stone-50 rounded-lg border border-stone-300"
              />
              <TextInput
                keyboardType={"phone-pad"}
                placeholder="0"
                className="w-14 h-16 text-center text-stone-300 text-base font-normal font-['Poppins'] leading-snug bg-stone-50 rounded-lg border border-stone-300"
              />
              <TextInput
                keyboardType={"phone-pad"}
                placeholder="0"
                className="w-14 h-16 text-center text-stone-300 text-base font-normal font-['Poppins'] leading-snug bg-stone-50 rounded-lg border border-stone-300"
              />
              <TextInput
                keyboardType={"phone-pad"}
                placeholder="0"
                className="w-14 h-16 text-center text-stone-300 text-base font-normal font-['Poppins'] leading-snug bg-stone-50 rounded-lg border border-stone-300"
              />
              <TextInput
                keyboardType={"phone-pad"}
                placeholder="0"
                className="w-14 h-16 text-center text-stone-300 text-base font-normal font-['Poppins'] leading-snug bg-stone-50 rounded-lg border border-stone-300"
              />
            </View>

            <View>
              <Text className="w-[330px] text-center text-neutral-400 text-sm font-normal font-['Poppins'] leading-snug">
                12 sec left
              </Text>
            </View>

            <TouchableOpacity>
              <View className="w-[307px] mt-2 h-[37px] flex items-center justify-center  bg-primary-color rounded-[5px]">
                <Text className="text-center text-neutral-50 text-[13px] font-semibold font-['Poppins'] leading-snug">
                  Verify OTP
                </Text>
              </View>
            </TouchableOpacity>
            <View>
              <Text className="ext-center text-slate-400 text-xs font-semibold leading-snug">
                Resend OTP
              </Text>
            </View>
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
