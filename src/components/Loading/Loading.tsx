import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const LoadingComp = () => {
  return (
    <View className="w-full h-full bg-white">
      <Image className="mx-auto my-auto" width={226} height={226} source={require("@Assets/img/logo.png")} />
    </View>
  );
}

export default LoadingComp;