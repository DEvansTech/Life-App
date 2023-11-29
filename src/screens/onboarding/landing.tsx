import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export const LandingScreen = () => {
  return (
    <SafeAreaView>
      <View className="w-full h-full flex flex-col items-center justify-between">
        <View className="mt-[100]">
          <Image source={require("../../../assets/images/app-icon.png")} />

          <Text
            style={{ fontFamily: "Poppins" }}
            className="mt-7 text-center text-primary-color text-[17px] font-semibold leading-snug"
          >
            East, safe and SECURE
          </Text>
          <Text
            style={{ fontFamily: "Poppins" }}
            className="text-center text-zinc-600 text-base font-light leading-snug"
          >
            Get started with LIFE app
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <View className="w-[307px] h-[37px] flex items-center justify-center bg-cyan-800 rounded-[5px]">
              <Text className="text-center text-neutral-50 text-[13px] font-semibold font-['Poppins'] leading-snug">
                Login
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="mt-[11] w-[307px] h-[37px] flex items-center justify-center  rounded-[5px] border border-cyan-800">
              <Text className="text-center text-primary-color text-[13px] font-semibold font-['Poppins'] leading-snug">
                Sign up
              </Text>
            </View>
          </TouchableOpacity>

          <Text className="mt-6 text-center text-primary-color text-base font-light font-['Poppins'] leading-snug">
            " END-TO-END ENCRYPTED "
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
