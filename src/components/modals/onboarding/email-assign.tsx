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

  useEffect(() => {
    setIEmail(email);
  }, [email]);
  
  const handleSaveEmail = () => {
    setEmail(memoizedIEmail);
    setOpen(false);
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
            onChangeText={setIEmail}
            label={inputValues.at(1)?.label}
            placeholder={inputValues.at(1)?.placeholder}
            password={false}
          />
        </View>
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
