import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { AdjustSettings, ImageBanner } from "../../components";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const SuccessScreen = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <FontAwesome
          onPress={() => {
            navigation.goBack();
          }}
          name={"chevron-left"}
          color={"#52525b"}
          size={18}
        />
      ),
    });
  }, []);

  return (
    <SafeAreaView className="w-full">
      <View className=" pt-8 w-full px-5 h-full">
        <View className="flex flex-col items-center justify-center gap-y-4">
          <Image
            className="w-28 h-28"
            source={require("../../../assets/images/success.jpeg")}
          />

          <Text
            //   style={{ fontFamily: "Poppins_400Regular" }}
            className="text-center text-neutral-500 mt-4 text-[17px] font-semibold leading-snug "
          >
            You sucessfully completed {"\n"} the registration
          </Text>

          <View className="w-full p-5 h-16 flex flex-row items-center justify-start bg-zinc-200 rounded-xl">
            <Image
              className="w-[40] h-[40] rounded-full"
              source={require("../../../assets/images/person.png")}
            />
            <Text className="ext-right text-zinc-600 text-base font-semibold font-['Poppins'] leading-snug">
              Image name.jpg
            </Text>
          </View>

          {/* adjust settings */}
          <View className="w-full pt-[10]">
            <AdjustSettings />
          </View>

          <TouchableOpacity>
            <View className="w-[307px] mt-2.5 h-[37px] flex items-center justify-center bg-primary-color rounded-[5px]">
              <Text className="text-center text-neutral-50 text-[13px] font-semibold leading-snug">
                Continue Registration
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className="pt-2.5 text-center text-primary-color text-[13px] font-semibold leading-snug">
              Edit info
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
