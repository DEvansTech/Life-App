import React from "react";
import {
  View,
  Text,
  SectionList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  SmallPersonCard,
  ProfileCard,
  GroupCard,
} from "../../components/cards";
import { CreateGroupComp } from "../../components/cards/create-group";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParams } from "../../navigation/home-stack";
import { BasicHeader } from "../../components/basic-header";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";
import CustomTextInput from "../../components/text-input";

type HomeScreenProps = StackScreenProps<HomeStackParams, "Home">;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [addFriend, setAddFriend] = React.useState(false);
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
      title: "Friends 650",
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
    switch (item.type) {
      case "group":
        return (
          <View className="pb-3">
            <GroupCard />
          </View>
        );
      case "friend":
        return (
          <View className="pb-3">
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
    <View className="bg-white h-full flex-column pb-40">
      <BasicHeader
        name="Home"
        leftIcon={
          <TouchableOpacity>
            <Feather name="settings" size={22} color="#6B95BB" />
          </TouchableOpacity>
        }
        rightIcon={
          // addFriend ? (
          //   <TouchableOpacity
          //     onPress={() => {
          //       setAddFriend(false);
          //     }}
          //   >
          //     <MaterialIcons name="close" size={22} color="#6B95BB" />
          //   </TouchableOpacity>
          // ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeAdd");
            }}
          >
            <MaterialIcons name="person-add-alt" size={22} color="#6B95BB" />
          </TouchableOpacity>
          // )
        }
      />
      <View className="px-4 pb-4 bg-[#00406E]">
        <CustomTextInput
          leftIcon={<MaterialIcons name="search" color="white" size={20} />}
          containerStyle="rounded bg-[#96B4D137] text-white border border-transparent h-10 items-center"
          inputStyle="font-Poppins_400 text-white text-sm"
          placeholder="Search"
          placeholderTextColor={"#C9C9C9"}
        />
      </View>
      <SafeAreaView className="flex h-full grow flex-column">
        <SectionList
          className="mx-4"
          ListHeaderComponent={() => {
            return (
              <View className="pt-5 pb-4">
                <ProfileCard />
              </View>
            );
          }}
          stickySectionHeadersEnabled={false}
          renderSectionFooter={() => <View className="pb-4" />}
          renderSectionHeader={({ section }) => (
            <View>
              <View className="flex flex-row justify-between pt-4 pb-3 border-t border-neutral-200">
                <Text className="text-[#565656] font-Poppins_600 text-sm">
                  {section.title}
                </Text>
                <FontAwesome name={"chevron-up"} color={"#AAAAAA"} size={14} />
              </View>
              {section.title === "My groups" ? (
                <CreateGroupComp onPress={handleNavigation} />
              ) : null}
            </View>
          )}
          sections={sections}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
};
