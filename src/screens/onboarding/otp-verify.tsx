import { CommonActions } from "@react-navigation/native";
import React, { useContext, useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";

export const OtpVerify = ({ navigation }: any) => {

  const [otpVerificationCode, setOtpVerificationCode] = useState<string[]>(['', '', '', '', '', ''])
  const [isVerificationCodeInputed, setIsVerificationCodeInputed] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const inputRefs = useRef<React.RefObject<TextInput>[]>(Array.from({ length: 6 }, () => React.createRef()));

  const setOptVerifCode = (newVal: string, index: number) => {

    const updatedOptArray = [...otpVerificationCode]
    updatedOptArray[index] = newVal;
    setOtpVerificationCode(updatedOptArray);
    
    if (newVal.length === 1 && index < 6 - 1) {
      inputRefs.current[index + 1].current?.focus();
    }
    
    if (index === 5) {
      setIsVerificationCodeInputed(true);
    } else {
      setIsVerificationCodeInputed(false);
    }
  }

  const checkOutVerificationCode = async (verificationCode: string) =>  {
    // Implement the verification Logic
    // 2s Delay
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })

    if (verificationCode === '005959') {
      //setIsVerified(true);
      return true;
    } else {
      setIsVerifying(false);
      setOtpVerificationCode(['', '', '', '', '', ''])
      return false;
    }
  }

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
};

