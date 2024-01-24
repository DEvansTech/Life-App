import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

interface GroupCardProps {
  avatar: string;
  title: boolean;
  info: boolean;
}
export const GroupCard: React.FC<GroupCardProps> = ({
  avatar,
  title,
  info
}) => {
  return (
    <View className="w-full flex flex-row items-center justify-between bg-white" >
      <View className="flex flex-row items-center">
        {
          avatar
            ? <Image className="w-[48] h-[48] rounded-full" source={{ uri: avatar }} />
            : (
              <View className="w-[48] h-[48] p-[12] rounded-full bg-gray-200">
                <Feather name="users" size={24} color="#555" />
              </View>
            )
        }
        <View className="pl-4">
          <Text
            className="text-zinc-600 text-sm font-semibold leading-snug font-Poppins_600"
          >
            {title} .{" "}
            <Text
              className="text-zinc-600 text-xs font-Poppins_400"
            >
              {info}
            </Text>
          </Text>
        </View>
      </View>
    </View >
  );
};
