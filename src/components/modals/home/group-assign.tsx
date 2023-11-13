import React from "react";
import { View, Text, FlatList } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { DefaultSearchComp } from "../../default-search";
import { GroupCard, PersonCard } from "../../cards";

export interface GroupAssigneModalParams {
  open: boolean;
  setOpen: (arg: boolean) => void;
  inputValues: { label?: string; placeholder?: string }[];
}

export const GroupAssigneModal: React.FC<GroupAssigneModalParams> = ({
  inputValues,
  open,
  setOpen,
}) => {
  const data = [
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
  ];

  return (
    <Modal
      style={{ justifyContent: "flex-end", margin: 0 }}
      hasBackdrop={true}
      isVisible={open}
      backdropOpacity={0.6}
      onBackdropPress={() => setOpen(false)}
    >
      <View className="w-full bg-white h-[90%] pb-20 pt-8 flex items-center rounded-tl-[40px] rounded-tr-[40px]">
        <View className="w-full px-4">
          <View className="w-full flex flex-row justify-between items-center">
            <FontAwesome5
              className="mb-1"
              name="check"
              size={18}
              color="#2A5C81"
            />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-primary-color text-base font-semibold leading-snug"
            >
              Add Participants
            </Text>

            <Ionicons name="close" size={24} color="#2A5C81" />
          </View>

          <DefaultSearchComp placeholder="Search friends" />

          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-zinc-600 text-sm font-normal leading-snug self-start pb-4"
          >
            Existing Friends
          </Text>

          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PersonCard name={item.name} number={item.number} />
            )}
            keyExtractor={(item) => item.name}
            ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
          />
        </View>
      </View>
    </Modal>
  );
};
