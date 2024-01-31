import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  SectionList
} from "react-native";
import Modal from "react-native-modal";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HeaderComp from "@Components/Header";
import { Routes } from "@Navigators/routes";
import CardComp from "@Components/Card";
import styles from "./styles";
import PersonCardComp from "@Components/PersonCard";

const sections = [{
  title: "Official Account Recommendations",
  button: "See All",
  data: [{
    avatar: "https://s3-alpha-sig.figma.com/img/acec/55c0/9bc45d0030830152871655d43ca2cd96?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oG52EjKSFZjfakAUWbEtLoFhIUwnMtEx~VsiBbcrTAJSpQdXjCfofy2ShGvQlzddQn8HkK~cSrtE2CqyjVQsquH76kSkBTkxeTwXmNLrrL-YaU4QlgiUuR4MJGeztYmB9leOj2ixSF5lP6pq1Fmv3dY8ifAqDHCsHMl9SK0EjnkPBjXa4aq8kPSGuu9nRY2PaG63QnsnmYDXDzG03BsB9bRCbRo~g~W-nsDsBa-7cGEaWM4laV2raQ6rJoovVusTO~6erxwGynRY5HTL8a-2oj~kfpryWhfvkA6cRkkhXM-08~YXx3AXzC7ow7F3ZDiZ4XgwHZ65hZy5OSdlwPqSxQ__",
    size: 36,
    name: "Anna Marie"
  }, {
    avatar: "https://s3-alpha-sig.figma.com/img/81b7/8a09/fc745ee29bad5fb5945fecee64d72f2f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pZrdn-xHgtd30qe4vdKiFYsRQCCNRsuaWsNunfOGaA0Y9DlgsocyrSLBuXkt~6~4vR0bfweaU14P91SQjE9nKMANF4OWQBlU9py2gbhRWq2y--xSwewVbhGV2S1rPSH5t415acpap6KxDDU03rf0aH8VwSKf3KRMcBRayCTQlYDJFC4y3ydZu5AdY8-EVAMsU~tsZO3Sq~zC074wX5bwbLHVTBGBMw0utr31UVaLJi1FtpG6f0xYij3y99n9LT4GK6UhYXUUMdOVSiccNTbSkW4ng7qbonkMxwpoHA4~3gkVc0kJLhPRd09sGEH0AEUMeeIpClsuXTUMb~SE2bUGRA__",
    size: 36,
    name: "Anna Marie"
  }]
}, {
  title: "Friend Recommendation",
  button: "90+ See all",
  data: [{
    avatar: "https://s3-alpha-sig.figma.com/img/05f5/3e01/83c1ab3c4a7a680b17ca861ce53e0acd?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aB7Gdq-daEeAtjyzR3FHFQRaW6CJXayKZbSItimsv-3pfCtqYNXe5GE84d9h-Iz~B1Mwi6plv484BuemJEPMLhS1Kx7GJoER9taBEC5M6KDpiIN8J7lPP2x2bGHFLEFlua4CytTXVNBTy1errOxsXYpxHUlV22OevBcEvDWgCihS0Eh13DzwlQvgT2AVwvPP5MWOnlggk7DEMeUhFVmKt8lh0AfexthW9qoJGcvmU26OXeO5wwILOlRcMK33e7ai4O~d6Rq4fnotP-wMjIptPsUvDRFfmVKzb80PBs4U9oIuqU4q5s~Qww6hG2OfloMjAnrelvLIU0ox-oHT1Ys9qg__",
    size: 36,
    name: "Anna Marie"
  }, {
    avatar: "https://s3-alpha-sig.figma.com/img/0647/ceb0/e721e552e9fcfa0ccbb0cd8cd3c583fd?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7GiN01kDIy2racHQJjGQ8XSdO7PzKKinfrMHD10NgxHmIjMebIBmg2e6q7ZLYyPv126sT31buu1R4CZ6bRj15TTBF5NPFOJ7SyLkLoAFZBkzSB03opes4J~hetNMSRyhG7jrW-EeKC3v56vXXLAN4awJYJv7hpKjfKPdcPXDYwoOOkRjyMlyz-Xx6nXZaIeDs8gBbDH3H44K1JQQSpGBb9tobco44JiF9P36DVOn07PwnqrVbAQBCliqb4lDOUNVoglQ-RM1fnhbFdNTvzaCsdLZ~ENAPGZ9sKvojQE2Uyl0j7dHr64tVYTpiuJpQYhaKM1YiZO0bEq3rfCVcvlcQ__",
    size: 36,
    name: "Anna Marie"
  }, {
    avatar: "https://s3-alpha-sig.figma.com/img/64ca/ece4/ff76e31cc78d7bb52b46eac26019159a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qcxo4uMPrmY31N0XAHkP70~I2hIdM-j~wJHxVhEyphKcvFVXLVjmJHWzLNPJHHXyMsdmobepy7EgVof0MWdC4U5LOar2CBXHpW9E9elrD55QFSPvMjrH1bOwcl6DRp7SjXEo0zTImabwns6XXcAF0Gqs5cM4nDw834RiE3K6t3E3lIdIJ95lWvxBtYb-UTBQl3OWl9B4Ww0kcDz9o7x9IkA4zEm-iE8jK9QGaNDe1gLbpsurKcG~zknFxOLBzJ6IMv9QkoxU8-lOBavmbf~htYd86seAc8YvAvyvcPuHUZPv8miGZ9gixGjl~4qyDhDFav538u4Z87MQ4kiegnTdWg__",
    size: 36,
    name: "Anna Marie"
  }, {
    avatar: "https://s3-alpha-sig.figma.com/img/3430/cbe8/6e3e53f3edfbd81aa64e4676b27cd096?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7N8XGmbuS3YLwWij4TcWSdkRPnIPsLIcGajWmhNPxXexbsvYXf0Sp2Qx5qUMbKzQzdwWn9aknA7-j0h980bMbCfeFIPpom0sCGLmipk3YcjCiCPiIwMP8KTNmwsPWrXcxEkiPFo9cMGkf~QKY~tO6B8J0LZOBKJpitk-H64kct0C6Q~4HZWlFGA9MqELMg9HpstIA~bZm7hUn900h341sX6RXe2vH20ywuTL0H7duqiKeDxtXZ~CKx-4dZEpZGVWbGnSHRP2HO1FKKKghWvPCTNVUUyzmavwStpJnSURlg5GMRyf4SVaxszi8g~xHLf1y6HRQWPsjkrF2-qyBTHMQ__",
    size: 36,
    name: "Anna Marie"
  }, {
    avatar: "https://s3-alpha-sig.figma.com/img/05f5/3e01/83c1ab3c4a7a680b17ca861ce53e0acd?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aB7Gdq-daEeAtjyzR3FHFQRaW6CJXayKZbSItimsv-3pfCtqYNXe5GE84d9h-Iz~B1Mwi6plv484BuemJEPMLhS1Kx7GJoER9taBEC5M6KDpiIN8J7lPP2x2bGHFLEFlua4CytTXVNBTy1errOxsXYpxHUlV22OevBcEvDWgCihS0Eh13DzwlQvgT2AVwvPP5MWOnlggk7DEMeUhFVmKt8lh0AfexthW9qoJGcvmU26OXeO5wwILOlRcMK33e7ai4O~d6Rq4fnotP-wMjIptPsUvDRFfmVKzb80PBs4U9oIuqU4q5s~Qww6hG2OfloMjAnrelvLIU0ox-oHT1Ys9qg__",
    size: 36,
    name: "Anna Marie"
  }, {
    avatar: "https://s3-alpha-sig.figma.com/img/0647/ceb0/e721e552e9fcfa0ccbb0cd8cd3c583fd?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7GiN01kDIy2racHQJjGQ8XSdO7PzKKinfrMHD10NgxHmIjMebIBmg2e6q7ZLYyPv126sT31buu1R4CZ6bRj15TTBF5NPFOJ7SyLkLoAFZBkzSB03opes4J~hetNMSRyhG7jrW-EeKC3v56vXXLAN4awJYJv7hpKjfKPdcPXDYwoOOkRjyMlyz-Xx6nXZaIeDs8gBbDH3H44K1JQQSpGBb9tobco44JiF9P36DVOn07PwnqrVbAQBCliqb4lDOUNVoglQ-RM1fnhbFdNTvzaCsdLZ~ENAPGZ9sKvojQE2Uyl0j7dHr64tVYTpiuJpQYhaKM1YiZO0bEq3rfCVcvlcQ__",
    size: 36,
    name: "Anna Marie"
  }, {
    avatar: "https://s3-alpha-sig.figma.com/img/64ca/ece4/ff76e31cc78d7bb52b46eac26019159a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qcxo4uMPrmY31N0XAHkP70~I2hIdM-j~wJHxVhEyphKcvFVXLVjmJHWzLNPJHHXyMsdmobepy7EgVof0MWdC4U5LOar2CBXHpW9E9elrD55QFSPvMjrH1bOwcl6DRp7SjXEo0zTImabwns6XXcAF0Gqs5cM4nDw834RiE3K6t3E3lIdIJ95lWvxBtYb-UTBQl3OWl9B4Ww0kcDz9o7x9IkA4zEm-iE8jK9QGaNDe1gLbpsurKcG~zknFxOLBzJ6IMv9QkoxU8-lOBavmbf~htYd86seAc8YvAvyvcPuHUZPv8miGZ9gixGjl~4qyDhDFav538u4Z87MQ4kiegnTdWg__",
    size: 36,
    name: "Anna Marie"
  }, {
    avatar: "https://s3-alpha-sig.figma.com/img/3430/cbe8/6e3e53f3edfbd81aa64e4676b27cd096?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7N8XGmbuS3YLwWij4TcWSdkRPnIPsLIcGajWmhNPxXexbsvYXf0Sp2Qx5qUMbKzQzdwWn9aknA7-j0h980bMbCfeFIPpom0sCGLmipk3YcjCiCPiIwMP8KTNmwsPWrXcxEkiPFo9cMGkf~QKY~tO6B8J0LZOBKJpitk-H64kct0C6Q~4HZWlFGA9MqELMg9HpstIA~bZm7hUn900h341sX6RXe2vH20ywuTL0H7duqiKeDxtXZ~CKx-4dZEpZGVWbGnSHRP2HO1FKKKghWvPCTNVUUyzmavwStpJnSURlg5GMRyf4SVaxszi8g~xHLf1y6HRQWPsjkrF2-qyBTHMQ__",
    size: 36,
    name: "Anna Marie"
  }]
},]

