import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "react-native-modal";
import { FlatList, Image, KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import HeaderComp from "@Components/Header";
import CardComp from "@Components/Card";
import styles from "./styles";
import PersonBubble from "@Components/PersonBubble";

interface SuccessModalProps {
  visible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>,
  onOK: () => {}
}

const SuccessModalComp: React.FC<SuccessModalProps> = ({
  visible,
  setVisible,
  onOK
}) => {
  const modalStyles = styles();
  return (
    <Modal style={modalStyles.modalBox} isVisible={visible} animationIn="fadeIn" useNativeDriver>
      <View style={modalStyles.modalContent}>
        <Image
          className="rounded-full mx-auto my-6"
          width={70} height={70}
          source={{ uri: "https://s3-alpha-sig.figma.com/img/2231/0b72/d7312466aa2182a44495c5eb5a621bcd?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NrWtarSwfSidNdtvI9cFOO-Sx2qPwHvA0Xxyn-2pc7FfiDyvhGhve7fYVr7XbknVEl8Q3TptLJfDXrP2nF5ishGQsWwXdWCcS4wZ~kU4eBdn~5XYw0RhKyykIXLomE~~zAy-1D56I5bAAy2EVOXMuaav1ReKK2H9zYLBj3MBsa34kYmLOQfzVoPnopRvu7YcpH1D7vP5dPhvbOalXtltJdZGbXwyLnVhU1IWuhhSKDkdKZNF7vD~4sOTF58RHo93D2-xRQ-SjGQvTVzxVX8-Fao9jxjPEl-vLB9bUCvnyBbgMUMc7BH0XcN0YaL6sbMh6QNrp0acyIy-IpPbXwRdPg__" }} />
        <Text className="mb-4 font-poppins font-bold text-center text-lg text-[#333]">Group JTS Board has been successfully created</Text>
        <TouchableOpacity className="w-full py-4 border-t border-gray-200" onPress={onOK}>
          <Text className="mx-auto text-primary text-lg font-bold">OKAY</Text>
        </TouchableOpacity>
      </View>
    </Modal >
  );
}

export default SuccessModalComp;