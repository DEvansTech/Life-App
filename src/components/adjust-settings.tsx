import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const AdjustSettings = () => {
  const settingsList = [
    { field: "Name", updateField: "+ Create a name" },
    { field: "Username", updateField: "+ Create a Username" },
    { field: "Password", updateField: "Update now" },
    { field: "Phone Number", updateField: "+81-8765434567" },
    { field: "Email Address", updateField: "+ Add email" },
  ];

  return (
    <View className="w-full">
      {settingsList.map((setting) => {
        return (
          <View
            key={setting.field}
            className="flex h-[42px] flex-row py-2.5 justify-between border-b border-stone-300"
          >
            <Text className="text-black text-sm font-normal leading-snug">
              {setting.field}
            </Text>

            <TouchableOpacity className="flex flex-row items-center">
              <Text
                className={`pr-2 text-primary-color text-sm font-medium  leading-snug ${
                  setting.field === "Phone Number"
                    ? "text-zinc-600"
                    : "text-primary-color"
                }`}
              >
                {setting.updateField}
              </Text>
              <FontAwesome name={"chevron-right"} color={"#A7A7A7"} size={14} />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};
