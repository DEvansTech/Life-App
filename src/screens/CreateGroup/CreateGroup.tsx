import React, {
  useEffect,
  useState
} from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Button,
  Pressable,
  KeyboardAvoidingView,
  StatusBar,
  Platform
} from "react-native";
import Modal from "react-native-modal";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";
import HeaderComp from "@Components/Header";
import PersonBubble from "@Components/PersonBubble";
import styles from "./styles";
import CustomTextInputComp from "@Components/CustomTextInput";
import CardComp from "@Components/Card";
import { Routes } from "@Navigators/routes";
import TakePhotoComp from "@Components/TakePhoto";
import ParticipantsModalComp from "@Components/ParticipantsModal/ParticipantsModal";
import { SimpleGrid } from "react-native-super-grid";
import SuccessModalComp from "@Components/GroupSuccessModal/GroupSuccessModal";
import useAuth from "@Hooks/useAuth";
import { uploadFileToStorage } from "@Redux/storage";

const allFriends = [{
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  icon: "https://s3-alpha-sig.figma.com/img/df90/fc32/3361c8a197ea1308dc4d27ebdcb945c8?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bqCS8ELF~96hAAor00LQBedTOuBxgQMWjh4IpCqJcFQUk4PRL9uKxWh2m8V7an5iYhU4M1tM0M2wPPMrXqXbdpcmDR7Jh1ktWbVNnpkTXfhW06~de5bV7S3jaWmF5b6pGrC7Mr4xUf2eHePwSV6oK9mCIJuYmdjgB-Cpi9r9Hx0LML2CnoMG3EhPqh-shjrvJwwlZiJ-vdOs7HbzuZXcAUo1UFCVC1K9XcO9nE3fJUJxa~UamT7bzaog342GylVixPtBqotXdzJ01ipkaUYOCXTd53cfTaemDKF73G6-q6x5-FzjV5ErfkxxTGae0shtcdV~xsHQMyBR~WWmW0gvlA__",
  name: "James",
  phone: "9876543210"
}, {
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  icon: "https://s3-alpha-sig.figma.com/img/6928/abcb/2b21d90d7a9d9333c64ba3e9dd28b2e1?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RWdPie7BBYIn7YDJ8ITo6rdv1XHsk4b3UdSLrNuMjS547Wqo0u1NZneBMs7sQl8x~MUoI6RU6YvQF2sXFbBkjunlHWln3vXD3~0VupmK~Vybiy~IhKpbv4cZ~~KyiXeXYoFZ74TtS3C8-UnhuvmRyyGA0NGMaJSis6qZQhihP-OpAb2CkqPmC~XBb3fbQ5V5zuyAuZcPLB-jDlE4tuVb5cboPZKccFa7dgco4rJzmbBe3QrVn-m6o88oBolMctON~T7YqgMWTacxuxKCOZyaf19VsHMMr1BEitkioy~cygM6cgfRcQM63B6ygm5niL7vd6fcu37iDn8Xpp4bPLQokA__",
  name: "Shane",
  phone: "9876543210"
}, {
  id: '58694a0f-3da1-471f-bd96-145571e29d71',
  icon: "https://s3-alpha-sig.figma.com/img/f2f7/f5e9/da9ee32598bc638f875ff10658951678?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ON-05rDW4E9cV28w~iBC9yo3XpgZCF~ohe11uzM7717Z5dlqZkx6iiAcakGBwkpf4zZLrbuhsjLI~ruTgnEXYvaSqAckCeNjSfvzK7FYXgUiX7s9y72Eb15UMwwfc6g3I9~x9hvN3388Oy3kmHtJo-ZcuxOE8E7Ezb3SMIqtQaDYoq9jyK8yzksf6f0Oyy-9Mhdc7UEUZUnNMSchAMZLEHFhEeY6~xEWxuwqWWY67te13x5~hgikMC2FAEP6AuSXfGbM3xYThHrBwysgrTmArhfXVSeXH~Y9pXcera1yG~hWQ216CRNUvIhE5TgpvShiK2CAvnPnAYlBwwsUgIwG9A__",
  name: "Charles",
  phone: "9876543210"
}, {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
  icon: "https://s3-alpha-sig.figma.com/img/df90/fc32/3361c8a197ea1308dc4d27ebdcb945c8?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bqCS8ELF~96hAAor00LQBedTOuBxgQMWjh4IpCqJcFQUk4PRL9uKxWh2m8V7an5iYhU4M1tM0M2wPPMrXqXbdpcmDR7Jh1ktWbVNnpkTXfhW06~de5bV7S3jaWmF5b6pGrC7Mr4xUf2eHePwSV6oK9mCIJuYmdjgB-Cpi9r9Hx0LML2CnoMG3EhPqh-shjrvJwwlZiJ-vdOs7HbzuZXcAUo1UFCVC1K9XcO9nE3fJUJxa~UamT7bzaog342GylVixPtBqotXdzJ01ipkaUYOCXTd53cfTaemDKF73G6-q6x5-FzjV5ErfkxxTGae0shtcdV~xsHQMyBR~WWmW0gvlA__",
  name: "James",
  phone: "9876543210"
}, {
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
  icon: "https://s3-alpha-sig.figma.com/img/6928/abcb/2b21d90d7a9d9333c64ba3e9dd28b2e1?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RWdPie7BBYIn7YDJ8ITo6rdv1XHsk4b3UdSLrNuMjS547Wqo0u1NZneBMs7sQl8x~MUoI6RU6YvQF2sXFbBkjunlHWln3vXD3~0VupmK~Vybiy~IhKpbv4cZ~~KyiXeXYoFZ74TtS3C8-UnhuvmRyyGA0NGMaJSis6qZQhihP-OpAb2CkqPmC~XBb3fbQ5V5zuyAuZcPLB-jDlE4tuVb5cboPZKccFa7dgco4rJzmbBe3QrVn-m6o88oBolMctON~T7YqgMWTacxuxKCOZyaf19VsHMMr1BEitkioy~cygM6cgfRcQM63B6ygm5niL7vd6fcu37iDn8Xpp4bPLQokA__",
  name: "Shane",
  phone: "9876543210"
}, {
  id: '58694a0f-3da1-471f-bd96-145571e29d73',
  icon: "https://s3-alpha-sig.figma.com/img/f2f7/f5e9/da9ee32598bc638f875ff10658951678?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ON-05rDW4E9cV28w~iBC9yo3XpgZCF~ohe11uzM7717Z5dlqZkx6iiAcakGBwkpf4zZLrbuhsjLI~ruTgnEXYvaSqAckCeNjSfvzK7FYXgUiX7s9y72Eb15UMwwfc6g3I9~x9hvN3388Oy3kmHtJo-ZcuxOE8E7Ezb3SMIqtQaDYoq9jyK8yzksf6f0Oyy-9Mhdc7UEUZUnNMSchAMZLEHFhEeY6~xEWxuwqWWY67te13x5~hgikMC2FAEP6AuSXfGbM3xYThHrBwysgrTmArhfXVSeXH~Y9pXcera1yG~hWQ216CRNUvIhE5TgpvShiK2CAvnPnAYlBwwsUgIwG9A__",
  name: "Charles",
  phone: "9876543210"
}, {
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
  icon: "https://s3-alpha-sig.figma.com/img/6928/abcb/2b21d90d7a9d9333c64ba3e9dd28b2e1?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RWdPie7BBYIn7YDJ8ITo6rdv1XHsk4b3UdSLrNuMjS547Wqo0u1NZneBMs7sQl8x~MUoI6RU6YvQF2sXFbBkjunlHWln3vXD3~0VupmK~Vybiy~IhKpbv4cZ~~KyiXeXYoFZ74TtS3C8-UnhuvmRyyGA0NGMaJSis6qZQhihP-OpAb2CkqPmC~XBb3fbQ5V5zuyAuZcPLB-jDlE4tuVb5cboPZKccFa7dgco4rJzmbBe3QrVn-m6o88oBolMctON~T7YqgMWTacxuxKCOZyaf19VsHMMr1BEitkioy~cygM6cgfRcQM63B6ygm5niL7vd6fcu37iDn8Xpp4bPLQokA__",
  name: "Shane",
  phone: "9876543210"
}, {
  id: '58694a0f-3da1-471f-bd96-145571e29d74',
  icon: "https://s3-alpha-sig.figma.com/img/f2f7/f5e9/da9ee32598bc638f875ff10658951678?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ON-05rDW4E9cV28w~iBC9yo3XpgZCF~ohe11uzM7717Z5dlqZkx6iiAcakGBwkpf4zZLrbuhsjLI~ruTgnEXYvaSqAckCeNjSfvzK7FYXgUiX7s9y72Eb15UMwwfc6g3I9~x9hvN3388Oy3kmHtJo-ZcuxOE8E7Ezb3SMIqtQaDYoq9jyK8yzksf6f0Oyy-9Mhdc7UEUZUnNMSchAMZLEHFhEeY6~xEWxuwqWWY67te13x5~hgikMC2FAEP6AuSXfGbM3xYThHrBwysgrTmArhfXVSeXH~Y9pXcera1yG~hWQ216CRNUvIhE5TgpvShiK2CAvnPnAYlBwwsUgIwG9A__",
  name: "Charles",
  phone: "9876543210"
}, {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
  icon: "https://s3-alpha-sig.figma.com/img/df90/fc32/3361c8a197ea1308dc4d27ebdcb945c8?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bqCS8ELF~96hAAor00LQBedTOuBxgQMWjh4IpCqJcFQUk4PRL9uKxWh2m8V7an5iYhU4M1tM0M2wPPMrXqXbdpcmDR7Jh1ktWbVNnpkTXfhW06~de5bV7S3jaWmF5b6pGrC7Mr4xUf2eHePwSV6oK9mCIJuYmdjgB-Cpi9r9Hx0LML2CnoMG3EhPqh-shjrvJwwlZiJ-vdOs7HbzuZXcAUo1UFCVC1K9XcO9nE3fJUJxa~UamT7bzaog342GylVixPtBqotXdzJ01ipkaUYOCXTd53cfTaemDKF73G6-q6x5-FzjV5ErfkxxTGae0shtcdV~xsHQMyBR~WWmW0gvlA__",
  name: "James",
  phone: "9876543210"
}, {
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f66',
  icon: "https://s3-alpha-sig.figma.com/img/6928/abcb/2b21d90d7a9d9333c64ba3e9dd28b2e1?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RWdPie7BBYIn7YDJ8ITo6rdv1XHsk4b3UdSLrNuMjS547Wqo0u1NZneBMs7sQl8x~MUoI6RU6YvQF2sXFbBkjunlHWln3vXD3~0VupmK~Vybiy~IhKpbv4cZ~~KyiXeXYoFZ74TtS3C8-UnhuvmRyyGA0NGMaJSis6qZQhihP-OpAb2CkqPmC~XBb3fbQ5V5zuyAuZcPLB-jDlE4tuVb5cboPZKccFa7dgco4rJzmbBe3QrVn-m6o88oBolMctON~T7YqgMWTacxuxKCOZyaf19VsHMMr1BEitkioy~cygM6cgfRcQM63B6ygm5niL7vd6fcu37iDn8Xpp4bPLQokA__",
  name: "Shane",
  phone: "9876543210"
}, {
  id: '58694a0f-3da1-471f-bd96-145571e29d76',
  icon: "https://s3-alpha-sig.figma.com/img/f2f7/f5e9/da9ee32598bc638f875ff10658951678?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ON-05rDW4E9cV28w~iBC9yo3XpgZCF~ohe11uzM7717Z5dlqZkx6iiAcakGBwkpf4zZLrbuhsjLI~ruTgnEXYvaSqAckCeNjSfvzK7FYXgUiX7s9y72Eb15UMwwfc6g3I9~x9hvN3388Oy3kmHtJo-ZcuxOE8E7Ezb3SMIqtQaDYoq9jyK8yzksf6f0Oyy-9Mhdc7UEUZUnNMSchAMZLEHFhEeY6~xEWxuwqWWY67te13x5~hgikMC2FAEP6AuSXfGbM3xYThHrBwysgrTmArhfXVSeXH~Y9pXcera1yG~hWQ216CRNUvIhE5TgpvShiK2CAvnPnAYlBwwsUgIwG9A__",
  name: "Charles",
  phone: "9876543210"
}, {
  id: ""
}]

