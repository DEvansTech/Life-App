import React from "react";
import { TextInput, View, Text } from "react-native";

export interface FieldInputParams {
  label?: string;
  placeholder?: string;
}

export const FieldInput: React.FC<FieldInputParams> = ({ label, placeholder }) => {
  return (
    <View className="w-full flex">
      {label ? (
        <Text className="ml-1 text-sm text-zinc-600  leading-snug">Label</Text>
      ) : null}
      <TextInput
        style={{ fontSize: 16 }}
        className="flex items-center py-[14] mt-2 pl-[20] w-full bg-stone-50 rounded-lg border border-slate-400"
        placeholder={placeholder}
      />
    </View>
  );
};