const AddPeopleScreen = ({ navigation, route }: any) => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isRequireModalVisible, setRequireModalVisible] = useState(false);
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  useEffect(() => {
    if (selectedFriend) setRequireModalVisible(true);
    else setRequireModalVisible(false);
  }, [selectedFriend])

  const renderListHeader = () => {
    return (
      <View className="bg-[#F4F4F4] py-[10]">
        <CardComp
          icon={<View><Image width={48} height={48} source={require("@Assets/img/add-user.png")}></Image></View>}
          title={
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#707071", lineHeight: 22 }}>
              Auto-Add Friends
            </Text >
          }
          summary={<Text style={{ fontSize: 12, fontWeight: "300", color: "#707071", lineHeight: 14 }}>Auto-add contacts as friend</Text >}
          rightNode={
            <TouchableOpacity className="bg-primary px-2 py-1 rounded-sm">
              <Text className="text-white text-[12px] font-poppins">Allow</Text>
            </TouchableOpacity>
          } />
        <View className="my-2 mx-3 border-t border-gray-200"></View>
        <CardComp
          onClick={() => navigation.navigate(Routes.CreateGroup)}
          icon={<View><Image width={48} height={48} source={require("@Assets/img/group-gray.png")}></Image></View>}
          title={
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#707071", lineHeight: 22 }}>
              Create Group
            </Text >
          }
          summary={<Text style={{ fontSize: 12, fontWeight: "300", color: "#707071", lineHeight: 14 }}>Create group for you and friends</Text >}
        />
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
      // <View className="pb-3">
      //   <CardComp
      //     icon={<View><Image className="rounded-full" width={item.size} height={item.size} source={{ uri: item.icon }} /></View>}
      //     title={item.title}
      //     summary={item.comment}
      //     rightNode={
      //       <TouchableOpacity
      //         className="my-auto"
      //         onPress={() => {
      //           setSelectedFriend(item.title);
      //         }}
      //       >
      //         <MaterialIcons name="person-add-alt" size={20} color="#6B95BB" />
      //       </TouchableOpacity>
      //     }
      //   />
      // </View>
      <PersonCardComp
        avatar={item.avatar}
        name={item.name}
        rightNode={
          <MaterialIcons name="person-add-alt" size={22} color="#6B95BB" />
        }
        onClick={() => { setSelectedFriend(item.name); }}
      />
    );
  }

  return (
    <SafeAreaView className="w-full h-full bg-white">
      <HeaderComp
        bgColor="#00406E"
        color="white"
        leftIcon="settings"
        title="Home"
        rightIcon="close"
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

      <View style={styles.container}>
        <Modal
          style={styles.centerModal}
          isVisible={isRequireModalVisible}
          onBackdropPress={() => setSelectedFriend(null)}
          useNativeDriver
        >
          <View style={styles.contentModal}>
            <Image
              className="rounded-full my-5"
              width={70}
              height={70}
              source={{ uri: "https://s3-alpha-sig.figma.com/img/05f5/3e01/83c1ab3c4a7a680b17ca861ce53e0acd?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aB7Gdq-daEeAtjyzR3FHFQRaW6CJXayKZbSItimsv-3pfCtqYNXe5GE84d9h-Iz~B1Mwi6plv484BuemJEPMLhS1Kx7GJoER9taBEC5M6KDpiIN8J7lPP2x2bGHFLEFlua4CytTXVNBTy1errOxsXYpxHUlV22OevBcEvDWgCihS0Eh13DzwlQvgT2AVwvPP5MWOnlggk7DEMeUhFVmKt8lh0AfexthW9qoJGcvmU26OXeO5wwILOlRcMK33e7ai4O~d6Rq4fnotP-wMjIptPsUvDRFfmVKzb80PBs4U9oIuqU4q5s~Qww6hG2OfloMjAnrelvLIU0ox-oHT1Ys9qg__" }}
            />
            <Text className="font-poppins text-lg mx-auto text-center mb-4">
              Do you want to add <Text className="font-bold text-primary">{selectedFriend}</Text> your friend list?
            </Text>
            <View className="flex flex-row justify-between w-full">
              <TouchableOpacity className="bg-[#E5E5E5] px-6 rounded-lg" onPress={() => {
                setRequireModalVisible(false);
                setSelectedFriend(null);
              }}>
                <Text className="mx-auto my-2 text-[#212121] text-lg font-bold">Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-primary px-6 rounded-lg" onPress={() => {
                setRequireModalVisible(false);
                setSuccessModalVisible(true);
              }}>
                <Text className="mx-auto my-2 text-[#fff] text-lg font-bold">Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal style={styles.bottomSheet} isVisible={isSuccessModalVisible} useNativeDriver>
          <View style={styles.contentSheet}>
            <HeaderComp
              bgColor="white"
              color="black"
              rightIcon="close"
              onRightPress={() => setSuccessModalVisible(false)}
            />
            <Image
              className="my-6 rounded-full"
              width={87}
              height={87}
              source={{ uri: "https://s3-alpha-sig.figma.com/img/05f5/3e01/83c1ab3c4a7a680b17ca861ce53e0acd?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aB7Gdq-daEeAtjyzR3FHFQRaW6CJXayKZbSItimsv-3pfCtqYNXe5GE84d9h-Iz~B1Mwi6plv484BuemJEPMLhS1Kx7GJoER9taBEC5M6KDpiIN8J7lPP2x2bGHFLEFlua4CytTXVNBTy1errOxsXYpxHUlV22OevBcEvDWgCihS0Eh13DzwlQvgT2AVwvPP5MWOnlggk7DEMeUhFVmKt8lh0AfexthW9qoJGcvmU26OXeO5wwILOlRcMK33e7ai4O~d6Rq4fnotP-wMjIptPsUvDRFfmVKzb80PBs4U9oIuqU4q5s~Qww6hG2OfloMjAnrelvLIU0ox-oHT1Ys9qg__" }}
            />
            <Text className="text-black text-xl font-bold">{selectedFriend}</Text>
            <Text className="text-[#707071] font-bold mb-10">9876543210</Text>
            <Text className="font-bold text-lg mb-10">Successfully added to your friend list</Text>
            <TouchableOpacity className="mx-auto w-2/4 rounded-lg mb-5 bg-primary py-4" onPress={() => navigation.navigate(Routes.ChatStackNav)}>
              <Text className="text-lg text-white mx-auto text-center">Start Chat</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

export default AddPeopleScreen;