import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";

export interface GroupAssigneModalParams {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

export const FriendSuccesseModal: React.FC<GroupAssigneModalParams> = ({
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

  return (
    <Modal
      style={{ justifyContent: "flex-end", margin: 0 }}
      hasBackdrop={true}
      isVisible={open}
      backdropOpacity={0.6}
      onBackdropPress={() => setOpen(false)}
    >
      <View className="w-full bg-white p-6 pb-10 flex items-center rounded-tl-[40px] rounded-tr-[40px]">
        <View className="w-full flex flex-row justify-end">
          <Ionicons name="close" size={24} color="#0C4871" />
        </View>
        <View className="w-full pt-3 flex flex-col items-center">
          <View className="w-[100px] h-[100px] bg-[#EBEBEB] items-center justify-center rounded-full">
            <Image
              className="w-[87] h-[87] rounded-full"
              source={require("../../../../assets/images/person.png")}
            />
          </View>
          <View>
            <Text className="text-black font-Poppins_600 pt-3.5 text-[17px]">
              Andrea Jones
            </Text>
          </View>
          <View>
            <Text className="text-[#707071] font-Poppins_600 text-sm">
              9876543210
            </Text>
          </View>
          <View>
            <Text className="text-[#58575D] pt-10 font-Poppins_600 text-base">
              Successfully added to your friend list
            </Text>
          </View>
          <TouchableOpacity className="flex flex-row items-center pt-8">
            <View className=" px-20 py-5 flex items-center justify-center bg-primary-color rounded-md mb-1">
              <Text className="text-center text-neutral-50 text-[16px] font-semibold leading-snug font-Poppins_600">
                Start Chat
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
