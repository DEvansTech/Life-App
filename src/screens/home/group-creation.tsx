import React from "react";
import { Text, View } from "react-native";
import { HomeStackParams } from "../../navigation/home-stack";
import { StackScreenProps } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { BasicHeader } from "../../components/basic-header";

type GroupCreationProps = StackScreenProps<HomeStackParams, "GroupCreation">;

export const GroupCreation: React.FC<GroupCreationProps> = ({ navigation }) => {
  return (
    <View>
      <BasicHeader
        name="Create Group Profile"
        hasClose
        backHandler={() => navigation.goBack()}
      />
      <SafeAreaView>
        <Text>Hello</Text>
      </SafeAreaView>
    </View>
  );
};
