import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { SearchComp } from "./search";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

interface BasicHeaderParams {
  name?: string;
}

export const BasicHeader: React.FC<BasicHeaderParams> = ({ name }) => {
  return (
    <View className="py-4 bg-[#00406E]">
      <View className="px-4 pb-2.5">
        <SafeAreaView>
          <View className="pt-1 flex flex-row justify-between items-center">
            <Feather name="settings" size={24} color="#6B95BB" />

            <Text
              className="text-white ml-1"
              style={{ fontFamily: "Poppins_600SemiBold", fontSize: 17 }}
            >
              {name}
            </Text>
            <Ionicons name="close" size={28} color="#6B95BB" />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};