const CreateGroupScreen = ({ navigation, route }: any) => {
  const { register, authData } = useAuth();
  const [avatar, setAvatar] = useState(authData?.avatar || "");
  const [groupName, setGroupName] = useState<string>('');
  const [isParticipantsModalVisible, setParticipantsModalVisible] = useState<boolean>(false);
  const [isSuccessModalVisible, setSuccessModalVisible] = useState<boolean>(false);

  const [members, setMembers] = useState<any[]>([]);
  const [participants, setParticipants] = useState<string[]>([]);

  const [expanded, setExpanded] = useState(true);

  const handleUploadAvatar = async (uri: string) => {
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    const storedUrl = await uploadFileToStorage(filename, uploadUri, 'user');
    setAvatar(storedUrl);
  }

  const renderItem = ({ item }: any) => {
    return (
      item.id.length
        ? <PersonBubble avatar={item.icon} name={item.name} />
        : (
          <TouchableOpacity className={`flex ${members.length > 0 ? "pl-[25px]" : ""} flex-col items-center`} onPress={() => setParticipantsModalVisible(true)}>
            <Octicons name="plus-circle" size={48} color="#96B4D1" />
            <Text className="text-[#96B4D1] font-Poppins_400 pt-1.5 text-xs leading-none">
              Add
            </Text>
          </TouchableOpacity>
        )
    );
  }

  return (
    <SafeAreaView className="w-full h-full bg-white">
      <StatusBar
        animated={true}
        backgroundColor="#00406E"
      />
      <HeaderComp bgColor="#00406E" color="#F7F7F7" title="Create Group Profile" rightIcon="close" onRightPress={() => navigation.goBack()} />
      <View className="px-4 py-6 flex flex-row">
        <TakePhotoComp />
        <View className="ml-3 flex-1">
          <View className="flex flex-row justify-between mb-3">
            <Text style={{ fontSize: 12, fontWeight: "500", lineHeight: 14, color: "#C9C9C9" }}>Group Name</Text>
            <TouchableOpacity onPress={() => setSuccessModalVisible(true)}><Text style={{ fontSize: 12, fontWeight: "500", lineHeight: 14, color: "#2A5C81" }}>Save</Text></TouchableOpacity>
          </View>
          <TextInput style={{ paddingHorizontal: 14, paddingVertical: 9, backgroundColor: "#F4F4F4" }} className="rounded-md" placeholder="EG: fish" placeholderTextColor="#707071" />
        </View>
      </View>
      <TouchableOpacity className="px-4 py-2 flex flex-row justify-between items-center border-t border-b border-[#E5E5E5]">
        <Text style={{ fontSize: 14, fontWeight: "500", lineHeight: 22 }}>Members</Text>
        <Ionicons name="chevron-up" size={15} color="#AAAAAA" />
      </TouchableOpacity>

      <SimpleGrid
        itemDimension={50}
        data={allFriends}
        renderItem={renderItem}
      />

      <View style={styles.modalsContainer}>
        <ParticipantsModalComp data={allFriends} visible={isParticipantsModalVisible} setVisible={setParticipantsModalVisible} />
        <SuccessModalComp visible={isSuccessModalVisible} setVisible={setSuccessModalVisible} onOK={() => navigation.navigate(Routes.Home)} />
      </View>
      {/* <View className="w-full px-4 py-6">
        <View className="flex flex-row gap-x-4 ">
          <TouchableOpacity className="h-[74px] w-[74px] bg-[#F4F4F4] items-center justify-center rounded-full">
            <FontAwesome name={"camera"} color={"#2A5C81"} size={37} />
          </TouchableOpacity>

          <View className="flex flex-col flex-grow">
            <View className="flex flex-row justify-between mb-3">
              <Text className="font-poppins text-[#C9C9C9] text-xs">
                Group Name
              </Text>
              <TouchableOpacity onPress={handleSave} className="my-auto">
                <Text className="font-poppins text-primary text-xs">
                  Save
                </Text>
              </TouchableOpacity >
            </View>
            <View className="flex rounded pl-3.5 bg-[#F4F4F4]">
              <TextInput
                style={{ fontSize: 14, fontFamily: "poppins", lineHeight: 22, paddingVertical: 6 }}
                placeholder="EG: fish"
                placeholderTextColor="#707071"
                value={groupName}
                onChangeText={setGroupName}
              />
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        className="flex flex-row justify-between items-center py-3 px-4 board border-y border-[#E5E5E5]"
        onPress={handleToggle}>
        <Text className=" font-poppins leading-[22px]">Members</Text>
        <FontAwesome name={expanded ? "chevron-up" : "chevron-down"} color={"#AAAAAA"} size={14} />
      </TouchableOpacity>
      {expanded && <View className="px-4 py-6 w-full">
        <FlatList
          ItemSeparatorComponent={() => <View className="w-[25px]" />}
          horizontal
          data={members}
          renderItem={({ item }: any) => <PersonBubble avatar={item.icon} name={item.name} />}
          keyExtractor={(item: any) => item.id}
          ListFooterComponent={() => {
            return (
              <TouchableOpacity
                className={`flex ${members.length > 0 ? "pl-[25px]" : ""
                  } flex-col items-center`}
                onPress={() => setParticipantsModalVisible(true)}
              >
                <Octicons name="plus-circle" size={48} color="#96B4D1" />
                <Text className="text-[#96B4D1] font-Poppins_400 pt-1.5 text-xs leading-none">
                  Add
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>}
      <View style={styles.container}>
        <Modal
          style={styles.bottomSheet}
          isVisible={isParticipantsModalVisible}
          onBackdropPress={handleClose}
          swipeDirection="down"
          animationIn="slideInUp"
          useNativeDriver
        >
          <SafeAreaView style={styles.contentSheet}>
            <View className="mt-4 px-3 mb-2">
              <HeaderComp
                bgColor="white"
                leftNode={<TouchableOpacity onPress={() => handleClose(true)}><Feather name="check" size={28} color="#2A5C81" /></TouchableOpacity>}
                centerNode={<Text className="text-primary font-bold text-lg">Add Participants</Text>}
                rightNode={<TouchableOpacity onPress={() => handleClose(false)}><Ionicons name="close" size={28} color="#2A5C81" /></TouchableOpacity>}
              />
            </View>

            <View className="px-4 pb-4 bg-white w-full">
              <CustomTextInputComp
                bgColor="#F2F2F2"
                leftNode={<MaterialIcons name="search" color="#999" size={28} />}
                centerNode={
                  <TextInput
                    className="text-base w-full text-black"
                    placeholder="Search friends"
                    placeholderTextColor="#999"
                    cursorColor="black"
                  />
                }
                placeholder="Search"
              />
            </View>
            <FlatList
              className="w-full"
              data={allFriends}
              renderItem={renderItem}
              ListHeaderComponent={<Text className="font-bold font-poppins px-4 mb-4">Existing Friends</Text>}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => <View className="pb-4"></View>}
              ListFooterComponent={() => <View className="pb-4"></View>}
            />
            {participants.length > 0 && (<FlatList
              className="bg-gray-50 w-full"
              contentContainerStyle={{
                padding: 20,
                height: 200,
                backgroundColor: "#f9f9f9"
              }}
              ItemSeparatorComponent={() => <View className="w-[25px]" />}
              horizontal
              data={participants}
              renderItem={(participant: any) => {
                const index = allFriends.findIndex((item) => item.id === participant.item);
                console.log(index);
                return (index > -1
                  ? <View><PersonBubble avatar={allFriends[index].icon} name={allFriends[index].name} /></View>
                  : null);
              }}
            />)}
          </SafeAreaView>
        </Modal>
        <Modal
          isVisible={isSuccessModalVisible}
          style={styles.centerModal}
          onBackdropPress={() => setSuccessModalVisible(false)}
          useNativeDriver
        >
          <View style={styles.contentModal}>
            <Image
              className="rounded-full mx-auto my-6"
              width={70} height={70}
              source={{ uri: "https://s3-alpha-sig.figma.com/img/2231/0b72/d7312466aa2182a44495c5eb5a621bcd?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NrWtarSwfSidNdtvI9cFOO-Sx2qPwHvA0Xxyn-2pc7FfiDyvhGhve7fYVr7XbknVEl8Q3TptLJfDXrP2nF5ishGQsWwXdWCcS4wZ~kU4eBdn~5XYw0RhKyykIXLomE~~zAy-1D56I5bAAy2EVOXMuaav1ReKK2H9zYLBj3MBsa34kYmLOQfzVoPnopRvu7YcpH1D7vP5dPhvbOalXtltJdZGbXwyLnVhU1IWuhhSKDkdKZNF7vD~4sOTF58RHo93D2-xRQ-SjGQvTVzxVX8-Fao9jxjPEl-vLB9bUCvnyBbgMUMc7BH0XcN0YaL6sbMh6QNrp0acyIy-IpPbXwRdPg__" }} />
            <Text className="mb-4 font-poppins font-bold text-center text-lg text-[#333]">Group {groupName} has been successfully created</Text>
            <TouchableOpacity
              className="w-full py-4 border-t border-gray-200"
              onPress={() => navigation.navigate(Routes.Home)}
            >
              <Text className="mx-auto text-primary text-lg font-bold">OKAY</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View> */}
    </SafeAreaView>
  );
}

export default CreateGroupScreen;