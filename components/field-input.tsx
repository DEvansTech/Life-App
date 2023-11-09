import React from "react";
import { TextInput, View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export interface FieldInputParams {
  label?: string;
  placeholder?: string;
  password?: boolean;
}

export const FieldInput: React.FC<FieldInputParams> = ({
  label,
  placeholder,
  password,
}) => {
  return (
    <View key={label} className="w-full flex">
      {label ? (
        <Text
          style={{ fontFamily: "Poppins_400Regular" }}
          className="ml-1 pb-2 text-sm text-zinc-600  leading-snug"
        >
          {label}
        </Text>
      ) : null}
      <View className="flex flex-row justify-between py-[14] px-[20] w-full bg-stone-50 rounded-lg border border-slate-400">
        <TextInput
          secureTextEntry={password}
          style={{ fontSize: 16, fontFamily: "Poppins_400Regular" }}
          placeholder={placeholder}
        />
        {password ? (
          <FontAwesome name="eye-slash" color={"#2A5C81"} size={18} />
        ) : null}
      </View>
    </View>
  );
};
