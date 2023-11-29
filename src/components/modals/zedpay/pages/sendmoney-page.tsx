import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CustomTextInput from "../../../text-input";
import { ZedCoinIcon } from "../../../../Icons";

interface Props {
  onClose: () => void;
  onPageReplace: (page: string) => void;
}

const SendMoneyPage: React.FC<Props> = ({ onClose, onPageReplace }) => {
  return (
    <View className="bg-white py-5 px-4 rounded-tl-lg rounded-tr-lg">
      <View className="flex-row items-center justify-between mb-9">
        <TouchableOpacity onPress={() => onPageReplace("main")}>
          <MaterialIcons name="chevron-left" size={24} color="#0C4871" />
        </TouchableOpacity>
        <Text className="text-xl text-[#0C4871] font-Poppins_600">
          Send Money
        </Text>
        <TouchableOpacity onPress={() => onClose()}>
          <MaterialIcons name="close" size={24} color="#0C4871" />
        </TouchableOpacity>
      </View>
      <View className="flex-column items-center mb-3">
        <Image
          source={require("../../../../../assets/images/anna_marie.png")}
          className="w-[60] h-[60] rounded-full mb-4"
        />
        <Text className="text-base text-black font-Poppins_600">
          Andrea Jones
        </Text>
        <Text className="text-sm text-[#707071] font-Poppins_600">
          9876543210
        </Text>
      </View>
      <View className="flex-column mb-5 mx-8">
        <Text className="text-sm text-[#626163] font-Poppins_400 mb-2">
          Enter amount
        </Text>
        <CustomTextInput
          leftIcon={
            <ZedCoinIcon size={15} color="#2A5C81" />
          }
          placeholder="00.00"
          containerStyle="border-[#96B4D1]"
          inputStyle="font-Poppins_400 text-base"
        />
      </View>
      <View className="flex-row justify-center items-center mb-5">
        <Text className="text-sm text-[#707071] font-Poppins_500">Available Balance: </Text>
        <ZedCoinIcon size={12} color="#2A5C81" />
        <Text className="text-sm text-[#2A5C81] font-Poppins_500">5950</Text>
      </View>
      <View className="flex-row justify-center mb-5">
        <TouchableOpacity onPress={() => onPageReplace("transaction_details")}>
          <View className="rounded-lg bg-[#2A5C81] py-3.5 px-4 flex-row items-center justify-center w-[233]">
            <Text className="text-base text-white font-Poppins_600">SEND</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SendMoneyPage;
