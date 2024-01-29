import React from "react";
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { Card } from "src/types";

interface CardCompProps extends Card, TouchableOpacityProps {
  type?: "person" | "group";
  size?: number;
  icon?: string;
  title?: string;
  titleSize?: number;
  info?: string;
  comment?: string;
}

const CardComp: React.FC<CardCompProps> = ({
  size = 48,
  icon,
  title,
  titleSize = 16,
  info,
  comment,
  ...rest
}) => {
  return (
    <TouchableOpacity className="w-full flex flex-row items-center justify-between bg-white px-4" {...rest}>
      <View className="flex flex-row items-center">
        {icon
          ? <View><Image className="rounded-full" width={size} height={size} source={{ uri: icon }} /></View>
          : <View><Image width={size} height={size} source={require("@Assets/img/group.png")}></Image></View>}
        <View className="ml-[18px]">
          <View className="my-auto">
            <Text className={`text-zinc-600 text-[${titleSize}px] font-bold leading-snug font-poppins`}>
              {title} {info ? ". " : ""}
              {info && <Text className="font-poppins text-[12px] text-[#707071] font-normal">{info}</Text>}
            </Text>
            {comment && <Text>{comment}</Text>}
          </View>
        </View>
      </View>
    </TouchableOpacity >
  );
};

export default CardComp;