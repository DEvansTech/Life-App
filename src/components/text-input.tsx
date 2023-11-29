import React from "react";
import { TextInput, View, TextInputProps } from "react-native";

interface Props extends TextInputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerStyle?: string;
  inputStyle?: string;
}

const CustomTextInput: React.FC<Props> = ({
  leftIcon,
  rightIcon,
  containerStyle,
  inputStyle,
  ...rest
}) => {
  return (
    <View
      className={`flex-row items-center border border-gray-400 rounded-lg px-3 py-2 font-Poppins_400 ${containerStyle}`}
    >
      {leftIcon && <View className="mr-2">{leftIcon}</View>}
      <TextInput className={`text-base ${inputStyle} grow`} {...rest} />
      {rightIcon && <View className="ml-2">{rightIcon}</View>}
    </View>
  );
};

export default CustomTextInput;
