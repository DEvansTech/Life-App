import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { BasicHeader } from "../../components/basic-header";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Props {
  navigation: any;
}

const AddCardDetailsView: React.FC<Props> = ({ navigation }) => {
  return (
    <View className="bg-white h-full">
      <BasicHeader
        name="Add Card Details"
        hasBack
        backHandler={() => navigation.goBack()}
      />
      <SafeAreaView>
        <ScrollView>
          <View className="py-5 px-8">
            <View className="flex-column mb-4">
              <Text className="text-sm text-[#626163] font-Poppins_400 mb-2">
                Card Number
              </Text>
              <TextInput
                placeholder="Enter card number here"
                className="w-full border rounded-md border-[#C9C9C9] px-4 py-2.5 text-base font-Poppins_400"
              />
            </View>
            <View className="flex-row mb-7 justify-between">
              <View className="flex-column mb-4 grow mr-2">
                <Text className="text-sm text-[#626163] font-Poppins_400 mb-2">
                  Expire date
                </Text>
                <TextInput
                  placeholder="DD/ YYYY"
                  className="w-full border rounded-md border-[#C9C9C9] px-4 py-2.5 text-base font-Poppins_400"
                />
              </View>
              <View className="flex-column mb-4 basis-2/5">
                <Text className="text-sm text-[#626163] font-Poppins_400 mb-2">
                  CVV
                </Text>
                <TextInput
                  placeholder="CVV number"
                  className="w-full border rounded-md border-[#C9C9C9] px-4 py-2.5 text-base font-Poppins_400"
                />
              </View>
            </View>
            <BouncyCheckbox
              size={25}
              fillColor="#E2E2E2"
              unfillColor="white"
              text="Save this card"
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2, borderRadius: 6 }}
              textStyle={{
                fontFamily: "Poppins_400Regular",
                fontSize: 14,
                color: "#626163",
              }}
              onPress={(isChecked: boolean) => {}}
            />
            <View className="mt-7 flex-row justify-center">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View className="px-8 py-3 rounded-lg bg-[#2274A3] flex-row items-center w-[290] justify-center">
                  <Text className="text-base text-white font-Poppins_500">
                    ADD AND CONTINUE
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default AddCardDetailsView;
