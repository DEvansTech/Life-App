import React from "react";
import { TextInput, View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export interface FieldInputParams {
  label?: string;
  placeholder?: string;
  password?: boolean;
  error?: boolean;
  success?: boolean;
  message?: string;
}

export const FieldInput: React.FC<FieldInputParams> = ({
  label,
  placeholder,
  password,
  error,
  success,
  message,
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
      <View
        className={`flex flex-row justify-between py-[14] px-[20] w-full bg-stone-50 rounded-lg border ${
          error ? "border-red-600" : "border-slate-400"
        } ${success && "border-green-600"}`}
      >
        <TextInput
          secureTextEntry={password}
          style={{ fontSize: 16, fontFamily: "Poppins_400Regular" }}
          placeholder={placeholder}
          placeholderTextColor={error ? "#ED1F24" : undefined}
          className={`${error ? "text-other-red" : undefined}`}
        />
        {password ? (
          <FontAwesome name="eye-slash" color={"#2A5C81"} size={18} />
        ) : null}
      </View>

      {message ? (
        <Text
          style={{ fontFamily: "Poppins_400Regular" }}
          className={`ml-1 pt-2.5 text-zinc-600 text-sm font-normal leading-snug  ${
            error && "text-other-red"
          } ${success && "text-green-600"}`}
        >
          {message}
        </Text>
      ) : null}
    </View>
  );
};
