import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import cn from "classnames";

interface Props {
  onClose: () => void;
  type: string;
}

const TransactionDetailsPage: React.FC<Props> = ({ onClose, type }) => {
  return (
    <View className="py-7 px-4 bg-white rounded-tr-lg rounded-tl-lg">
      <View className="flex-row justify-end">
        <TouchableOpacity onPress={() => onClose()}>
          <MaterialIcons name="close" size={24} color="#0C4871" />
        </TouchableOpacity>
      </View>
      <View className="flex-column items-center mb-3">
        <View
          className={cn(
            "flex-row items-center justify-center mb-4 rounded-full w-[60] h-[60] bg-[#229245]",
            {
              "bg-[#E01F28]": type === "send",
            }
          )}
        >
          {type === "receive" ? (
            <MaterialIcons name="arrow-downward" size={32} color="#fff" />
          ) : (
            <MaterialIcons name="arrow-upward" size={32} color="#fff" />
          )}
        </View>
        <View className="my-3 flex-row items-center">
          {type === "send" && (
            <Text className="text-2xl text-black font-Poppins_600">-</Text>
          )}
          <Image
            source={require("../../../../../assets/images/zedcoin.png")}
            className="w-[30] h-[30]"
          />
          <Text className="text-2xl text-black font-Poppins_600 top-[2]">
            70.000
          </Text>
        </View>
        {type === "receive" && (
          <Text className="text-sm text-[#707071] font-Poppins_400">
            You Paind a Z25 transaction fee
          </Text>
        )}
        <Text className="text-xs text-[#565656] font-Poppins_600">
          {type === "send" ? "Sent" : "Received"} at 8/07/2021, 09:23 am
        </Text>
      </View>
      <View className="rounded-xl bg-[#F2F1F6] py-2.5 px-4 mb-2">
        <Text className="text-xs text-[#58575D] font-Poppins_300 mb-2.5">
          Balance Received from
        </Text>
        <View className="flex-row items-center">
          <Image
            source={require("../../../../../assets/images/anna_marie.png")}
            className="w-[46] h-[46] rounded-full mr-2.5"
          />
          <Text className="text-sm text-[#58575D] font-Poppins_600">James</Text>
          <Text className="text-sm text-[#707071] font-Poppins_300 ml-auto">
            9876543210
          </Text>
        </View>
      </View>
      { type === 'receive' ? (<View className="rounded-xl bg-[#F2F1F6] mb-2 overflow-hidden">
        <View className="py-2.5 px-4 flex-row justify-between items-center border-b border-[#C9C9C9]">
          <Text className="text-xs text-[#58575D] font-Poppins_300">
            Received in ZEDPay
          </Text>
          <Text className="text-base text-[#58575D] font-Poppins_600">
            Z 120
          </Text>
        </View>
        <View className="mx-1.5 mb-1.5">
          <View className="flex-row justify-between items-center py-1.5 px-2.5 border-b border-b-[#58575D]">
            <Text className="text-sm text-[#58575D] font-Poppins_500">Fee</Text>
            <Text className="text-base text-black font-Poppins_500">Z 19</Text>
          </View>
          <View className="flex-row justify-between items-center py-1.5 px-2.5 border-b border-b-[#58575D]">
            <Text className="text-sm text-[#58575D] font-Poppins_500">
              Total
            </Text>
            <Text className="text-base text-black font-Poppins_500">-Z 17</Text>
          </View>
          <View className="flex-row justify-between items-center py-1.5 px-2.5">
            <Text className="text-sm text-[#58575D] font-Poppins_500">
              Transaction -ID
            </Text>
            <Text className="text-base text-black font-Poppins_500">8579</Text>
          </View>
        </View>
      </View>) : (
        <View className="rounded-xl bg-[#F2F1F6] mb-2 overflow-hidden">
        <View className="py-2.5 px-4 flex-row justify-between items-center border-b border-[#C9C9C9]">
          <Text className="text-xs text-[#58575D] font-Poppins_300">
            Received in ZEDPay
          </Text>
          <Text className="text-base text-[#58575D] font-Poppins_600">
            Z 120
          </Text>
        </View>
        <View className="mx-1.5 mb-1.5">
          <View className="flex-row justify-between items-center py-1.5 px-2.5 border-b border-b-[#58575D]">
            <Text className="text-sm text-[#58575D] font-Poppins_500">
              Total Amount
            </Text>
            <Text className="text-base text-black font-Poppins_500">Z 40</Text>
          </View>
          <View className="flex-row justify-between items-center py-1.5 px-2.5">
            <Text className="text-sm text-[#58575D] font-Poppins_500">
              Transaction -ID
            </Text>
            <Text className="text-base text-black font-Poppins_500">8579</Text>
          </View>
        </View>
      </View>
      )}
    </View>
  );
};

export default TransactionDetailsPage;
