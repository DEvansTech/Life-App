import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BasicHeader } from "../../components/basic-header";
import AddUpdatePinModal from "../../components/modals/sidebar/pin_modal";
import AddSecurityQAModal from "../../components/modals/sidebar/securityQA_modal";

interface PinUpdateViewProps {
  navigation: any;
}

export interface SecurityQAProps {
  id: number;
  question: string;
  answer: string;
}

const PinUpdateView: React.FC<PinUpdateViewProps> = ({ navigation }) => {
  const [isAddQAModalShow, setIsAddQAModalShow] =
    React.useState<boolean>(false);
  const [isAddPinModalShow, setIsAddPinModalShow] =
    React.useState<boolean>(false);

  const securityQAs = [
    {
      id: 1,
      question: "What is your favorite color?",
      answer: "Blue",
    },
    {
      id: 2,
      question: "What is your favorite food?",
      answer: "Pizza",
    },
    {
      id: 3,
      question: "What is your favorite pet name?",
      answer: "Rabbit",
    },
  ];

  const handleBack = () => {
    navigation.goBack();
  };

  const handleAddSercurityQA = () => {
    setIsAddQAModalShow(true);
  };

  const handleAddPin = () => {
    setIsAddPinModalShow(true);
  };

  return (
    <View className="h-full bg-white">
      <BasicHeader name="Pin Update" hasBack backHandler={handleBack} />
      <SafeAreaView>
        <ScrollView className="p-4 flex-column">
          <TouchableOpacity
            className="flex-row items-center mb-4"
            onPress={handleAddPin}
          >
            <Text className="text-[#2A5C81] text-sm font-medium ml-1 font-Poppins_500">
              + Create a new pin
            </Text>
          </TouchableOpacity>
          <View className="py-4 px-2.5 bg-[#F4F4F4] rounded-md flex-row mb-5">
            <Image source={require("../../../assets/images/security.png")} />
            <View className="flex-column ml-2.5 grow">
              <Text className="text-sm text-[#58575D] font-normal font-Poppins_400">
                Your security pin
              </Text>
              <TextInput
                className="mt-1 border border-[#58575D] rounded-md px-2.5 text-sm/[1rem] w-full"
                secureTextEntry={true}
              />
            </View>
          </View>
          <Text className="text-sm font-normal text-[#58575D] font-Poppins_400">
            Your security questions
          </Text>
          {securityQAs.map(({ id, question, answer }) => (
            <View
              className="flex-row p-2.5 my-2.5 border border-[#F2F1F6] rounded-md"
              key={id}
            >
              <View className="py-[5px] px-[9px] h-[32px] rounded-md bg-[#F2F1F6] shrink-none">
                <Text className="text-sm font-normal font-Poppins_400 text-[#58575D]">
                  {id < 10 ? `0${id}` : id}
                </Text>
              </View>
              <View className="flex-column ml-3">
                <Text className="text-sm font-normal text-[#707071] font-Poppins_400">
                  {question}
                </Text>
                <Text className="text-sm font-normal text-[#58575D] font-Poppins_500">
                  {answer}
                </Text>
              </View>
            </View>
          ))}
          <TouchableOpacity
            className="flex-row items-center mb-4"
            onPress={handleAddSercurityQA}
          >
            <Text className="text-[#2A5C81] text-sm font-medium ml-1 font-Poppins_600">
              + Add new
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
      <AddUpdatePinModal
        isShow={isAddPinModalShow}
        onClose={() => setIsAddPinModalShow(false)}
      />
      <AddSecurityQAModal
        isShow={isAddQAModalShow}
        data={securityQAs}
        onClose={() => setIsAddQAModalShow(false)}
      />
    </View>
  );
};

export default PinUpdateView;
