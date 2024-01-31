import React, {
  useEffect,
  useState
} from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Platform
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import HeaderComp from "@Components/Header";
import PersonBubble from "@Components/PersonBubble";
import styles from "./styles";
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
    </SafeAreaView>
  );
}

export default CreateGroupScreen;