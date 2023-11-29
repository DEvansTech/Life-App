import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { DefaultSearchComp } from "../../default-search";
import { PersonCard } from "../../cards";
import { PersonBubble } from "../../cards/person-bubble";

export interface GroupAssigneModalParams {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

export const GroupAssigneModal: React.FC<GroupAssigneModalParams> = ({
  open,
  setOpen,
}) => {
  interface Participants {
    name: string;
    number: number;
  }

  const [participants, setparticipants] = useState<Participants[] | undefined>([
    // { name: "James", number: 9876543210 },
    // { name: "James", number: 9876543210 },
    // { name: "James", number: 9876543210 },
  ]);

  const data: Participants[] = [
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
              Add Participants{" "}
              {participants?.length ? `(${participants.length})` : undefined}
            </Text>

            <Ionicons name="close" size={24} color="#2A5C81" />
          </View>

          <View className="pb-4 pt-5">
            <DefaultSearchComp placeholder="Search friends" />
          </View>

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
      {participants?.length ? (
        <View className="h-[120] px-4 pt-3 self-start absolute bottom-0 z-10 bg-[#F9F9F9] w-full">
          <View className="flex flex-row justify-start gap-x-8">
            <View>
              <PersonBubble />
            </View>
            <View>
              <PersonBubble />
            </View>
            <View>
              <PersonBubble />
            </View>
          </View>
        </View>
      ) : null}
    </Modal>
  );
};
