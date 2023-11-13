import React, { useState } from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export interface EmailAssignModalParams {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

export const MyQRModal: React.FC<EmailAssignModalParams> = ({
  open,
  setOpen,
}) => {
  return (
    <Modal
      style={{ justifyContent: "flex-end", margin: 0 }}
      hasBackdrop={true}
      isVisible={open}
      backdropOpacity={0.6}
      onBackdropPress={() => setOpen(false)}
    >
      <View className="w-full bg-white pb-40r flex items-center rounded-tl-[40px] rounded-tr-[40px]">
        <View className="self-end flex-end pt-6 pb-1.5 pr-6">
          <Ionicons name="close" size={24} color="#2A5C81" />
        </View>
        <Text
          style={{ fontFamily: "Poppins_500Medium", fontSize: 17 }}
          className="text-center text-zinc-600 font-medium leading-snug"
        >
          James Smith
        </Text>
        <Text
          style={{ fontFamily: "Poppins_300Light" }}
          className="pt-1.5 text-center text-neutral-500 text-sm font-medium leading-snug"
        >
          9876543210
        </Text>
        <View className="pt-2.5 pb-6">
          <View className="flex items-center justify-center w-[182] h-[182] bg-zinc-200">
            <Text>QR Code</Text>
          </View>
        </View>

        <Text
          style={{ fontFamily: "Poppins_500Medium" }}
          className="px-[70] pb-8 text-center text-neutral-500 text-sm font-medium leading-snug"
        >
          Share or show this QR code to your friends to receive payment
        </Text>
        {/* items */}
        <View className="flex flex-row justify-center gap-x-4">
          <View className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-[#2A5C81]">
            <Ionicons name="refresh-outline" size={22} color="#2A5C81" />
          </View>
          <View className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-[#2A5C81]">
            <Feather name="download" size={22} color="#2A5C81" />
          </View>
          <View className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-[#2A5C81]">
            <Entypo name="share" size={22} color="#2A5C81" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
