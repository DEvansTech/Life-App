import React from "react";
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

export interface EnterCellPhoneScreenParams {}

export const EnterCellPhoneScreen: React.FC<
  EnterCellPhoneScreenParams
> = ({}) => {
  // country list
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
        <View className=" pt-20 w-full px-10 h-full">
          <View className="flex flex-col items-center justify-center gap-4">
            <Image
              className="w-[100px] h-[100px]"
              source={require("../../../assets/images/app-icon.png")}
            />

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
                    //   dropdownStyle={styles.dropdown1DropdownStyle}
                    // rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                  />
                </View>
                <TextInput
                  className="border-l-2 border-stone-100 pl-2"
                  placeholder="Enter your number"
                  keyboardType={"phone-pad"}
                />
              </View>
            </View>
            <View>
              <Text className="w-[330px] text-center text-neutral-400 text-sm font-normal font-['Poppins'] leading-snug">
                By giving your mobile number our server {"\n"} allocate for you
                for onetime password
              </Text>
            </View>

            <TouchableOpacity>
              <View className="w-[307px] mt-2 h-[37px] flex items-center justify-center bg-primary-color rounded-[5px]">
                <Text className="text-center text-neutral-50 text-[13px] font-semibold font-['Poppins'] leading-snug">
                  Get OTP
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

// Library does not supoprt tailwind
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
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
});
