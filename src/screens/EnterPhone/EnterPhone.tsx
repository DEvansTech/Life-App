import React, { useState } from "react";
import {
  Text,
  TextInput,
  Image,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { Routes } from "@Navigators/routes";
import styles from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const countries = [{
  title: "USA"
}, {
  title: "JPN",
}];

const EnterPhoneScreen = ({ navigation }: any) => {
  const [phoneNum, setPhoneNum] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView>
        <View className=" pt-20 w-full px-10 h-full bg-[#FFFFFF]">
          <View className="flex flex-col items-center justify-center gap-4">
            <Image className="w-[100px] h-[100px]" source={require("@Assets/img/logo.png")} />
            <Text
              style={{ fontFamily: "Poppins" }}
              className="mt-7 text-center text-cyan-800 text-[17px] font-semibold leading-snug"
            >
              Enter your phone number {"\n"} to continue
            </Text>

            <View className="w-full bg-stone-50 rounded-lg border border-slate-400">
              <View className="flex flex-row w-100 h-[50px]">
                <View>
                  <SelectDropdown
                    data={countries}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index);
                    }}
                    defaultButtonText={"USA"}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem.title;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item.title;
                    }}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    renderDropdownIcon={(isOpened) => {
                      return (
                        <FontAwesome
                          name={isOpened ? "chevron-up" : "chevron-down"}
                          color={"#444"}
                          size={18}
                        />
                      );
                    }}
                    dropdownIconPosition={"right"}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                  />
                </View>
                <TextInput
                  className="border-l-2 border-stone-100 pl-2"
                  placeholder="Enter your number"
                  keyboardType={"phone-pad"}
                  onChangeText={number => setPhoneNum(number)}
                  value={phoneNum}
                />
              </View>
            </View>
            <View>
              <Text className="w-[330px] text-center text-neutral-400 text-sm font-normal font-poppins leading-snug">
                By giving your mobile number our server {"\n"} allocate for you
                for onetime password
              </Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate(Routes.VerifyOTP, { phone: phoneNum })}>
              <View className="w-[307px] mt-2 h-[37px] flex items-center justify-center bg-primary rounded-[5px]">
                <Text className="text-center text-neutral-50 text-[13px] font-semibold font-poppins leading-snug">
                  Get OTP
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default EnterPhoneScreen;