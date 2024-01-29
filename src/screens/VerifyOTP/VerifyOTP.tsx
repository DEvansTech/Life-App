import React from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  View
} from "react-native";
import { Routes } from "@Navigators/routes";

const VerifyOTPScreen = ({ navigation }: any) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView>
        <View className=" pt-10 w-full px-10 h-full bg-[#FFFFFF]">
          <View
            className="flex flex-col items-center justify-center gap-4"
          >
            <Text className="Poppins_700 mt-7 text-center text-[#000000] text-[17px] font-semibold leading-snug">
              Please enter the OTP {"\n"} received on your device
            </Text>
            <View className="w-full h-20 flex flex-row justify-center items-center gap-2.5 ">
              {
                Array.from({ length: 6 }, (_, index) => (
                  <TextInput
                    ref={inputRefs.current[index]}
                    keyboardType={"phone-pad"}
                    placeholder=""
                    value={otpVerificationCode[index]}
                    className="w-12 h-12 bg-[#F2F2F2] text-center text-[#000000] text-[24px] font-normal font-['Poppins'] leading-snug rounded-lg"
                    maxLength={1}
                    key={index}
                    onChangeText={(value) => setOptVerifCode(value, index)}
                  />
                ))
              }
            </View>
            {
              isVerifying ? null :
                <View>
                  <Text className="w-[330px] text-center text-[#6B95BB] text-neutral-400 text-sm font-normal font-['Poppins'] leading-snug">
                    12 sec left
                  </Text>
                </View>
            }
            <View>
              <Text className="ext-center text-slate-400 text-xs font-semibold leading-snug">
                {isVerifying ? 'Verifying OTP' : 'Resend OTP'}
              </Text>
            </View>
            <TouchableOpacity
              disabled={!isVerificationCodeInputed}
              onPress={async () => {
                setIsVerifying(true);
                const isVerified = await checkOutVerificationCode(otpVerificationCode.join(''))
                if (isVerified) {
                  if (global.isRegistered === true) {
                    navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'Tabs' }]
                      })
                    )
                  } else {
                    navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'Register-Process-Deactivated-Two' }]
                      })
                    )
                  }
                }
              }}
            >
              <Ionicons
                name="arrow-forward-outline"
                size={32}
                color={isVerificationCodeInputed ? '#FFFFFF' : '#919191'}
                padding={18}
                style={{
                  backgroundColor: isVerificationCodeInputed ? '#2A5C81' : '#D4D4D4',
                  borderRadius: 50,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default VerifyOTPScreen;