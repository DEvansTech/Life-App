// Contact List
// Chat Room
// Video call room
// Voice call room

import React, { PropsWithChildren } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "@Navigators/routes";
import ContactListScreen from "@Screens/ContactList";
import ChatroomScreen from "@Screens/Chatroom";
import { VideoChatScreen, VoiceChatScreen } from "@Screens/Call";

const Stack = createNativeStackNavigator();

const ChatStackNav: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.Home} >
      <Stack.Screen name={Routes.ContactList} component={ContactListScreen} />
      <Stack.Screen name={Routes.Chatroom} component={ChatroomScreen} />
      <Stack.Screen name={Routes.VideoCall} component={VideoChatScreen} />
      <Stack.Screen name={Routes.VoiceCall} component={VoiceChatScreen} />
    </Stack.Navigator>
  );
}

export default ChatStackNav;