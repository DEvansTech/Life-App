import React from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

const IncomingCallView: React.FC<Props> = ({ navigation }) => {
  return (
    <View className="h-full bg-white flex-col">
      <View className="bg-[#00406E]">
        <SafeAreaView>
          <View className="pt-2.5 px-4">
            <View className="px-5 py-5 bg-[#D0D8E4] flex-row justify-center rounded-tl-3xl rounded-tr-3xl">
              <Image
                source={require("../../../assets/images/app-icon_1.png")}
                className="w-20 h-20"
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
      <View className="mx-4 px-5 pb-2.5 bg-[#D0D8E4] flex-row justify-between rounded-bl-3xl rounded-br-3xl">
        <View className="border-t border-t-[#C9C9C9] pt-2.5 w-full flex-row">
          <View className="flex-col">
            <Text className="text-black text-xl font-Poppins_600">
              Anna Marie
            </Text>
            <Text className="text-sm text-[#58575D] font-Poppins_400">
              incoming call
            </Text>
          </View>
          <Image
            source={require("../../../assets/images/anna_marie.png")}
            className="w-15 h-15 ml-auto"
          />
        </View>
      </View>
      <View className="flex-col mt-auto">
        <View className="flex-row justify-around mt-auto mb-20">
          <TouchableOpacity
            onPress={() => navigation.navigate("Chat-Details")}
          >
            <View className="flex-col items-center">
              <View className="w-[68px] h-[68px] rounded-full bg-[#ED1F24] items-center justify-center">
                <MaterialIcons name="call-end" size={36} color="#fff" />
              </View>
              <Text className="mt-3.5 text-sm text-[#58575D] font-Poppins_400">Decline</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("On-Call-Audio")}
          >
            <View className="flex-col items-center">
              <View className="w-[68px] h-[68px] rounded-full bg-[#229245] items-center justify-center -rotate-90">
                <MaterialIcons name="call" size={36} color="#fff" />
              </View>
              <Text className="mt-3.5 text-sm text-[#58575D] font-Poppins_400">Answer</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default IncomingCallView;
