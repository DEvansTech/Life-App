import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "react-native-modal";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface FriendAcceptModalProps {
  visible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>,
  onDecline: () => void;
  onAccept: () => void;
}

const FriendAcceptModalComp: React.FC<FriendAcceptModalProps> = ({
  visible,
  setVisible,
  onDecline,
  onAccept
}) => {
  const modalStyles = styles();
  return (
    <Modal style={modalStyles.modalBox} isVisible={visible} animationIn="fadeIn" useNativeDriver>
      <View style={modalStyles.modalContent}>
        <Image
          className="rounded-full my-5 mx-auto"
          width={70}
          height={70}
          source={{ uri: "https://s3-alpha-sig.figma.com/img/05f5/3e01/83c1ab3c4a7a680b17ca861ce53e0acd?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aB7Gdq-daEeAtjyzR3FHFQRaW6CJXayKZbSItimsv-3pfCtqYNXe5GE84d9h-Iz~B1Mwi6plv484BuemJEPMLhS1Kx7GJoER9taBEC5M6KDpiIN8J7lPP2x2bGHFLEFlua4CytTXVNBTy1errOxsXYpxHUlV22OevBcEvDWgCihS0Eh13DzwlQvgT2AVwvPP5MWOnlggk7DEMeUhFVmKt8lh0AfexthW9qoJGcvmU26OXeO5wwILOlRcMK33e7ai4O~d6Rq4fnotP-wMjIptPsUvDRFfmVKzb80PBs4U9oIuqU4q5s~Qww6hG2OfloMjAnrelvLIU0ox-oHT1Ys9qg__" }}
        />
        <Text className="font-poppins text-lg mx-auto text-center mb-4">
          Do you want to add <Text className="font-bold text-primary">Andrea</Text> your friend list?
        </Text>
        <View className="flex flex-row justify-between w-full">
          <TouchableOpacity className="bg-[#E5E5E5] px-6 rounded-lg" onPress={onDecline}>
            <Text className="mx-auto my-2 text-[#212121] text-lg font-bold">Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-primary px-6 rounded-lg" onPress={onAccept}>
            <Text className="mx-auto my-2 text-[#fff] text-lg font-bold">Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal >
  );
}

export default FriendAcceptModalComp;