import React from "react";
import { View, Text, Image } from "react-native";

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
    <View className="bg-white flex flex-row items-center gap-3.5">
      {avatar && (<Image className="w-[55] h-[55] rounded-full" source={{ uri: avatar }} />)}
      <View className="flex items-center">
        <View>
          <Text className="text-black text-base font-semibold leading-snug font-Poppins_600">{name}</Text>
          {info && (<Text className="text-neutral-500 text-xs font-normal font-Poppins_400 leading-snug">
            {info}
          </Text>)}
        </View>
      </View>
    </View>
  );
}

export default ProfileCardComp;