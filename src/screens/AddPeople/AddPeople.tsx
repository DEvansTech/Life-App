import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  SectionList
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HeaderComp from "@Components/Header";
import { Routes } from "@Navigators/routes";
import CardComp from "@Components/Card";
import styles from "./styles";

const sections = [{
  title: "Official Account Recommendations",
  button: "See All",
  data: [{
    icon: "https://s3-alpha-sig.figma.com/img/acec/55c0/9bc45d0030830152871655d43ca2cd96?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oG52EjKSFZjfakAUWbEtLoFhIUwnMtEx~VsiBbcrTAJSpQdXjCfofy2ShGvQlzddQn8HkK~cSrtE2CqyjVQsquH76kSkBTkxeTwXmNLrrL-YaU4QlgiUuR4MJGeztYmB9leOj2ixSF5lP6pq1Fmv3dY8ifAqDHCsHMl9SK0EjnkPBjXa4aq8kPSGuu9nRY2PaG63QnsnmYDXDzG03BsB9bRCbRo~g~W-nsDsBa-7cGEaWM4laV2raQ6rJoovVusTO~6erxwGynRY5HTL8a-2oj~kfpryWhfvkA6cRkkhXM-08~YXx3AXzC7ow7F3ZDiZ4XgwHZ65hZy5OSdlwPqSxQ__",
    size: 36,
    title: "Anna Marie"
  }, {
    icon: "https://s3-alpha-sig.figma.com/img/81b7/8a09/fc745ee29bad5fb5945fecee64d72f2f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pZrdn-xHgtd30qe4vdKiFYsRQCCNRsuaWsNunfOGaA0Y9DlgsocyrSLBuXkt~6~4vR0bfweaU14P91SQjE9nKMANF4OWQBlU9py2gbhRWq2y--xSwewVbhGV2S1rPSH5t415acpap6KxDDU03rf0aH8VwSKf3KRMcBRayCTQlYDJFC4y3ydZu5AdY8-EVAMsU~tsZO3Sq~zC074wX5bwbLHVTBGBMw0utr31UVaLJi1FtpG6f0xYij3y99n9LT4GK6UhYXUUMdOVSiccNTbSkW4ng7qbonkMxwpoHA4~3gkVc0kJLhPRd09sGEH0AEUMeeIpClsuXTUMb~SE2bUGRA__",
    size: 36,
    title: "Anna Marie"
  }]
}, {
  title: "Friend Recommendation",
  button: "90+ See all",
  data: [{
    icon: "https://s3-alpha-sig.figma.com/img/05f5/3e01/83c1ab3c4a7a680b17ca861ce53e0acd?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aB7Gdq-daEeAtjyzR3FHFQRaW6CJXayKZbSItimsv-3pfCtqYNXe5GE84d9h-Iz~B1Mwi6plv484BuemJEPMLhS1Kx7GJoER9taBEC5M6KDpiIN8J7lPP2x2bGHFLEFlua4CytTXVNBTy1errOxsXYpxHUlV22OevBcEvDWgCihS0Eh13DzwlQvgT2AVwvPP5MWOnlggk7DEMeUhFVmKt8lh0AfexthW9qoJGcvmU26OXeO5wwILOlRcMK33e7ai4O~d6Rq4fnotP-wMjIptPsUvDRFfmVKzb80PBs4U9oIuqU4q5s~Qww6hG2OfloMjAnrelvLIU0ox-oHT1Ys9qg__",
    size: 36,
    title: "Anna Marie"
  }, {
    icon: "https://s3-alpha-sig.figma.com/img/0647/ceb0/e721e552e9fcfa0ccbb0cd8cd3c583fd?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7GiN01kDIy2racHQJjGQ8XSdO7PzKKinfrMHD10NgxHmIjMebIBmg2e6q7ZLYyPv126sT31buu1R4CZ6bRj15TTBF5NPFOJ7SyLkLoAFZBkzSB03opes4J~hetNMSRyhG7jrW-EeKC3v56vXXLAN4awJYJv7hpKjfKPdcPXDYwoOOkRjyMlyz-Xx6nXZaIeDs8gBbDH3H44K1JQQSpGBb9tobco44JiF9P36DVOn07PwnqrVbAQBCliqb4lDOUNVoglQ-RM1fnhbFdNTvzaCsdLZ~ENAPGZ9sKvojQE2Uyl0j7dHr64tVYTpiuJpQYhaKM1YiZO0bEq3rfCVcvlcQ__",
    size: 36,
    title: "Anna Marie"
  }, {
    icon: "https://s3-alpha-sig.figma.com/img/64ca/ece4/ff76e31cc78d7bb52b46eac26019159a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qcxo4uMPrmY31N0XAHkP70~I2hIdM-j~wJHxVhEyphKcvFVXLVjmJHWzLNPJHHXyMsdmobepy7EgVof0MWdC4U5LOar2CBXHpW9E9elrD55QFSPvMjrH1bOwcl6DRp7SjXEo0zTImabwns6XXcAF0Gqs5cM4nDw834RiE3K6t3E3lIdIJ95lWvxBtYb-UTBQl3OWl9B4Ww0kcDz9o7x9IkA4zEm-iE8jK9QGaNDe1gLbpsurKcG~zknFxOLBzJ6IMv9QkoxU8-lOBavmbf~htYd86seAc8YvAvyvcPuHUZPv8miGZ9gixGjl~4qyDhDFav538u4Z87MQ4kiegnTdWg__",
    size: 36,
    title: "Anna Marie"
  }, {
    icon: "https://s3-alpha-sig.figma.com/img/3430/cbe8/6e3e53f3edfbd81aa64e4676b27cd096?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7N8XGmbuS3YLwWij4TcWSdkRPnIPsLIcGajWmhNPxXexbsvYXf0Sp2Qx5qUMbKzQzdwWn9aknA7-j0h980bMbCfeFIPpom0sCGLmipk3YcjCiCPiIwMP8KTNmwsPWrXcxEkiPFo9cMGkf~QKY~tO6B8J0LZOBKJpitk-H64kct0C6Q~4HZWlFGA9MqELMg9HpstIA~bZm7hUn900h341sX6RXe2vH20ywuTL0H7duqiKeDxtXZ~CKx-4dZEpZGVWbGnSHRP2HO1FKKKghWvPCTNVUUyzmavwStpJnSURlg5GMRyf4SVaxszi8g~xHLf1y6HRQWPsjkrF2-qyBTHMQ__",
    size: 36,
    title: "Anna Marie"
  }, {
    icon: "https://s3-alpha-sig.figma.com/img/05f5/3e01/83c1ab3c4a7a680b17ca861ce53e0acd?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aB7Gdq-daEeAtjyzR3FHFQRaW6CJXayKZbSItimsv-3pfCtqYNXe5GE84d9h-Iz~B1Mwi6plv484BuemJEPMLhS1Kx7GJoER9taBEC5M6KDpiIN8J7lPP2x2bGHFLEFlua4CytTXVNBTy1errOxsXYpxHUlV22OevBcEvDWgCihS0Eh13DzwlQvgT2AVwvPP5MWOnlggk7DEMeUhFVmKt8lh0AfexthW9qoJGcvmU26OXeO5wwILOlRcMK33e7ai4O~d6Rq4fnotP-wMjIptPsUvDRFfmVKzb80PBs4U9oIuqU4q5s~Qww6hG2OfloMjAnrelvLIU0ox-oHT1Ys9qg__",
    size: 36,
    title: "Anna Marie"
  }, {
    icon: "https://s3-alpha-sig.figma.com/img/0647/ceb0/e721e552e9fcfa0ccbb0cd8cd3c583fd?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7GiN01kDIy2racHQJjGQ8XSdO7PzKKinfrMHD10NgxHmIjMebIBmg2e6q7ZLYyPv126sT31buu1R4CZ6bRj15TTBF5NPFOJ7SyLkLoAFZBkzSB03opes4J~hetNMSRyhG7jrW-EeKC3v56vXXLAN4awJYJv7hpKjfKPdcPXDYwoOOkRjyMlyz-Xx6nXZaIeDs8gBbDH3H44K1JQQSpGBb9tobco44JiF9P36DVOn07PwnqrVbAQBCliqb4lDOUNVoglQ-RM1fnhbFdNTvzaCsdLZ~ENAPGZ9sKvojQE2Uyl0j7dHr64tVYTpiuJpQYhaKM1YiZO0bEq3rfCVcvlcQ__",
    size: 36,
    title: "Anna Marie"
  }, {
    icon: "https://s3-alpha-sig.figma.com/img/64ca/ece4/ff76e31cc78d7bb52b46eac26019159a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qcxo4uMPrmY31N0XAHkP70~I2hIdM-j~wJHxVhEyphKcvFVXLVjmJHWzLNPJHHXyMsdmobepy7EgVof0MWdC4U5LOar2CBXHpW9E9elrD55QFSPvMjrH1bOwcl6DRp7SjXEo0zTImabwns6XXcAF0Gqs5cM4nDw834RiE3K6t3E3lIdIJ95lWvxBtYb-UTBQl3OWl9B4Ww0kcDz9o7x9IkA4zEm-iE8jK9QGaNDe1gLbpsurKcG~zknFxOLBzJ6IMv9QkoxU8-lOBavmbf~htYd86seAc8YvAvyvcPuHUZPv8miGZ9gixGjl~4qyDhDFav538u4Z87MQ4kiegnTdWg__",
    size: 36,
    title: "Anna Marie"
  }, {
    icon: "https://s3-alpha-sig.figma.com/img/3430/cbe8/6e3e53f3edfbd81aa64e4676b27cd096?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7N8XGmbuS3YLwWij4TcWSdkRPnIPsLIcGajWmhNPxXexbsvYXf0Sp2Qx5qUMbKzQzdwWn9aknA7-j0h980bMbCfeFIPpom0sCGLmipk3YcjCiCPiIwMP8KTNmwsPWrXcxEkiPFo9cMGkf~QKY~tO6B8J0LZOBKJpitk-H64kct0C6Q~4HZWlFGA9MqELMg9HpstIA~bZm7hUn900h341sX6RXe2vH20ywuTL0H7duqiKeDxtXZ~CKx-4dZEpZGVWbGnSHRP2HO1FKKKghWvPCTNVUUyzmavwStpJnSURlg5GMRyf4SVaxszi8g~xHLf1y6HRQWPsjkrF2-qyBTHMQ__",
    size: 36,
    title: "Anna Marie"
  }]
},]

