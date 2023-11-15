import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

export interface GroupCompletionModalParams {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

export const GroupCompletionModal: React.FC<GroupCompletionModalParams> = ({
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
        <View>
          <View className="bg-white items-center px-8 pb-4 gap-y-6 rounded-t-3xl">
            <Image
              className="w-[70] h-[70] rounded-full"
              source={require("../../../../assets/images/person.png")}
            />

            <Text className="w-[222] text-base font-Poppins_600 text-center">
              Group JTS Board has been successfully created
            </Text>
          </View>
          <TouchableOpacity>
            <View className="py-4 flex items-center justify-center bg-white rounded-b-3xl border-t border-[#E5E5E5]">
              <Text className="text-center text-primary-color text-base font-semibold leading-snug font-Poppins_600">
                OKAY
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
