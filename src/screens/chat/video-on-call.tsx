import React from "react";
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

const OnCallVideoView: React.FC<Props> = ({ navigation }) => {
  return (
    <View className="h-full bg-white relative">
      <Image
        source={require("../../../assets/images/back.png")}
        className="object-cover absolute top-0 right-0 left-0 bottom-0 w-full h-full"
      />
      <SafeAreaView className="flex-col">
        <View className="flex-col items-end px-5 py-10 h-full">
          <TouchableOpacity className="mb-4">
            <View className="flex-col items-center">
              <View className="w-[50px] h-[50px] rounded-full items-center justify-center bg-[#EEF0F1]">
                <MaterialIcons name="volume-up" color="#2A5C81" size={28} />
              </View>
              <Text className="mt-1 text-xs font-Poppins_700 text-[#F7FBFE]">
                Speaker
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="mb-4">
            <View className="flex-col items-center">
              <View className="w-[50px] h-[50px] rounded-full items-center justify-center bg-[#EEF0F1]">
                <MaterialCommunityIcons
                  name="video-outline"
                  color="#2A5C81"
                  size={28}
                />
              </View>
              <Text className="mt-1 text-xs font-Poppins_700 text-[#F7FBFE]">
                Video
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="mb-4">
            <View className="flex-col items-center">
              <View className="w-[50px] h-[50px] rounded-full items-center justify-center bg-[#EEF0F1]">
                <MaterialCommunityIcons
                  name="microphone-outline"
                  color="#2A5C81"
                  size={28}
                />
              </View>
              <Text className="mt-1 text-xs font-Poppins_700 text-[#F7FBFE]">
                Mute
              </Text>
            </View>
          </TouchableOpacity>
          <View className="mt-auto relative w-[183px] h-[240px] rounded-lg overflow-hidden justify-end">
            <Image
              source={require("../../../assets/images/person1.png")}
              className="absolute object-cover top-0 right-0 left-0 back-0 w-full h-full"
            />
            <View className="items-center w-full">
              <TouchableOpacity
                onPress={() => navigation.navigate("Chat-Details")}
                className="mb-6"
              >
                <View className="w-[52px] h-[52px] rounded-full bg-[#ED1F24] items-center justify-center">
                  <MaterialIcons name="call-end" size={28} color="#fff" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default OnCallVideoView;
