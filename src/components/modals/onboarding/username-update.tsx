import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { FieldInput } from "../../field-input";

export interface NameUpdateModalParams {
  open: boolean;
  setOpen: (arg: boolean) => void;
  inputValues: { label?: string; placeholder?: string }[];
}

export const UserNameUpdateModal: React.FC<NameUpdateModalParams> = ({
  inputValues,
  open,
  setOpen,
}) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(true);

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
          Create a username
        </Text>

        <View className="w-full px-8">
          <FieldInput
            label={inputValues.at(2)?.label}
            placeholder={inputValues.at(2)?.placeholder}
            password={false}
            message={
              error
                ? "This username is already taken"
                : "This username is available now"
            }
            error={error}
            success={success}
          />
        </View>

        {/* if there is an error show suggested names */}
        {error ? (
          <View className="self-start pt-3.5 px-9">
            <Text
              style={{ fontFamily: "Poppins_400Regular" }}
              className="text-zinc-600 pb-2.5 text-sm font-normal leading-snug"
            >
              Suggested
            </Text>
            <View className="flex flex-row gap-1.5 w-3/4 flex-wrap">
              <View
                style={{ backgroundColor: "rgba(0, 64, 110, 0.09)" }}
                className="p-2.5 bg-opacity-10 rounded-[10px] inline-flex"
              >
                <Text className="text-zinc-600 text-sm">misbah_himel</Text>
              </View>
              <View
                style={{ backgroundColor: "rgba(0, 64, 110, 0.09)" }}
                className="p-2.5 bg-opacity-10 rounded-[10px] inline-flex"
              >
                <Text className="text-zinc-600 text-sm">misbah001</Text>
              </View>
              <View
                style={{ backgroundColor: "rgba(0, 64, 110, 0.09)" }}
                className="p-2.5 bg-opacity-10 rounded-[10px] inline-flex"
              >
                <Text className="text-zinc-600 text-sm">himelmisbah</Text>
              </View>
            </View>
          </View>
        ) : null}

        {!error && !success ? (
          <Text
            style={{ fontFamily: "Poppins_400Regular" }}
            className=" pt-[14] text-zinc-600 text-sm font-normal leading-snug self-start pl-8"
          >
            Don’t use uppercase, special character {"\n"}to create a username
          </Text>
        ) : null}

        <TouchableOpacity
          className={`pb-10 ${error ? "pt-3" : "pt-5"} ${success && "pt-7"}`}
        >
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
