import React from "react";
import { View, Text, SectionList, SafeAreaView } from "react-native";
import { HomeHeader } from "../../components/home-header";
import { PersonCard, ProfileCard } from "../../components/cards";

export const HomeScreen = () => {
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
          <View className="py-3">
            <PersonCard name={item.name} />
          </View>
        );
      case "friend":
        return (
          <View className="py-3">
            <PersonCard name={item.name} />
          </View>
        );
      // Add more cases for other card types as needed
      default:
        return null;
    }
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
          renderSectionHeader={({ section }) => (
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-[#565656]"
            >
              {section.title}
            </Text>
          )}
          sections={sections}
          renderItem={renderItem}
        />
      </View>
      </SafeAreaView>
    </View>
  );
};
