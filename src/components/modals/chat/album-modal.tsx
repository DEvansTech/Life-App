import React from "react";
import Modal from "react-native-modal";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";

interface Props {
  isShow: boolean;
  onClose: () => void;
}

const AlbumModal: React.FC<Props> = ({ isShow, onClose }) => {
  return (
    <Modal
      isVisible={isShow}
      avoidKeyboard
      onBackdropPress={onClose}
      className="justify-end m-0"
    >
      <View className="p-4 pb-6">
        <View className="bg-white rounded-md mb-1.5 flex-col items-center">
          <ScrollView horizontal={true} className="py-4 px-2">
            {Array.from({ length: 10 }).map((_, index) => (
              <Image
                source={require("../../../../assets/images/photo.jpg")}
                className="w-20 h-20 mx-2 rounded-lg"
              />
            ))}
          </ScrollView>
          <Text className="mt-4.5 mb-3.5 text-sm text-[#256682] font-Poppins_600">
            Album
          </Text>
        </View>
        <TouchableOpacity onPress={onClose}>
          <View className="p-2 flex-row justify-center bg-white rounded-lg">
            <Text className="text-sm text-[#565656] font-Poppins_600 top-[1px]">
              Close
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default AlbumModal;
