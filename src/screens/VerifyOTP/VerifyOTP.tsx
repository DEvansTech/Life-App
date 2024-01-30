import React, { useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import HeaderComp from "@Components/Header";
import Ionicons from "react-native-vector-icons/Ionicons";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import styles from "./styles";
import { Routes } from "@Navigators/routes";

const cellCount = 5;

const VerifyOTPScreen = ({ navigation, route }: any) => {
  const phoneNum = route.params?.phone;
  const [code, setCode] = useState("");
  const ref = useBlurOnFulfill({ value: code, cellCount: cellCount });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode
  })

  return (
    <KeyboardAvoidingView
      className="bg-white px-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <HeaderComp
        bgColor={"white"}
        left={(
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-outline"
              size={28}
              color="#58575D"
            />
          </TouchableOpacity>
        )}
        center={
          <Text className="font-poppins text-[#58575D] text-[17px] font-semibold leading-[26px]">OTP Verification</Text>
        }
        right={(
          <></>
        )}
      />
      <SafeAreaView className="w-full h-full">
        <View
          className="mx-6 p-[10px]"
        >
          <CodeField
            ref={ref}
            value={code}
            onChangeText={setCode}
            cellCount={cellCount}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>

        <TouchableOpacity className="mb-2 mx-auto" onPress={() => navigation.navigate(Routes.RegisterSuccess, { phone: phoneNum, code: code })}>
          <View className="w-[307px] mt-2 h-[37px] flex items-center justify-center bg-primary rounded-[5px]">
            <Text className="text-center text-neutral-50 text-[13px] font-semibold font-poppins leading-snug">
              Verify OTP
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="mx-auto" onPress={() => { }}>
          <View className="w-[307px] mt-2 h-[37px] flex items-center justify-center rounded-[5px]">
            <Text className="text-center text-primary text-[13px] font-semibold font-poppins leading-snug">
              Resend OTP
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default VerifyOTPScreen;