import React, { useCallback } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { SecurityQAProps } from "../../../screens/sidebar/pin_update";

interface Props {
  data: Array<SecurityQAProps>;
  isShow: boolean;
  onClose: () => void;
}

const AddSecurityQAModal: React.FC<Props> = ({ isShow, onClose, data }) => {
  const getQuestions = useCallback(
    (data: Array<SecurityQAProps>) => {
      return data.map((item) => item.question);
    },
    [data]
  );

  const onQuestionSelected = (selectedItem: string, index: number) => {
    console.log(selectedItem, index);
  };

  return (
    <KeyboardAvoidingView>
      <Modal
        isVisible={isShow}
        avoidKeyboard
        onBackdropPress={onClose}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <View className="bg-white rounded-tl-lg rounded-tr-lg p-5 flex-column items-center">
          <View className="flex-row justify-between items-center w-full">
            <Pressable>
              <Ionicons name="chevron-back" size={28} color="#2A5C81" />
            </Pressable>
            <Text
              className="ml-auto text-base font-semibold text-black mr-auto font-Poppins_600"
            >
              Add security Question
            </Text>
            <Pressable className="w-8" onPress={onClose}>
              <Ionicons name="close" size={28} color="#2A5C81" />
            </Pressable>
          </View>
          <View className="p-7 mb-2 w-full">
            <View className="mb-3">
              <Text className="text-sm font-normal text-[#626163] mb-2 font-Poppins_400">
                Choose question
              </Text>
              <SelectDropdown
                data={getQuestions(data)}
                onSelect={onQuestionSelected}
                renderDropdownIcon={() => (
                  <View className="rotate-90">
                    <MaterialIcons name="chevron-right" size={20} color="#2A5C81"/>
                  </View>
                )}
                buttonStyle={{
                  borderWidth: 1,
                  borderColor: "#96B4D1",
                  borderRadius: 8,
                  width: "100%",
                  backgroundColor: "transparent",
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  height: 36,
                }}
                buttonTextStyle={{
                  fontWeight: "400",
                  textAlign: "left",
                  fontSize: 14,
                  lineHeight: 22,
                  marginHorizontal: 0,
                  fontFamily: "Poppins_400Regular",
                }}
                dropdownStyle={{
                  backgroundColor: "#f6f6f6",
                  borderRadius: 8,
                  height: "auto",
                }}
                rowStyle={{
                  borderBottomColor: "#eaeaea",
                  borderBottomWidth: 1,
                  height: "auto",
                  paddingVertical: 8,
                }}
                rowTextStyle={{
                  color: "#333333",
                  fontWeight: "400",
                  fontSize: 14,
                  textAlign: "left",
                  fontFamily: "Poppins_400Regular",
                }}
                dropdownOverlayColor="transparent"
                defaultButtonText="Choose Question"
              />
            </View>
            <View>
              <Text className="text-sm font-normal text-[#626163] mb-2 font-Poppins_400">
                Your answer
              </Text>
              <TextInput
                className="rounded-lg border border-[#96B4D1] px-2.5 py-1 text-sm/[1rem] w-full"
                placeholder="Enter your answer"
              />
            </View>
          </View>
          <TouchableOpacity className="rounded-lg w-[233px] bg-[#2A5C81] py-3 justify-center flex-row">
            <Text className="text-base font-semibold text-white">SEND</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default AddSecurityQAModal;
