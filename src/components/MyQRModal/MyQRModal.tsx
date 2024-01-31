import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "react-native-modal";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import HeaderComp from "@Components/Header";
import CardComp from "@Components/Card";
import styles from "./styles";

interface MyQRModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
}

const MyQRModalComp: React.FC<MyQRModalProps> = ({
  visible,
  setVisible,
  onClose
}) => {
  const modalStyles = styles();
  const [participants, setParticipants] = useState<string[]>([]);

  const handleSelectParticipants = (item: any) => {
    console.log("Press");
    const arr: string[] = [...participants];
    const index = arr.indexOf(item.id);
    if (index > -1) arr.splice(index, 1);
    else arr.push(item.id);
    setParticipants(arr);
  }

  const renderItem = ({ item }: any) => {
    const isParticipant = participants.includes(item.id);
    return (
      item.id.length > 0
        ? <CardComp
          icon={<View><Image className="rounded-full" width={48} height={48} source={{ uri: item.icon }} /></View>}
          title={
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#707071", lineHeight: 22 }}>
              {item.name}
            </Text >
          }
          summary={<Text style={{ fontSize: 12, fontWeight: "300", color: "#707071", lineHeight: 14 }}> {item.phone}</Text >}
          rightNode={
            <Octicons
              name={`${isParticipant ? "check-circle-fill" : "circle"}`}
              size={26}
              color={`${isParticipant ? "green" : "#707071"}`}
            />
          }
          onClick={() => handleSelectParticipants(item)}
        />
        : null
    );
  }
  return (
    <Modal style={modalStyles.modalBox} isVisible={visible} onBackdropPress={onClose} useNativeDriver>
      <View style={modalStyles.modalContent}>
        <View className="p-2"><HeaderComp bgColor="transparent" color="#0C4871" rightIcon="close" onRightPress={onClose} /></View>
        <Text className="mb-3 font-bold text-xl mx-auto">James Smith</Text>
        <Text className="mb-5 mx-auto">9876543210</Text>
        <Image
          className="mb-5 mx-auto w-[350] h-[350]"
          width={350}
          height={350}
          source={require("@Assets/img/logo.png")}
        />
        <Text className="mx-auto w-1/2 text-center mb-10">Share or show QR code to your friends to receive payment</Text>
        <View className="mx-auto pb-10">
          <TouchableOpacity>
            <Image source={require("@Assets/img/ID.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal >
  );
}

export default MyQRModalComp;