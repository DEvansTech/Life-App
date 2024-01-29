import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface HeaderCompProps {
  bgColor?: string;
  centerNode?: React.ReactNode;
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
}

const HeaderComp: React.FC<HeaderCompProps> = ({
  bgColor,
  centerNode,
  leftNode,
  rightNode,
}) => {
  return (
    <View>
      <SafeAreaView className={`py-3 flex flex-row ${bgColor ? bgColor : 'bg-[#00406E]'}`}>
        <View className="basis-1/4 pl-4 flex flex-row justify-start">{leftNode}</View>
        <View className="basis-2/4 flex flex-row justify-center">{centerNode}</View>
        <View className="basis-1/4 pr-4 flex flex-row justify-end">{rightNode}</View>
      </SafeAreaView>
    </View>
  );
}

export default HeaderComp;