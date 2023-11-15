import React from "react";
import { TextInput, View, TextInputProps } from "react-native";

interface Props extends TextInputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputStyle?: string;
}

const CustomTextInput: React.FC<Props> = ({
  leftIcon,
  rightIcon,
  inputStyle,
  ...rest
}) => {
  return (
    <View
      className={`flex-row items-center border border-gray-400 rounded-lg px-3 py-2 font-Poppins_400 ${inputStyle}`}
    >
      {leftIcon && <View className="mr-2">{leftIcon}</View>}
      <TextInput className="flex-1 text-base" {...rest} />
      {rightIcon && <View className="ml-2">{rightIcon}</View>}
    </View>
  );
};

export default CustomTextInput;
