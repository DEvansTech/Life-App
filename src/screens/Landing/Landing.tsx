import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Routes } from "@Navigators/routes"
import useAuth from "@Hooks/useAuth";


const LandingScreen = ({ navigation }: any) => {
  const { authData, loading } = useAuth();

  useEffect(() => {
    console.log(authData);
    if (authData || authData !== undefined) navigation.navigate(Routes.BottomTabNav);
  }, [authData]);

  return (
    <View className="w-full h-full pb-11 px-11 flex-col justify-between bg-white">
      <View>
        <Image className="w-[226px] h-[226px] mt-20 mx-auto" source={require("@Assets/img/logo.png")} />
        <Text className="mt-12 mx-auto text-primary text-[17px] font-poppins font-medium leading-[22px]">Easy, Safe and SECURE</Text>
        <Text className="mt-1 mx-auto text-[#58575D] text-[16px] font-poppins font-light leading-[22px]">Get started with LIFE app</Text>
      </View>
      <View>
        <TouchableOpacity
          className="w-full rounded-md py-2 mb-2 bg-primary border border-primary"
          onPress={() => navigation.navigate(Routes.EnterPhone)}
        >
          <Text className="font-poppins text-white font-semibold mx-auto text-[13px]">Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full rounded-md py-2 mb-6 bg-white border border-primary"
          onPress={() => navigation.navigate(Routes.EnterPhone)}
        >
          <Text className="font-poppins text-primary font-semibold mx-auto text-[13px]">Sign Up</Text>
        </TouchableOpacity>
        <Text className="text-[#1C517E] mx-auto font-poppins text-[16px] font-light leading-[22px]">“ END-TO-END ENCRYPTED”</Text>
      </View>

    </View>
  );
}

export default LandingScreen;