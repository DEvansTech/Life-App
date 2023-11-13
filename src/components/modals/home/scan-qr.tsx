import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

export interface EmailAssignModalParams {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

export const ScanQRModal: React.FC<EmailAssignModalParams> = ({
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
      <View className="w-full bg-white pb-14 px-16 pt-8 flex items-center rounded-tl-[40px] rounded-tr-[40px]">
        <Text
          style={{ fontFamily: "Poppins_500Medium" }}
          className="text-center text-neutral-500 text-sm font-medium font-['Poppins'] leading-snug"
        >
          Scan QR code to quickly add persons to your friend list
        </Text>
      </View>
    </Modal>
  );
};
