import React from "react";
import {
  View,
  Text,
  SectionList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { SmallPersonCard, GroupCard } from "../../components/cards";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { CreateGroupComp } from "../../components/cards/create-group";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParams } from "../../navigation/home-stack";
import { BasicHeader } from "../../components/basic-header";

type HomeAddScreenProps = StackScreenProps<HomeStackParams, "HomeAdd">;

export const HomeAddPeople: React.FC<HomeAddScreenProps> = ({ navigation }) => {
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
              <Text className="text-[#565656] font-Poppins_600">
                {section.title}
              </Text>

              <Text className="text-primary-color text-xs font-normal font-Poppins_600 leading-none">
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
              <Text className="text-[#565656] font-Poppins_600">
                {section.title}
              </Text>
              <TouchableOpacity className="rounded-sm justify-center items-center px-3.5 py-1 bg-[#E5E5E5]">
                <Text className="text-xs text-primary-color font-Poppins_300">
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
              <Text className="text-[#565656] font-Poppins_600">
                {section.title}
              </Text>
              <TouchableOpacity className="rounded-sm justify-center items-center px-3.5 py-1 bg-[#E5E5E5]">
                <Text className="text-xs text-primary-color font-Poppins_300">
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
      <BasicHeader
        name="Home"
        leftIcon={
          <TouchableOpacity>
            <Feather name="settings" size={22} color="#6B95BB" />
          </TouchableOpacity>
        }
        rightIcon={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <MaterialIcons name="close" size={22} color="#6B95BB" />
          </TouchableOpacity>
        }
      />
      <View className="w-full flex flex-row justify-between px-20 py-4 border-t border-[#2A5C81] bg-[#00406E]">
        <View className="items-center">
          <MaterialIcons name="qr-code-2" size={40} color="#96B4D1" />
          <Text
            style={{ fontFamily: "Poppins_300Light" }}
            className="text-slate-400 text-xs font-light font-['Poppins'] leading-snug"
          >
            QR Code
          </Text>
        </View>
        <View className="items-center">
          <MaterialIcons name="search" size={40} color="#96B4D1" />
          <Text
            style={{ fontFamily: "Poppins_300Light" }}
            className="text-slate-400 text-xs font-light font-['Poppins'] leading-snug"
          >
            Search
          </Text>
        </View>
      </View>
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
                        <Text className="text-primary-color font-Poppins_600 text-sm">
                          Auto-Add Friends
                        </Text>
                        <Text className="text-xs text-[#707071] font-Poppins_300">
                          Auto-add contacts as friend
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity className="rounded-sm justify-center items-center px-3.5 py-1 bg-primary-color">
                      <Text className="text-xs text-white font-Poppins_300">
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
