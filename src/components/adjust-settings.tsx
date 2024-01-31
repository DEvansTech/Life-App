import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export interface AdjustSettingsProps {
  setNumber: (arg: number) => void;
  setOpen: (arg: boolean) => void;
  fieldValues: Array<string>;
}

export const AdjustSettings: React.FC<AdjustSettingsProps> = ({setNumber, setOpen, fieldValues}) => {
  const settingsList = [
    { field: "Name", updateField: "+ Create a name" },
    { field: "Username", updateField: "+ Create a Username" },
    { field: "Password", updateField: "Update now" },
    { field: "Phone Number", updateField: fieldValues[3] },
    { field: "Email Address", updateField: "+ Add email" },
  ];

  return (
    <View className="w-full">
      {settingsList.map((setting, i) => {
        return (
          <View
            key={setting.field}
            className="flex h-[42px] flex-row py-2.5 justify-between border-b border-stone-300"
          >
            <Text className="text-black text-sm font-normal leading-snug">
              {setting.field}
            </Text>

            {
              setting.field !== "Password" && setting.field !== "Phone Number" && <Text className="text-black text-sm font-normal leading-snug">
              {fieldValues[i]}
            </Text>
            }

            <TouchableOpacity 
                className="flex flex-row items-center" 
                onPress={() => {
                  setNumber(i);
                  setOpen(true);
                }}
            >
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
