import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

const VideoIncomingCallView: React.FC<Props> = ({ navigation }) => {
  return (
    <View className="h-full bg-white relative">
      <Image
        source={require("../../../assets/images/back.png")}
        className="object-cover absolute top-0 right-0 left-0 bottom-0 w-full h-full"
      />
      <SafeAreaView className="flex-col h-full">
        <View className="py-5 px-4">
          <View className="py-2.5 px-5 rounded-3xl bg-[#A1999A]">
            <View className="flex-row items-center">
              <View className="flex-col">
                <Text className="text-xl text-black font-Poppins_600">
                  Anna Marie
                </Text>
                <Text className="text-sm text-[#58575D] font-Poppins_400">
                  incoming call
                </Text>
              </View>
              <Image
                source={require("../../../assets/images/anna_marie.png")}
                className="w-20 h-20 rounded-full ml-auto"
              />
            </View>
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
                <Text className="mt-3.5 text-[#F7FBFE] text-sm font-Poppins_400">Decline</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("On-Call-Video")}
            >
              <View className="flex-col items-center">
                <View className="w-[68px] h-[68px] rounded-full bg-[#229245] items-center justify-center -rotate-90">
                  <MaterialIcons name="call" size={36} color="#fff" />
                </View>
                <Text className="mt-3.5 text-[#F7FBFE] text-sm font-Poppins_400">Answer</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default VideoIncomingCallView;
