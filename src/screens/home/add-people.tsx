import React from "react";
import {
  View,
  Text,
  SectionList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { HomeHeader } from "../../components/home-header";
import { SmallPersonCard, GroupCard } from "../../components/cards";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";
import { CreateGroupComp } from "../../components/cards/create-group";

export const HomeAddPeople = () => {
  const sections = [
    {
      title: "New Friend requests",
      data: [
        { type: "request", name: "James", number: 9876543210 },
        { type: "request", name: "James", number: 9876543210 },
      ],
    },
    {
      title: "Official Account Recommendations",
      data: [
        { type: "recommendations", name: "James", number: 9876543210 },
        { type: "recommendations", name: "James", number: 9876543210 },
      ],
    },
    {
      title: "Friend recomendation",
      data: [
        { type: "recommendations", name: "James", number: 9876543210 },
        { type: "recommendations", name: "James", number: 9876543210 },
        { type: "recommendations", name: "James", number: 9876543210 },
        { type: "recommendations", name: "James", number: 9876543210 },
        { type: "recommendations", name: "James", number: 9876543210 },
      ],
    },
  ];

  const renderCard = ({ item }: { item: any }) => {
    console.log("item", item);

    switch (item.type) {
      case "request":
        return (
          <View className="px-4 pb-1.5">
            <SmallPersonCard acceptIcon name={item.name} />
          </View>
        );
      case "recommendations":
        return (
          <View className="px-4 py-1.5">
            <SmallPersonCard addIcon name={item.name} />
          </View>
        );
      // Add more cases for other card types as needed
      default:
        return null;
    }
  };

  const renderHeader = (section: any) => {
    // console.log("item", item);

    switch (section.title) {
      case "New Friend requests":
        return (
          <View className="px-4">
            <View className="flex flex-row justify-between items-center pt-4 pb-3">
              <Text
                style={{ fontFamily: "Poppins_600SemiBold" }}
                className="text-[#565656]"
              >
                {section.title}
              </Text>

              <Text className="text-primary-color text-xs font-normal font-['Poppins'] leading-none">
                {section.data.length < 10
                  ? `0${section.data.length}`
                  : section.data.length}
              </Text>
            </View>
          </View>
        );
      case "Official Account Recommendations":
        return (
          <View className="px-4">
            <View className="flex flex-row justify-between pt-4 pb-3 border-t border-neutral-200">
              <Text
                style={{ fontFamily: "Poppins_600SemiBold" }}
                className="text-[#565656]"
              >
                {section.title}
              </Text>
              <TouchableOpacity className="rounded-sm justify-center items-center px-3.5 py-1 bg-[#E5E5E5]">
                <Text
                  style={{ fontFamily: "Poppins_300Light" }}
                  className="text-xs text-primary-color"
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case "Friend recomendation":
        return (
          <View className="px-4">
            <View className="flex flex-row justify-between pt-4 pb-3 border-t border-neutral-200">
              <Text
                style={{ fontFamily: "Poppins_600SemiBold" }}
                className="text-[#565656]"
              >
                {section.title}
              </Text>
              <TouchableOpacity className="rounded-sm justify-center items-center px-3.5 py-1 bg-[#E5E5E5]">
                <Text
                  style={{ fontFamily: "Poppins_300Light" }}
                  className="text-xs text-primary-color"
                >
                  {section.data.length}+ See All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      // Add more cases for other card types as needed
      default:
        return null;
    }
  };

  return (
    <View className="bg-white h-full pb-44">
      <HomeHeader backButton list />
      <SafeAreaView className="flex h-full">
        <View className="flex h-full">
          <SectionList
            ListHeaderComponent={() => {
              return (
                <View className=" pt-2.5 pb-1 px-4 bg-[#F4F4F4]">
                  <View className=" pb-1.5 flex flex-row justify-between items-center">
                    <View className=" pb-1.5 flex flex-row">
                      <View
                        className={
                          "h-[48] w-[48] bg-[#E5E5E5] flex items-center justify-center rounded-full"
                        }
                      >
                        <AntDesign name="adduser" size={24} color="#2A5C81" />
                      </View>
                      <View className="pl-4 flex justify-evenly">
                        <Text
                          style={{ fontFamily: "Poppins_600SemiBold" }}
                          className="text-primary-color"
                        >
                          Auto-Add Friends
                        </Text>
                        <Text
                          style={{ fontFamily: "Poppins_300Light" }}
                          className="text-xs text-[#707071]"
                        >
                          Auto-add contacts as friend
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity className="rounded-sm justify-center items-center px-3.5 py-1 bg-primary-color">
                      <Text
                        style={{ fontFamily: "Poppins_300Light" }}
                        className="text-xs text-white"
                      >
                        Allow
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className="border-t border-neutral-200 pt-3">
                    <CreateGroupComp color="gray" />
                  </View>
                </View>
              );
            }}
            stickySectionHeadersEnabled={false}
            renderSectionFooter={() => <View className="pb-4" />}
            renderSectionHeader={({ section }) => {
              return renderHeader(section);
            }}
            sections={sections}
            renderItem={renderCard}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
