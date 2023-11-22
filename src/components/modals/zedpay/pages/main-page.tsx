import React, { useMemo } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  onClose: () => void;
  onPageReplace: (page: string) => void;
}

const ZedPayPage: React.FC<Props> = ({ onClose, onPageReplace }) => {
  const transactions = useMemo(
    () => [
      {
        id: 1,
        name: "Anna Marie",
        amount: "70.000",
        type: "send",
      },
      {
        id: 2,
        name: "Anna Marie",
        amount: "70.000",
        type: "receive",
      },
      {
        id: 3,
        name: "Anna Marie",
        amount: "70.000",
        type: "send",
      },
      {
        id: 4,
        name: "Anna Marie",
        amount: "70.000",
        type: "receive",
      },
      {
        id: 5,
        name: "Anna Marie",
        amount: "70.000",
        type: "send",
      },
      {
        id: 6,
        name: "Anna Marie",
        amount: "70.000",
        type: "send",
      },
      {
        id: 7,
        name: "Anna Marie",
        amount: "70.000",
        type: "send",
      },
      {
        id: 8,
        name: "Anna Marie",
        amount: "70.000",
        type: "send",
      },
      {
        id: 9,
        name: "Anna Marie",
        amount: "70.000",
        type: "send",
      },
    ],
    []
  );

  return (
    <View className="bg-white py-10 px-5 rounded-tl-xl rounded-tr-xl">
      <View className="flex-row justify-end">
        <TouchableOpacity onPress={onClose}>
          <Text className="text-xl text-[#24507D] font-Poppins_600">Done</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../../../../assets/images/zedpay_with_label.png")}
        className="w-[150] h-[150] ml-auto mr-auto mb-2"
      />
      <View className="pt-4 pb-3.5 px-7 rounded-lg bg-[#F2F1F6]">
        <Text className="text-base text-[#626163] font-Poppins_500 text-center mb-2">
          Balance
        </Text>
        <Text className="text-3xl text-black font-Poppins_600 text-center mb-4">
          ¥‎5950
        </Text>
        <View className="flex-row flex-row justify-around">
          <TouchableOpacity onPress={() => onPageReplace("add_balance")}>
            <View className="py-3 px-4 w-[146] bg-[#2A5C81] rounded-xl">
              <Text className="text-sm font-Poppins_600 text-center text-white">
                Add Balance
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPageReplace("send_money")}>
            <View className="py-3 px-4 w-[146] bg-[#2A5C81] rounded-xl">
              <Text className="text-sm font-Poppins_600 text-center text-white">
                Send/Receive
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text className="text-sm font-Poppins_500 mt-4 mb-3 text-[#58575D]">
        LATEST TRANSACTIONS
      </Text>
      <ScrollView className="max-h-80">
        {transactions.map((transaction) => (
          <TouchableOpacity
            key={transaction.id}
            onPress={() => onPageReplace("transaction_details")}
          >
            <View className="py-2.5 px-4 rounded-md bg-[#E5E5E5] mb-2.5">
              <View className="flex-row items-center">
                <Image
                  source={require("../../../../../assets/images/anna_marie.png")}
                  className="w-[46] h-[46] rounded-full ring-2 ring-offset-0 ring-black mr-2.5"
                />
                <View className="flex-column grow">
                  <View className="flex-row justify-between mb-2">
                    <Text className="text-base text-[#58575D] font-Poppins_600">
                      {transaction.name}
                    </Text>
                    <View className="flex-row items-center">
                      {transaction.type === "send" && (
                        <Text className="text-base text-[#565656] font-Poppins_300">
                          -
                        </Text>
                      )}
                      <Image
                        source={require("../../../../../assets/images/zedcoin.png")}
                        className="w-[16] h-[16]"
                      />
                      <Text className="text-base text-[#565656] font-Poppins_600">
                        {transaction.amount}
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row items-center">
                    {transaction.type === "send" ? (
                      <MaterialIcons
                        name="arrow-downward"
                        color="#DE0001"
                        size={14}
                      />
                    ) : (
                      <MaterialIcons
                        name="arrow-upward"
                        color="#00A343"
                        size={14}
                      />
                    )}
                    <Text className="text-xs text-[#707071] font-Poppins_400 ml-1.5">
                      {transaction.type === "send"
                        ? "Balance Sent"
                        : "Balance Received"}
                    </Text>
                    <MaterialIcons
                      name="chevron-right"
                      color="#A4A4A4"
                      size={22}
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ZedPayPage;
