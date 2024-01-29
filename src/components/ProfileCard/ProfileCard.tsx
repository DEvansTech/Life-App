import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface ProfileCardCompProps {
  avatar?: string,
  name: string,
  info?: string,
}

const ProfileCardComp: React.FC<ProfileCardCompProps> = ({
  avatar,
  name,
  info
}) => {
  return (
    <TouchableOpacity className="bg-white flex flex-row items-center gap-3.5">
      {avatar && (<Image className="w-[55] h-[55] rounded-full" source={{ uri: avatar }} />)}
      <View className="ml-[14px]">
        <View className="my-auto">
          <Text className="text-black text-base font-semibold leading-snug font-poppins">{name}</Text>
          {info && (<Text className="text-neutral-500 text-xs font-normal font-poppins leading-snug">
            {info}
          </Text>)}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ProfileCardComp;