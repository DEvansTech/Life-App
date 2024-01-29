import React from "react";
import { TextInput, TextInputProps, View } from "react-native";

interface CustomTextInputProps extends TextInputProps {
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
}

const CustomTextInputComp: React.FC<CustomTextInputProps> = ({
  leftNode,
  rightNode,
  ...rest
}) => {
  return (
    <View className="rounded-sm">
      <View className="absolute w-full h-full bg-[#96B4D1] opacity-[0.37] rounded-md"></View>
      <View className={`${leftNode ? "pl-10" : ""} ${rightNode ? "pr-10" : ""}`}>
        {leftNode && <View className="absolute left-0 w-10 h-full flex flex-row justify-center"><View className="my-auto">{leftNode}</View></View>}
        <TextInput
          className="text-base w-full text-white"
          placeholderTextColor={"#C9C9C9"}
          cursorColor={"white"}
          {...rest}
        />
        {rightNode && <View className="absolute right-0 w-10"><View className="my-auto">{rightNode}</View></View>}
      </View>
    </View>
  );
};

export default CustomTextInputComp;