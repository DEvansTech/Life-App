import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import Modal from "react-native-modal";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import styles from "./styles";
import HeaderComp from "@Components/Header";
import { Routes } from "@Navigators/routes";

const IDScanScreen = ({ navigation, route }: any) => {
  const [isModalVisible, setModalVisible] = useState(true);
  return (
    <View className="w-full h-full bg-white">
      <HeaderComp
        leftNode={
          <TouchableOpacity
            className="my-auto"
            onPress={() => {
              // navigation.navigate("SideBar")
            }}
          >
            <Feather name="settings" size={22} color="#6B95BB" />
          </TouchableOpacity>
        }
        centerNode={
          <Text className="font-poppins text-white text-[17px] font-bold leading-[26px]">Home</Text>
        }
        rightNode={
          <TouchableOpacity
            className="my-auto"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons name="close" size={28} color="#6B95BB" />
          </TouchableOpacity>
        }
      />
      <View style={styles.container}>
        <Modal
          style={styles.bottomSheet}
          isVisible={isModalVisible}
        >
          <View style={styles.contentSheet}>
            <HeaderComp bgColor="white" rightNode={
              <TouchableOpacity
                className="my-auto"
                onPress={() => {
                  setModalVisible(false);
                  navigation.goBack();
                }}
              >
                <MaterialIcons name="close" size={28} color="#6B95BB" />
              </TouchableOpacity>
            } />
            <Text className="my-3 font-bold text-xl">James Smith</Text>
            <Text className="mb-5">9876543210</Text>
            <Image
              className="mb-5"
              width={182}
              height={182}
              source={require("@Assets/img/logo.png")}
            />
            <Text className="mx-auto w-1/2 text-center mb-10">Share or show QR code to your friends to receive payment</Text>
            <View className="mb-10">
              <TouchableOpacity>
                <Image source={require("@Assets/img/ID.png")} />
              </TouchableOpacity>
              {/* <TouchableOpacity>
                <Ionicons name="reload-circle-outline" size={46} color="#2A5C81" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="reload-circle-outline" size={46} color="#2A5C81" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="reload-circle-outline" size={46} color="#2A5C81" />
              </TouchableOpacity> */}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

export default IDScanScreen;