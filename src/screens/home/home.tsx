import React from "react";
import { View, Text, SectionList, SafeAreaView } from "react-native";
import { HomeHeader } from "../../components/home-header";
import {
  SmallPersonCard,
  ProfileCard,
  GroupCard,
} from "../../components/cards";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";
import { CreateGroupComp } from "../../components/cards/create-group";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParams } from "../../navigation/home-stack";

type HomeScreenProps = StackScreenProps<HomeStackParams, "Home">;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const sections = [
    {
      title: "My groups",
      data: [
        { type: "group", name: "James", number: 9876543210 },
        { type: "group", name: "James", number: 9876543210 },
        { type: "group", name: "James", number: 9876543210 },
      ],
    },
    {
      title: "Friends",
      data: [
        { type: "friend", name: "James", number: 9876543210 },
        { type: "friend", name: "James", number: 9876543210 },
        { type: "friend", name: "James", number: 9876543210 },
        { type: "friend", name: "James", number: 9876543210 },
        { type: "friend", name: "James", number: 9876543210 },
        { type: "friend", name: "James", number: 9876543210 },
        { type: "friend", name: "James", number: 9876543210 },
        { type: "friend", name: "James", number: 9876543210 },
        { type: "friend", name: "James", number: 9876543210 },
        { type: "friend", name: "James", number: 9876543210 },
      ],
    },
  ];

  const renderItem = ({ item }: { item: any }) => {
    console.log("item", item);

    switch (item.type) {
      case "group":
        return (
          <View className="pb-1.5">
            <GroupCard />
          </View>
        );
      case "friend":
        return (
          <View className="py-1.5">
            <SmallPersonCard name={item.name} time="32 min ago" />
          </View>
        );
      // Add more cases for other card types as needed
      default:
        return null;
    }
  };

  const handleNavigation = () => {
    navigation.navigate("GroupCreation");
  };

  return (
    <View className="bg-white h-full pb-40">
      <HomeHeader search />
      <SafeAreaView className="flex h-full">
        <View className="flex px-4 h-full">
          <SectionList
            ListHeaderComponent={() => {
              return (
                <View className="py-5">
                  <ProfileCard />
                </View>
              );
            }}
            stickySectionHeadersEnabled={false}
            renderSectionFooter={() => <View className="pb-4" />}
            renderSectionHeader={({ section }) => (
              <View>
                <View className="flex flex-row justify-between pt-4 pb-3 border-t border-neutral-200">
                  <Text
                    style={{ fontFamily: "Poppins_600SemiBold" }}
                    className="text-[#565656]"
                  >
                    {section.title}
                  </Text>
                  <FontAwesome
                    name={"chevron-up"}
                    color={"#AAAAAA"}
                    size={14}
                  />
                </View>
                {section.title === "My groups" ? (
                  <CreateGroupComp onPress={handleNavigation} />
                ) : null}
              </View>
            )}
            sections={sections}
            renderItem={renderItem}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
