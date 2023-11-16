import React, { useState } from "react";
import { Text, View, TextInput, FlatList } from "react-native";
import { HomeStackParams } from "../../navigation/home-stack";
import { StackScreenProps } from "@react-navigation/stack";
import { BasicHeader } from "../../components/basic-header";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { PersonBubble } from "../../components/cards/person-bubble";
import { Octicons } from "@expo/vector-icons";

type GroupCreationProps = StackScreenProps<HomeStackParams, "GroupCreation">;

export const GroupCreation: React.FC<GroupCreationProps> = ({ navigation }) => {
  const tempMmebers = [{ name: "James" }, { name: "James" }, { name: "James" }];

  // const [memebers, setMembers] = useState(tempMmebers);

  return (
    <View className="bg-white w-full h-full">
      <BasicHeader
        name="Create Group Profile"
        hasClose
        backHandler={() => navigation.goBack()}
      />

      <View className="w-full px-4 py-6">
        <View className="flex flex-row gap-x-4 ">
          <View className="h-[74px] w-[74px] bg-[#F4F4F4] items-center justify-center rounded-full">
            <FontAwesome name={"camera"} color={"#2A5C81"} size={37} />
          </View>

          <View className="flex flex-col flex-grow gap-y-2.5">
            <View className="flex flex-row items-center justify-between">
              <View>
                <Text className="font-Poppins_500 text-[#C9C9C9] text-xs">
                  Group Name
                </Text>
              </View>
              <View>
                <Text className="font-Poppins_500 text-primary-color text-xs">
                  Save
                </Text>
              </View>
            </View>
            <View className="flex py-2.5 rounded pl-3.5 bg-[#F4F4F4]">
              <TextInput
                style={{ fontSize: 16, fontFamily: "Poppins_400Regular" }}
                placeholder="EG: fish"
                placeholderTextColor="#C9C9C9"
              />
            </View>
          </View>
        </View>
      </View>

      <View className="flex flex-row justify-between items-center py-3 px-4 board border-y border-[#E5E5E5]">
        <Text>Members</Text>
        <FontAwesome name={"chevron-up"} color={"#AAAAAA"} size={14} />
      </View>
      <View className="px-4 py-6">
        <FlatList
          ItemSeparatorComponent={() => <View className="w-[25px]" />}
          horizontal
          data={tempMmebers}
          renderItem={({ item }) => <PersonBubble />}
          keyExtractor={(item) => item.name}
          ListFooterComponent={() => {
            return (
              <View
                className={`flex ${
                  tempMmebers.length > 0 ? "pl-[25px]" : ""
                } flex-col items-center`}
              >
                <Octicons name="plus-circle" size={48} color="#96B4D1" />
                <Text className="text-[#96B4D1] font-Poppins_400 pt-1.5 text-xs leading-none">
                  Add
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
