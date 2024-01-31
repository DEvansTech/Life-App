import React from "react";
import { Text, TouchableOpacity, View, ViewProps } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import SearchBoxComp from "@Components/SearchBox";

interface HeaderProps extends ViewProps {
  bgColor: string;
  color: string;
  leftIcon?: "settings" | "return" | "check";
  onLeftPress?: () => void;
  title?: string;
  rightIcon?: "addperson" | "close",
  onRightPress?: () => void;
  middleLayer?: React.ReactNode;
  hasSearchBar?: boolean;
  searchBarBgColor?: string;
  searchBarPhColor?: string;
  searchBarCrColor?: string;
}

const HeaderComp: React.FC<HeaderProps> = ({
  bgColor = "#00406E",
  color = "#F7F7F7",
  leftIcon,
  onLeftPress,
  title,
  rightIcon,
  onRightPress,
  middleLayer,
  hasSearchBar = false,
  searchBarBgColor = "#075985",
  searchBarPhColor = "#eee",
  searchBarCrColor = "white",
  ...rest
}) => {
  const HeaderStyles = styles(bgColor, color);
  return (
    <View style={{ backgroundColor: bgColor }} className="w-full px-4 py-4" {...rest}>
      <View className="flex flex-row">
        <View className="w-1/4 my-auto flex flex-row justify-start">
          {leftIcon && <TouchableOpacity onPress={onLeftPress}>
            <Ionicons name={
              leftIcon === "settings"
                ? "settings-outline"
                : leftIcon === "return"
                  ? "chevron-back"
                  : "checkmark-sharp"
            } size={22} color={color} />
          </TouchableOpacity>}
        </View>
        <View className="w-2/4 my-auto flex flex-row justify-center">
          <Text style={HeaderStyles.title}>{title}</Text>
        </View>
        <View className="w-1/4 my-auto flex flex-row justify-end">
          {rightIcon && <TouchableOpacity onPress={onRightPress}>
            <MaterialIcons name={rightIcon === "addperson" ? "person-add-alt" : "close"} size={22} color={color} />
          </TouchableOpacity>}
        </View>
      </View>
      {middleLayer}
      {hasSearchBar && <View className="mt-3"><SearchBoxComp bgColor={searchBarBgColor} phColor={searchBarPhColor} crColor={searchBarCrColor} /></View>}
    </View>

  );
}

export default HeaderComp;