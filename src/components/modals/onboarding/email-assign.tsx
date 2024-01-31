import React, { useEffect, useMemo, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { FieldInput } from "../../field-input";

export interface EmailAssignModalParams {
  open: boolean;
  setOpen: (arg: boolean) => void;
  inputValues: { label?: string; placeholder?: string }[];
  email: string,
  setEmail: (email: string) => void;
}

export const EmailAssignModal: React.FC<EmailAssignModalParams> = ({
  inputValues,
  open,
  setOpen,
  email,
  setEmail
}) => {
  const [iEmail, setIEmail] = useState(email);
  const memoizedIEmail = useMemo(() => iEmail, [iEmail]);
  const [error, setError] = useState(true);

  useEffect(() => {
    setIEmail(email);
  }, [email]);

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  const handleSaveEmail = () => {
    if (!error) {
      setEmail(memoizedIEmail);
      setOpen(false);
    }
  }

  const handleChangeEmail = (newEmail: string) => {
    setIEmail(newEmail);
    if (validateEmail(newEmail)) {
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <Modal
      style={{ justifyContent: "flex-end", margin: 0 }}
      hasBackdrop={true}
      isVisible={open}
      backdropOpacity={0.6}
      onBackdropPress={() => setOpen(false)}
    >
      <View className="w-full bg-white pb-20 pt-8 flex items-center rounded-tl-[40px] rounded-tr-[40px]">
        <Text
          style={{ fontFamily: "Poppins_600SemiBold" }}
          className="text-black pb-7 text-base font-semibold leading-snug"
        >
          Enter your email address
        </Text>

        <View className="w-full px-8">
          <FieldInput
            value={memoizedIEmail}
            onChangeText={handleChangeEmail}
            label={inputValues.at(1)?.label}
            placeholder={inputValues.at(1)?.placeholder}
            password={false}
          />
        </View>

        {error && 
          <Text
            style={{ fontFamily: "Poppins_400Regular" }}
            className="ml-1 pr-16 pt-[14] text-red-600 text-sm font-normal leading-snug self-start pl-8"
          >
            Wrong email format
          </Text>
        }
        <TouchableOpacity className="pb-6 pt-8" onPress={handleSaveEmail}>
          <View className="w-[307px] h-[37px] flex items-center justify-center bg-blue-900 rounded-[5px] mb-1">
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-center text-neutral-50 text-[13px] font-semibold leading-snug"
            >
              Save Email
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
