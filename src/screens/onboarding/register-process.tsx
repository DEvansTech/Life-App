import React, { useState, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { AdjustSettings, ImageBanner } from "../../components";
import { NameUpdateModal } from "../../components/modals/onboarding/name-update";
import { PasswordUpdateModal } from "../../components/modals/onboarding/password-update";
import { UserNameUpdateModal } from "../../components/modals/onboarding/username-update";
import { EmailAssignModal } from "../../components/modals/onboarding/email-assign";
import { AuthContext, AuthContextType } from "../../context/AuthContext";

export const RegisterProcess = ({ navigation }: any) => {
  const { setUser, user, setUserName, logout } = useContext(AuthContext) as AuthContextType;
  return (
    <SafeAreaView className="w-full">
      <View className=" pt-10 w-full px-5 h-full">
        <View className="flex flex-col items-center justify-center gap-y-4">
          <Image
            className="w-[60px] h-[60px]"
            source={require("../../../assets/images/app-icon.png")}
          />

          <Text
            //   style={{ fontFamily: "Poppins_400Regular" }}
            className="text-center mt-4 text-[17px] text-zinc-600 font-semibold leading-snug "
          >
            Registration process
          </Text>

          {/* banner image */}
          <View className="w-full">
            <ImageBanner />
          </View>

          {/* adjust settings */}
          <View className="w-full pt-[10]">
            {/* <AdjustSettings setNumber={setModalNumber} setOpen={setOpen} fieldValues={[name, userName, password, phone, email]} /> */}
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Register-Success")}>
            <View className="w-[307px] mt-[68] h-[37px] flex items-center justify-center bg-neutral-500 rounded-[5px]">
              <Text className="text-center text-neutral-50 text-[13px] font-semibold leading-snug">
                Continue Registration
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <NameUpdateModal
        inputValues={inputValues}
        open={open && modalNumber === 0}
        setOpen={setOpen}
        name={name}
        setName={setName}
      />
      <UserNameUpdateModal
        inputValues={inputValues}
        open={open && modalNumber === 1}
        setOpen={setOpen}
        userName={userName}
        setUserName={setUserName}
      />
      <PasswordUpdateModal
        inputValues={inputValues}
        open={open && modalNumber === 2}
        setOpen={setOpen}
        password={password}
        setPassword={setPassword}
      />
      <EmailAssignModal
        inputValues={inputValues}
        open={open && modalNumber === 4}
        setOpen={setOpen}
        email={email}
        setEmail={setEmail}
      />
    </SafeAreaView>
  );
};
