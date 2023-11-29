import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

export interface AddFriendsModalParams {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

export const AddFriendModal: React.FC<AddFriendsModalParams> = ({
  open,
  setOpen,
}) => {
  return (
    <Modal
      hasBackdrop={true}
      isVisible={open}
      backdropOpacity={0.6}
      onBackdropPress={() => setOpen(false)}
    >
      <View className="flex flex-col justify-center items-center">
        <View className="bg-white items-center px-8 pb-6 gap-y-6 rounded-3xl">
          <Image
            className="w-[70] h-[70] rounded-full"
            source={require("../../../../assets/images/person.png")}
          />

          <Text className="w-[222] text-base font-Poppins_400 text-center">
            Do you want to add <Text className="font-Poppins_700 text-primary-color">Andrea</Text> your friend list?
          </Text>

          <View className="flex flex-row gap-x-3">
            <TouchableOpacity>
              <View className="px-7 py-3 flex items-center justify-center bg-[#E5E5E5] rounded-md">
                <Text className="text-center text-black text-base font-semibold leading-snug font-Poppins_600">
                  Decline
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className=" px-7 py-3 flex items-center justify-center bg-primary-color rounded-md">
                <Text className="text-center text-white text-base font-semibold leading-snug font-Poppins_600">
                  Accept
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
