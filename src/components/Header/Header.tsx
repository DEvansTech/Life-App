import React from "react";
import { Text, View } from "react-native";

const HeaderComp = (
  title?: string,
  bgColor?: string,
  left?: React.ReactNode,
  right?: React.ReactNode,
) => {
  return (
    <View className={`py-3 flex justify-between ${bgColor ? bgColor : 'bg-[#00406E]'}`}>
      <View>{left}</View>
      <Text className="text-lg font-semibold leading-[26px] tracking-[0.41px]">{title}</Text>
      <View>{right}</View>
    </View>
  );
}

export default HeaderComp;