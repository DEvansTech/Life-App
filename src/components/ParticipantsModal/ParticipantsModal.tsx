import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "react-native-modal";
import { FlatList, Image, KeyboardAvoidingView, Text, View } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import HeaderComp from "@Components/Header";
import CardComp from "@Components/Card";
import styles from "./styles";
import PersonBubble from "@Components/PersonBubble";

interface ParticipantsModalProps {
  data: any,
  visible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>
}

const ParticipantsModalComp: React.FC<ParticipantsModalProps> = ({
  data,
  visible,
  setVisible
}) => {
  const modalStyles = styles();
  const [participants, setParticipants] = useState<string[]>([]);
  const handleClose = () => {
    setVisible(false);
  }
  const handleCheck = () => {
    setVisible(false);
  }

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
    <Modal style={modalStyles.modalBox} isVisible={visible} onBackdropPress={handleClose} useNativeDriver>
      <KeyboardAvoidingView style={modalStyles.modalContent} keyboardVerticalOffset={90}>
        <View className="p-2">
          <HeaderComp bgColor="transparent" color="#2A5C81" leftIcon="check" onLeftPress={handleCheck} title="Add Participants" rightIcon="close" onRightPress={handleClose} hasSearchBar searchBarBgColor="#F2F2F2" searchBarPhColor="#999999" searchBarCrColor="#999999" />
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          ListHeaderComponent={<Text className="font-bold font-poppins px-4 mb-4">Existing Friends</Text>}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View className="pb-4"></View>}
          ListFooterComponent={() => <View className="pb-4"></View>}
        />
        <FlatList
          className="w-full"
          contentContainerStyle={{ padding: 20 }}
          horizontal
          ItemSeparatorComponent={() => <View className="w-[25px]" />}
          data={participants}
          renderItem={(participant: any) => {
            const index = data.findIndex((item: any) => item.id === participant.item);
            return (index > -1
              ? <View style={{ height: 130 }}><PersonBubble avatar={data[index].icon} name={data[index].name} /></View>
              : null);
          }}
        />
      </KeyboardAvoidingView>
    </Modal >
  );
}

export default ParticipantsModalComp;