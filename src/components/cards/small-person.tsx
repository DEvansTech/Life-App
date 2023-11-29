import React from "react";
import { View, Text, Image } from "react-native";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";

interface SmallPersonCardParams {
  name?: string;
  time?: string;
  addIcon?: boolean;
  acceptIcon?: boolean;
}

export const SmallPersonCard: React.FC<SmallPersonCardParams> = ({
  name,
  time,
  addIcon,
  acceptIcon,
}) => {
  return (
    <View className="w-full flex flex-row items-center justify-between bg-white ">
      <View className="flex flex-row items-center">
        <Image
          className="w-[36] h-[36] rounded-full"
          source={require("../../../assets/images/brandon_walls.png")}
        />
        <View className="pl-2.5">
          <Text
            className="text-zinc-600 text-sm font-semibold leading-snug font-Poppins_600"
          >
            {name || "Anna Marie"} {time && ". "}
            {time ? (
              <Text
                className="text-zinc-600 text-xs font-Poppins_400"
              >
                32 min ago
              </Text>
            ) : null}
          </Text>
        </View>
      </View>
      {acceptIcon ? (
        <MaterialIcons name="add-circle-outline" size={24} color="#2A5C81" />
      ) : null}
      {addIcon ? (
        <MaterialIcons name="person-add-alt" size={24} color="#2A5C81" />
      ) : null}
    </View>
  );
};
