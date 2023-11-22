import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import CustomTextInput from "../../../text-input";
import {
  CompareIcon,
  ContrastIcon,
  CurrencyUsdFilledIcon,
  ForwardIcon,
  ZedCoinFilledIcon,
} from "../../../../Icons";

interface Props {
  onClose: () => void;
  onPageReplace: (page: string) => void;
}

const AddBalancePage: React.FC<Props> = ({ onClose, onPageReplace }) => {
  return (
    <View className="bg-white py-5 px-4 rounded-tl-lg rounded-tr-lg">
      <View className="flex-row justify-between mb-7">
        <TouchableOpacity onPress={() => onPageReplace("main")}>
          <ForwardIcon size={24} color="#0C4871" />
        </TouchableOpacity>
        <Text className="text-xl text-[#0C4871] font-Poppins_600">
          Add Balance
        </Text>
        <TouchableOpacity onPress={() => onClose()}>
          <MaterialIcons name="close" size={24} color="#0C4871" />
        </TouchableOpacity>
      </View>
      <View className="bg-[#F4F4F4] pt-7 pb-5 px-5 flex-row items-center justify-between mb-4">
        <View className="flex-column">
          <Text className="text-base text-[#1D617D] font-Poppins_600 mb-1">
            Master Card
          </Text>
          <Text className="text-base text-[#565656] font-Poppins_400">
            **** 1961
          </Text>
        </View>
        <TouchableOpacity>
          <View className="px-4 py-2.5 rounded-full bg-white flex-row items-center">
            <ContrastIcon size={16} color="#707071" />
            <Text className="text-[#707071] text-xs font-Poppins_400 ml-1">
              Change Card
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text className="text-base text-[#626163] font-Poppins_500 mb-4">
        Amount
      </Text>
      <View className="flex-row items-center justify-between w-full mb-4">
        <View className="grow mr-1">
          <CustomTextInput
            leftIcon={<ZedCoinFilledIcon size={20} color="#2274A3" />}
            placeholder="00.00"
            className="text-base font-Poppins_400 -top-[1]"
            containerStyle="border-[#96B4D1]"
          />
        </View>
        <CompareIcon size={34} color="#96B4D1" />
        <View className="w-[128] ml-1">
          <CustomTextInput
            leftIcon={<CurrencyUsdFilledIcon size={20} color="#2274A3" />}
            placeholder="00.00"
            className="text-base font-Poppins_400 -top-[1]"
            containerStyle="border-[#96B4D1]"
          />
        </View>
      </View>
      <View className="flex-row justify-center mb-4">
        <TouchableOpacity>
          <View className="bg-[#2274A3] rounded-xl py-3 px-4 flex-row items-center justify-center w-[290]">
            <Text className="text-base text-white font-Poppins_500 mr-2">
              Add Balance
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddBalancePage;
