import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

const OnCallAudioView: React.FC<Props> = ({ navigation }) => {
  return (
    <View className="h-full bg-white flex-col">
      <View className="bg-[#00406E]">
        <SafeAreaView>
          <View className="pt-2.5 px-4">
            <View className="pt-2.5 pb-[15px] px-5 bg-[#D0D8E4] rounded-tl-3xl rounded-tr-3xl">
              <View className="pt-2.5 w-full flex-row">
                <View className="flex-col">
                  <Text className="text-black text-xl font-Poppins_600">
                    Anna Marie
                  </Text>
                  <Text className="text-sm text-[#58575D] font-Poppins_400">
                    Ongoing call
                  </Text>
                </View>
                <Image
                  source={require("../../../assets/images/anna_marie.png")}
                  className="w-15 h-15 ml-auto"
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
      <View className="mx-4 py-2.5 px-2.5 bg-[#D0D8E4] rounded-bl-3xl rounded-br-3xl border-t border-t-[#C9C9C9]">
        <Text className="text-base text-[#707071] font-Poppins_400 text-center">
          3Min : 45 Sec
        </Text>
      </View>
      <View className="flex-row justify-between px-10 py-2.5 w-full mt-auto">
        <TouchableOpacity>
          <View className="flex-col items-center">
            <View className="w-[50px] h-[50px] rounded-full items-center justify-center bg-[#EEF0F1]">
              <MaterialIcons name="person-add-alt" color="#2A5C81" size={28} />
            </View>
            <Text className="mt-1 text-xs font-Poppins_700 text-[#58575D]">
              Add
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-col items-center">
            <View className="w-[50px] h-[50px] rounded-full items-center justify-center bg-[#EEF0F1]">
              <MaterialIcons name="volume-up" color="#2A5C81" size={28} />
            </View>
            <Text className="mt-1 text-xs font-Poppins_700 text-[#58575D]">
              Speaker
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-col items-center">
            <View className="w-[50px] h-[50px] rounded-full items-center justify-center bg-[#EEF0F1]">
              <MaterialCommunityIcons
                name="video-outline"
                color="#2A5C81"
                size={28}
              />
            </View>
            <Text className="mt-1 text-xs font-Poppins_700 text-[#58575D]">
              Video
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-col items-center">
            <View className="w-[50px] h-[50px] rounded-full items-center justify-center bg-[#EEF0F1]">
              <MaterialCommunityIcons
                name="microphone-outline"
                color="#2A5C81"
                size={28}
              />
            </View>
            <Text className="mt-1 text-xs font-Poppins_700 text-[#58575D]">
              Mute
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center px-4 py-5 mb-16">
        <TouchableOpacity onPress={() => navigation.navigate("Chat-Details")}>
          <View className="w-[68px] h-[68px] rounded-full bg-[#ED1F24] items-center justify-center">
            <MaterialIcons name="call-end" size={36} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnCallAudioView;
