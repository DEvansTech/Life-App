import React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CustomTextInput from "./text-input";

interface BasicHeaderParams {
  name?: string;
  hasClose?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  hasBack?: boolean;
  backHandler?: () => void;
  backgroundColor?: string;
  textColor?: string;
  iconColor?: string;
  containerParams?: string;
}
/**
 * Dynamic header that allows for customization
 *
 * @param {*} {
 *   name,
 *   hasClose,
 *   leftIcon,
 *   rightIcon,
 *   hasBack,
 *   backHandler,
 * }
 * @return {*}
 */
export const BasicHeader: React.FC<BasicHeaderParams> = ({
  name,
  leftIcon,
  rightIcon,
  hasClose,
  hasBack,
  backHandler,
  backgroundColor,
  textColor,
  iconColor,
  containerParams,
}) => {
  return (
    <View
      className={`py-3 ${backgroundColor ? backgroundColor : "bg-[#00406E]"} ${
        containerParams ? containerParams : ""
      }`}
    >
      <View className="px-4">
        <SafeAreaView>
          <View className="flex flex-row justify-center items-center">
            <View className="w-8">
              {hasBack ? (
                <Pressable onPress={backHandler}>
                  <Ionicons
                    name="chevron-back"
                    size={24}
                    color={iconColor ? iconColor : "#6B95BB"}
                  />
                </Pressable>
              ) : (
                leftIcon
              )}
            </View>
            <Text
              className={` ${
                textColor ? textColor : "text-white"
              } ml-auto text-base font-semibold mr-auto font-Poppins_600`}
            >
              {name}
            </Text>
            <View className="w-8">
              {hasClose ? (
                <Ionicons
                  onPress={backHandler}
                  name="close"
                  size={28}
                  color={iconColor ? iconColor : "#6B95BB"}
                />
              ) : (
                rightIcon
              )}
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};
