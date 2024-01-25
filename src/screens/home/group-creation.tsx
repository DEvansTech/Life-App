import React, { useState } from "react";
import { Text, View, TextInput, FlatList, TouchableOpacity } from "react-native";
import { HomeStackParams } from "../../navigation/home-stack";
import { StackScreenProps } from "@react-navigation/stack";
import { BasicHeader } from "../../components/basic-header";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { PersonBubble } from "../../components/cards/person-bubble";
import { Octicons } from "@expo/vector-icons";
import { GroupAssigneModal } from "../../components/modals/home/group-assign";

type GroupCreationProps = StackScreenProps<HomeStackParams, "GroupCreation">;

const members = [{
  avatar: "https://s3-alpha-sig.figma.com/img/df90/fc32/3361c8a197ea1308dc4d27ebdcb945c8?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bqCS8ELF~96hAAor00LQBedTOuBxgQMWjh4IpCqJcFQUk4PRL9uKxWh2m8V7an5iYhU4M1tM0M2wPPMrXqXbdpcmDR7Jh1ktWbVNnpkTXfhW06~de5bV7S3jaWmF5b6pGrC7Mr4xUf2eHePwSV6oK9mCIJuYmdjgB-Cpi9r9Hx0LML2CnoMG3EhPqh-shjrvJwwlZiJ-vdOs7HbzuZXcAUo1UFCVC1K9XcO9nE3fJUJxa~UamT7bzaog342GylVixPtBqotXdzJ01ipkaUYOCXTd53cfTaemDKF73G6-q6x5-FzjV5ErfkxxTGae0shtcdV~xsHQMyBR~WWmW0gvlA__",
  name: "James"
}, {
  avatar: "https://s3-alpha-sig.figma.com/img/6928/abcb/2b21d90d7a9d9333c64ba3e9dd28b2e1?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RWdPie7BBYIn7YDJ8ITo6rdv1XHsk4b3UdSLrNuMjS547Wqo0u1NZneBMs7sQl8x~MUoI6RU6YvQF2sXFbBkjunlHWln3vXD3~0VupmK~Vybiy~IhKpbv4cZ~~KyiXeXYoFZ74TtS3C8-UnhuvmRyyGA0NGMaJSis6qZQhihP-OpAb2CkqPmC~XBb3fbQ5V5zuyAuZcPLB-jDlE4tuVb5cboPZKccFa7dgco4rJzmbBe3QrVn-m6o88oBolMctON~T7YqgMWTacxuxKCOZyaf19VsHMMr1BEitkioy~cygM6cgfRcQM63B6ygm5niL7vd6fcu37iDn8Xpp4bPLQokA__",
  name: "Shane"
}, {
  avatar: "https://s3-alpha-sig.figma.com/img/f2f7/f5e9/da9ee32598bc638f875ff10658951678?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ON-05rDW4E9cV28w~iBC9yo3XpgZCF~ohe11uzM7717Z5dlqZkx6iiAcakGBwkpf4zZLrbuhsjLI~ruTgnEXYvaSqAckCeNjSfvzK7FYXgUiX7s9y72Eb15UMwwfc6g3I9~x9hvN3388Oy3kmHtJo-ZcuxOE8E7Ezb3SMIqtQaDYoq9jyK8yzksf6f0Oyy-9Mhdc7UEUZUnNMSchAMZLEHFhEeY6~xEWxuwqWWY67te13x5~hgikMC2FAEP6AuSXfGbM3xYThHrBwysgrTmArhfXVSeXH~Y9pXcera1yG~hWQ216CRNUvIhE5TgpvShiK2CAvnPnAYlBwwsUgIwG9A__",
  name: "Charles"
}];

export const GroupCreation: React.FC<GroupCreationProps> = ({ navigation }) => {
  // const tempMmebers = [{ name: "James" }, { name: "James" }, { name: "James" }];

  // const [memebers, setMembers] = useState(tempMmebers);

  const [isGroupAssignModalVisible, setIsGroupAssignModalVisible] = useState<boolean>(false);

  const [expanded, setExpanded] = useState(true);
  const handleToggle = () => {
    setExpanded(expanded => { return !expanded; });
  }

  return (
    <View className="bg-white w-full h-full">
      <BasicHeader
        name="Create Group Profile"
        hasClose
        backHandler={() => navigation.goBack()}
      />

      <View className="w-full px-4 py-6">
        <View className="flex flex-row gap-x-4 ">
          <View className="h-[74px] w-[74px] bg-[#F4F4F4] items-center justify-center rounded-full">
            <FontAwesome name={"camera"} color={"#2A5C81"} size={37} />
          </View>

          <View className="flex flex-col flex-grow">
            <View className="flex flex-row items-center justify-between">
              <View>
                <Text className="font-Poppins_500 text-[#C9C9C9] text-xs -mt-1.5 mb-3">
                  Group Name
                </Text>
              </View>
              <View>
                <Text className="font-Poppins_500 text-primary-color text-xs -mt-2.5">
                  Save
                </Text>
              </View>
            </View>
            <View className="flex py-[8] rounded pl-3.5 bg-[#F4F4F4]">
              <TextInput
                style={{ fontSize: 14, fontFamily: "Poppins_400Regular", lineHeight: 22 }}
                placeholder="EG: fish"
                placeholderTextColor="#707071"
              />
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        className="flex flex-row justify-between items-center py-3 px-4 board border-y border-[#E5E5E5]"
        onPress={handleToggle}>
        <Text className=" font-Poppins_500 leading-[22px]">Members</Text>
        <FontAwesome name={expanded ? "chevron-up" : "chevron-down"} color={"#AAAAAA"} size={14} />
      </TouchableOpacity>
      {expanded && <View className="px-4 py-6">
        <FlatList
          ItemSeparatorComponent={() => <View className="w-[25px]" />}
          horizontal
          data={members}
          renderItem={({ item }) => <PersonBubble avatar={item.avatar} name={item.name} />}
          keyExtractor={(item) => item.name}
          ListFooterComponent={() => {
            return (
              <TouchableOpacity
                className={`flex ${members.length > 0 ? "pl-[25px]" : ""
                  } flex-col items-center`}
                onPress={() => setIsGroupAssignModalVisible(true)}
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
      <GroupAssigneModal 
        isVisible={isGroupAssignModalVisible} 
        setVisible={() => setIsGroupAssignModalVisible(true)}
      />
    </View>
  );
};
