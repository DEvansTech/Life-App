import React from "react";
import { TextInput, TextInputProps, View } from "react-native";

interface CustomTextInputProps extends TextInputProps {
  leftNode?: React.ReactNode;
  centerNode?: React.ReactNode;
  rightNode?: React.ReactNode;
  bgColor?: string;
}

const CustomTextInputComp: React.FC<CustomTextInputProps> = ({
  leftNode,
  rightNode,
  centerNode,
  bgColor = "white",
  ...rest
}) => {
  return (
    <View className="rounded-sm">
      <View style={{ backgroundColor: bgColor }} className={`absolute w-full h-full rounded-md`}></View>
      <View className={`${leftNode ? "pl-10" : ""} ${rightNode ? "pr-10" : ""}`}>
        {leftNode && <View className="absolute left-0 w-10 h-full flex flex-row justify-center"><View className="my-auto">{leftNode}</View></View>}
        {centerNode}
        {rightNode && <View className="absolute right-0 w-10"><View className="my-auto">{rightNode}</View></View>}
      </View>
    </View>
  );
};

export default CustomTextInputComp;