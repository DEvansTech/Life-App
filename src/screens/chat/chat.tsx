import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { MessageStackParams } from "../../navigation/message-stack";

type HomeScreenProps = StackScreenProps<MessageStackParams, "Chat">;

export const ChatScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View>
      <Text>Chat</Text>
    </View>
  );
};
