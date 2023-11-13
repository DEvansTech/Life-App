import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { SearchComp } from "./search";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

interface BasicHeaderParams {
  name?: string;
  isClosable?: boolean;
  leftIcon?: React.ReactNode
}

export const BasicHeader: React.FC<BasicHeaderParams> = ({ name, isClosable, leftIcon }) => {
  return (
    <View className="py-4 bg-[#00406E]">
      <View className="px-4">
        <SafeAreaView>
          <View className="flex flex-row justify-center items-center">
            {leftIcon}
            <Text
              className="text-white ml-auto text-base font-semibold text-white mr-auto"
              style={{ fontFamily: "Poppins_600SemiBold" }}
            >
              {name}
            </Text>
            {isClosable && <Ionicons name="close" size={28} color="#6B95BB" />}
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};
