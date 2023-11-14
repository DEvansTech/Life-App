import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface CreateGroupCompParams {
  // by default blue, we can add more colors if needed but I figued right now we only need 2
  color?: "blue" | "gray";
}

export const CreateGroupComp: React.FC<CreateGroupCompParams> = ({ color }) => {
  return (
    <View className=" pb-1.5 flex flex-row">
      <View
        className={`h-[48] w-[48] ${
          color === "gray" ? "bg-[#E5E5E5]" : "bg-[#4689BD]"
        } flex items-center justify-center rounded-full`}
      >
        <AntDesign
          name="addusergroup"
          size={24}
          color={`${color === "gray" ? "#2A5C81" : "white"}`}
        />
      </View>
      <View className="pl-4 flex justify-evenly">
        <Text
          style={{ fontFamily: "Poppins_600SemiBold" }}
          className="text-primary-color"
        >
          Create Group
        </Text>
        <Text
          style={{ fontFamily: "Poppins_300Light" }}
          className="text-xs text-[#707071]"
        >
          Create a group for you and your friends
        </Text>
      </View>
    </View>
  );
};
