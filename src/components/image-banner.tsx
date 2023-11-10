import React from "react";
import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const ImageBanner = () => {
  return (
    <View className="w-full h-[163px] flex flex-col justify-center items-center relative bg-zinc-200 rounded-[11px] ">
      <View className="mt-4 w-[88.74px] h-[93px] bg-zinc-400 rounded-full relative">
        <View className="left-[52px] top-[67px] absolute">
          <View className="w-[26px] h-[26px] flex flex justify-center items-center bg-sky-900 rounded-full border-2 border-white">
            <Text className="z-5">
              <FontAwesome name={"camera"} color={"#fff"} size={12} />
            </Text>
          </View>
        </View>
      </View>

      <Text className="mt-[12] text-black text-sm font-normal leading-snug">
        Upload avatar
      </Text>
    </View>
  );
};

export interface ImageBannerHeaderParams {
  title?: string[];
  progress?: number;
}

// title is array so you can provide line breaks.
export const ImageBannerHeader: React.FC<ImageBannerHeaderParams> = ({
  title,
  progress,
}) => {
  return (
    <View
      className={`w-full pt-5 ${
        progress ? "h-80" : "h-72"
      } flex flex-col justify-end items-center relative bg-zinc-200 rounded-[11px]`}
    >
      {progress ? (
        <View className="mb-6 item-start flex flex-row gap-x-[9px]">
          <View className="w-3 h-3 bg-primary-color rounded-full" />
          <View className="w-3 h-3 bg-zinc-400 rounded-full" />
          <View className="w-3 h-3 bg-zinc-400 rounded-full" />
        </View>
      ) : null}

      {title?.map((part) => {
        return (
          <Text className="text-center text-black text-base font-semibold font-['Poppins'] leading-relaxed">
            {part}
          </Text>
        );
      })}
      <View className="mt-6 mb-6 w-28 h-28 bg-zinc-400 rounded-full relative">
        <View className="left-[64.98px] top-[83.67px] absolute">
          <View className="w-8 h-8 flex flex justify-center items-center bg-sky-900 rounded-full border-2 border-white">
            <Text className="z-5">
              <FontAwesome name={"camera"} color={"#fff"} size={14} />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
