import React from "react";
import { View, Text, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";

interface PersonCardParams {
  number?: number;
  name?: string;
  unChecked?: boolean;
  checked?: boolean;
  icon?: React.ReactNode;
}

export const PersonCard: React.FC<PersonCardParams> = ({
  number,
  name,
  unChecked,
  checked,
  icon,
}) => {
  return (
    <View className="w-full flex flex-row items-center justify-between bg-white">
      <View className="flex flex-row">
        <Image
          className="w-[48] h-[48] rounded-full"
          source={require("../../../assets/images/person.png")}
        />
        <View
          className={`${
            number ? "pl-3.5 flex flex-col justify-evenly" : "pl-2.5"
          } `}
        >
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-zinc-600 text-sm font-semibold leading-snug"
          >
            {name}
            {!number && (
              <Text
                style={{ fontFamily: "Poppins_400Regular", fontSize: 12 }}
                className="text-zinc-600 "
              >
                32 min ago
              </Text>
            )}
          </Text>
          <Text
            style={{ fontFamily: "Poppins_400Regular", fontSize: 12 }}
            className="text-zinc-600 "
          >
            {number}
          </Text>
        </View>
        {/* check */}
      </View>

      {icon ? icon : null}

      {unChecked ? (
        <View className="w-6 h-6 rounded-full border border-neutral-500" />
      ) : null}

      {checked ? (
        <AntDesign name="checkcircle" size={24} color="#3AAB73" />
      ) : null}
    </View>
  );
};
