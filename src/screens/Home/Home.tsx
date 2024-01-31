import React, {
  useState
} from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SectionList,
  SafeAreaView,
  Image,
  TextInput,
  StatusBar
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modal";
import HeaderComp from "@Components/Header";
import { Routes } from "@Navigators/routes";
import CustomTextInputComp from "@Components/CustomTextInput";
import CardComp from "@Components/Card";
import ProfileCardComp from "@Components/ProfileCard";
import { DATA } from "@Theme/constants";
import useAuth from "@Hooks/useAuth";
import { Group, Person } from "src/types";
import GroupCardComp from "@Components/GroupCard";
import PersonCardComp from "@Components/PersonCard";

const HomeScreen = ({ navigation, route }: any) => {
  const data = DATA;
  const { authData } = useAuth();

  const renderListHeader = () => {
    return (
      <View className="py-3.5">
        <ProfileCardComp avatar="https://s3-alpha-sig.figma.com/img/c821/61ec/21f46033e43fc009cdf3e9bf3334b5bc?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XQULIF6H-dtrC4OeczVEvVM4UENGAXWcRPVv55cBVS1IZek2UXCCQ2kU70HwKuJOp8HcvX9OErg9rKNZTCu1tlSovb4i3fvmPatGt~3d6HLaBsvMox2kpD338~dIjUKNQjXglUDTtN855-pMueOXM97Gf4V8i-bXDpmj5VsKdpmq3jeeup6TZ1ND~WFCUOs6EZ3AeBQ6Kd36Tgoia8FkaFTHx5gtkWTNcI6QZJ3vE3AHMUECDIhLaBBoLbPRsN13zqrj9nHBufF2uOVkvHiKf8QQpkQB767ruTmKCf2bYRFSZFbmL6MWuBqIEzsASBtALe-A8O84dJXSkQquCTVBow__" name={authData?.name || ""} summary="Be brave" onClick={handleMyProfileClick} />
      </View>
    );
  }

  const renderSectionHeader = ({ section }: any) => {
    return (
      <View>
        <TouchableOpacity className="mx-4 px-2 py-4 flex flex-row justify-between border-t border-[#E5E5E5]">
          <Text style={{ fontSize: 14, fontWeight: "600", lineHeight: 22, color: "#565656" }}>{section.title}</Text>
          <Ionicons name="chevron-up" size={24} color="#AAAAAA" />
        </TouchableOpacity>
        {section.type === "groups" && <CardComp
          icon={<Image className="rounded-full" width={48} height={48} source={require("@Assets/img/create_group.png")} />}
          title={
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#707071", lineHeight: 22 }}>
              Create Group
            </Text >
          }
          summary={<Text style={{ fontSize: 12, fontWeight: "300", color: "#707071", lineHeight: 14 }}>Create a group for you and your friends</Text >}
          onClick={() => { navigation.navigate(Routes.CreateGroup) }}
        />}
      </View>

    );
  }

  const renderItem = ({ section: { title }, item }: any) => {
    return (
      item.type === "group"
        ? <GroupCardComp icon={item.icon} title={item.title} info={item.info} summary={item.summary} onClick={() => { }} />
        : <PersonCardComp avatar={item.avatar} name={item.name} info={item.info} summary={item.summary} onClick={() => { }} />
    );
  }

  const handleMyProfileClick = () => { };
  return (
    <SafeAreaView className="bg-white">
      <StatusBar
        animated={true}
        backgroundColor="#00406E"
      />
      <HeaderComp bgColor="#00406E" color="#F7F7F7" leftIcon="settings" title="Home" rightIcon="addperson" onRightPress={() => navigation.navigate(Routes.AddPeople)} hasSearchBar />
      <SectionList
        ListHeaderComponent={renderListHeader}
        sections={data}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;