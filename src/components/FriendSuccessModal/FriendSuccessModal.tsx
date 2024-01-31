import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "react-native-modal";
import { FlatList, Image, KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import HeaderComp from "@Components/Header";
import styles from "./styles";

interface FriendSuccessModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  onOK: () => void;
}

const FriendSuccessModalComp: React.FC<FriendSuccessModalProps> = ({
  visible,
  setVisible,
  onOK
}) => {
  const modalStyles = styles();
  return (
    <Modal style={modalStyles.modalBox} isVisible={visible} onBackdropPress={onOK} useNativeDriver>
      <View style={modalStyles.modalContent}>
        <HeaderComp
          bgColor="transparent"
          color="black"
          rightIcon="close"
          onRightPress={onOK}
        />
        <Image
          className="mb-6 rounded-full mx-auto"
          width={87}
          height={87}
          source={{ uri: "https://s3-alpha-sig.figma.com/img/05f5/3e01/83c1ab3c4a7a680b17ca861ce53e0acd?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aB7Gdq-daEeAtjyzR3FHFQRaW6CJXayKZbSItimsv-3pfCtqYNXe5GE84d9h-Iz~B1Mwi6plv484BuemJEPMLhS1Kx7GJoER9taBEC5M6KDpiIN8J7lPP2x2bGHFLEFlua4CytTXVNBTy1errOxsXYpxHUlV22OevBcEvDWgCihS0Eh13DzwlQvgT2AVwvPP5MWOnlggk7DEMeUhFVmKt8lh0AfexthW9qoJGcvmU26OXeO5wwILOlRcMK33e7ai4O~d6Rq4fnotP-wMjIptPsUvDRFfmVKzb80PBs4U9oIuqU4q5s~Qww6hG2OfloMjAnrelvLIU0ox-oHT1Ys9qg__" }}
        />
        <Text className="text-black text-xl font-bold mx-auto">Anna Marie</Text>
        <Text className="text-[#707071] font-bold mb-10 mx-auto">9876543210</Text>
        <Text className="font-bold text-lg mb-10 mx-auto">Successfully added to your friend list</Text>
        <TouchableOpacity className="mx-auto w-3/4 rounded-lg mb-5 bg-primary py-4" onPress={onOK}>
          <Text className="text-lg text-white mx-auto text-center">Start Chat</Text>
        </TouchableOpacity>
      </View>
    </Modal >
  );
}

export default FriendSuccessModalComp;