import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { FieldInput } from "../../field-input";

export interface NameUpdateModalParams {
  open: boolean;
  setOpen: (arg: boolean) => void;
  inputValues: { label?: string; placeholder?: string }[];
}

export const PasswordUpdateModal: React.FC<NameUpdateModalParams> = ({
  inputValues,
  open,
  setOpen,
}) => {
  const [error, setError] = useState(true);
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
          Update Password
        </Text>

        <View className="w-full px-8">
          <FieldInput
            label={inputValues.at(3)?.label}
            placeholder={
              error
                ? inputValues.at(4)?.placeholder
                : inputValues.at(3)?.placeholder
            }
            password={true}
          />
        </View>

        <View className="w-full px-8 pt-5">
          <FieldInput
            label={inputValues.at(4)?.label}
            placeholder={
              error
                ? inputValues.at(4)?.placeholder
                : inputValues.at(3)?.placeholder
            }
            password={true}
          />
        </View>

        {error ? (
          <Text
            style={{ fontFamily: "Poppins_400Regular" }}
            className="ml-1 pr-16 pt-[14] text-other-red text-sm font-normal leading-snug self-start pl-8"
          >
            Password doesn't match please check again
          </Text>
        ) : (
          <Text
            style={{ fontFamily: "Poppins_400Regular" }}
            className="ml-1 pt-[14] text-zinc-600 text-sm font-normal leading-snug self-start pl-8"
          >
            Use special character to secure your {"\n"}password
          </Text>
        )}

        <TouchableOpacity className="pb-10 pt-7">
          <View className="w-[307px] h-[37px] flex items-center justify-center bg-primary-color rounded-[5px] mb-1">
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-center text-neutral-50 text-[13px] font-semibold leading-snug"
            >
              Save Name
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
