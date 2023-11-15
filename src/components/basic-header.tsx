import React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { SearchComp } from "./search";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

interface BasicHeaderParams {
  name?: string;
  hasClose?: boolean;
  leftIcon?: React.ReactNode;
  hasBack?: boolean;
  backHandler?: () => void;
}

export const BasicHeader: React.FC<BasicHeaderParams> = ({
  name,
  hasClose,
  leftIcon,
  hasBack,
  backHandler,
}) => {
  return (
    <View className="py-4 bg-[#00406E]">
      <View className="px-4">
        <SafeAreaView>
          <View className="flex flex-row justify-center items-center">
            <View className="w-8">
              {hasBack ? (
                <Pressable onPress={backHandler}>
                  <Ionicons name="chevron-back" size={28} color="#6B95BB" />
                </Pressable>
              ) : (
                leftIcon
              )}
            </View>
            <Text className="text-white ml-auto text-base font-semibold text-white mr-auto font-Poppins_600">
              {name}
            </Text>
            <View className="w-8">
              {hasClose && <Ionicons name="close" size={28} color="#6B95BB" />}
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};
