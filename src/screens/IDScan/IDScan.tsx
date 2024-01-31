import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import styles from "./styles";
import HeaderComp from "@Components/Header";
import MyQRModalComp from "@Components/MyQRModal/MyQRModal";

const IDScanScreen = ({ navigation, route }: any) => {
  const [isModalVisible, setModalVisible] = useState(true);
  return (
    <View className="w-full h-full bg-white">
      <HeaderComp
        bgColor="#00406E" color="#F7F7F7"
        leftIcon="settings"
        title="Scan Qr"
        rightIcon="close"
        onRightPress={() => { navigation.goBack() }}
      />
      <View style={styles.container}>
        <MyQRModalComp visible={isModalVisible} setVisible={setModalVisible} onClose={() => navigation.goBack()} />
      </View>
    </View>
  );
}

export default IDScanScreen;