const AddPeopleScreen = ({ navigation, route }: any) => {
  const renderListHeader = () => {
    return (
      <View className="bg-[#F4F4F4] py-[10]">
        <CardComp
          icon={<View><Image width={48} height={48} source={require("@Assets/img/add-user.png")}></Image></View>}
          size={48}
          title="Auto-Add Friends"
          titleSize={14}
          titleColor="#2A5C81"
          comment="Auto-add contacts as friend"
          rightNode={
            <TouchableOpacity className="bg-primary px-2 py-1 rounded-sm">
              <Text className="text-white text-[12px] font-poppins">Allow</Text>
            </TouchableOpacity>
          } />
        <View className="my-2 mx-3 border-t border-gray-200"></View>
        <CardComp
          onPress={() => navigation.navigate(Routes.CreateGroup)}
          icon={<View><Image width={48} height={48} source={require("@Assets/img/group-gray.png")}></Image></View>}
          size={48}
          title="Create group"
          titleSize={14}
          titleColor="#2A5C81"
          comment="Create group for you and friends" />
      </View>
    );
  };
  const renderSectionHeader = ({ section }: any) => {
    return (
      <View className="flex flex-row justify-between mx-4 py-4 border-t border-gray-200">
        <Text className="my-auto font-semi-bold">{section.title}</Text>
        <TouchableOpacity className="bg-[#E5E5E5] text-primary px-2 py-1 my-auto rounded-sm">
          <Text className="text-primary">{section.button}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const renderItem = ({ section: { title }, item }: any) => {
    return (
      <View className="pb-3">
        <CardComp
          size={item.size}
          icon={<View><Image className="rounded-full" width={item.size} height={item.size} source={{ uri: item.icon }} /></View>}
          title={item.title}
          titleSize={14}
          info={item.info}
          comment={item.comment}
          rightNode={
            <TouchableOpacity
              className="my-auto"
              onPress={() => {
                navigation.navigate(Routes.AddPeople);
              }}
            >
              <MaterialIcons name="person-add-alt" size={20} color="#6B95BB" />
            </TouchableOpacity>
          }
        />
      </View>
    );
  }

  return (
    <SafeAreaView className="w-full h-full bg-white">
      <HeaderComp
        leftNode={
          <TouchableOpacity
            className="my-auto"
            onPress={() => {
              // navigation.navigate("SideBar")
            }}
          >
            <Feather name="settings" size={22} color="#6B95BB" />
          </TouchableOpacity>
        }
        centerNode={
          <Text className="font-poppins text-white text-[17px] font-bold leading-[26px]">Home</Text>
        }
        rightNode={
          <TouchableOpacity
            className="my-auto"
            onPress={() => { navigation.goBack(); }}
          >
            <MaterialIcons name="close" size={28} color="#6B95BB" />
          </TouchableOpacity>
        }
      />
      <View className="w-full flex flex-row justify-between px-20 py-4 border-t border-[#2A5C81] bg-[#00406E]">
        <TouchableOpacity className="items-center" onPress={() => navigation.navigate(Routes.IDScan)}>
          <MaterialIcons name="qr-code-2" size={40} color="#96B4D1" />
          <Text
            className="text-slate-400 text-xs font-light font-poppins leading-snug"
          >
            QR Code
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => navigation.navigate(Routes.Search)}>
          <MaterialIcons name="search" size={40} color="#96B4D1" />
          <Text
            style={{ fontFamily: "Poppins_300Light" }}
            className="text-slate-400 text-xs font-light font-poppins leading-snug"
            onPress={() => navigation.navigate("Search")}
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>

      <SectionList
        ListHeaderComponent={renderListHeader}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        sections={sections}
      />
    </SafeAreaView>
  );
}

export default AddPeopleScreen;