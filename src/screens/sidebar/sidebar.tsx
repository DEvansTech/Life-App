import React, { useCallback } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View, Image } from "react-native";
import { BasicHeader } from "../../components/basic-header";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

interface SidebarViewProps {}

interface SidebarItemProps {
  id?: string;
  icon?: React.ReactNode;
  name?: string;
  onPress?: () => void;
}

const SidebarView: React.FC<SidebarViewProps> = () => {
  const items = [
    {
      id: "account_settings",
      name: "Account settings",
      icon: <MaterialIcons name="settings" size={20} color="#2A5C81" />,
      onPress: () => {},
    },
    {
      id: "zed_pay",
      name: "Zed pay",
      icon: (
        <Image
          className="w-[16] h-[16]"
          source={require("../../../assets/images/zedpay.png")}
        />
      ),
      onPress: () => {},
    },
    {
      id: "privacy_policy",
      name: "Privacy Policy",
      icon: <MaterialIcons name="privacy-tip" size={20} color="#2A5C81" />,
      onPress: () => {},
    },
    {
      id: "eula",
      name: "Eula",
      icon: <MaterialIcons name="info" size={20} color="#2A5C81" />,
      onPress: () => {},
    },
    {
      id: "how_to_use",
      name: "How to use life app?",
      onPress: () => {},
    },
  ];

  const renderItem = useCallback(
    ({ id, name, icon, onPress }: SidebarItemProps) => (
      <Pressable onPress={onPress}>
        <View className="flex-row items-center mb-2.5 last: mb-2.5">
          <View className="w-8">{icon && icon}</View>
          <View className="flex-row grow border-b border-b-[#C9C9C9] py-2.5">
            <Text className="mr-auto">{name}</Text>
            <Ionicons name="chevron-forward" size={20} color="#AAA" />
          </View>
        </View>
      </Pressable>
    ),
    []
  );

  return (
    <SafeAreaView>
      <BasicHeader name="Settings" isClosable={true} />
      <ScrollView>
        <View className="p-4 border-b border-b-[#C9C9C9]">
          <Text className="text-sm font-medium text-[#565656]">
            General Settings
          </Text>
        </View>
        <View className="p-2.5">{items.map((item) => renderItem(item))}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SidebarView;
