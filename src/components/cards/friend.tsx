import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface FriendCardProps {
  avatar?: string,
  name?: string,
  last_seen?: string,
  addIcon?: boolean,
  acceptIcon?: boolean
}

export const FriendCard: React.FC<FriendCardProps> = ({
  avatar,
  name,
  last_seen,
  addIcon,
  acceptIcon
}) => {
  return (
    <View className="w-full flex flex-row items-center justify-between bg-white">
      <View className="flex flex-row items-center">
        {
          avatar
            ? <Image className="w-[36] h-[36] rounded-full" source={{ uri: avatar }} />
            : (
              <View className="w-[36] h-[36] p-[6] rounded-full bg-gray-200">
                <MaterialIcons name="person-outline" size={24} color="#2A5C81" />
              </View>
            )
        }
        <View className="pl-2.5">
          <Text className="text-zinc-600 text-sm font-semibold leading-snug font-Poppins_600">
            {name} {last_seen && '. '}
            {last_seen && (
              <Text
                className="text-zinc-600 text-xs font-Poppins_400"
              >
                {last_seen}
              </Text>
            )}
          </Text>
        </View>
      </View>
      {acceptIcon ? (
        <MaterialIcons name="add-circle-outline" size={24} color="#2A5C81" />
      ) : null}
      {addIcon ? (
        <MaterialIcons name="person-add-alt" size={24} color="#2A5C81" />
      ) : null}
    </View>
  );
}
