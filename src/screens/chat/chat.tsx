import React, { useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { MessageStackParams } from "../../navigation/message-stack";
import { BasicHeader } from "../../components/basic-header";
import { SvgXml } from "react-native-svg";
import CustomTextInput from "../../components/text-input";
import { MaterialIcons } from "@expo/vector-icons";

type HomeScreenProps = StackScreenProps<MessageStackParams, "Chat">;

export const ChatScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const contacts = useMemo(
    () => [
      {
        id: 1,
        name: "Anna Marie",
        latestMsg: "This is a paragraph with more information",
        time: "9:00 AM",
        avatar: "anna_marie.png",
      },
      {
        id: 2,
        name: "Kawasaki Fumi",
        latestMsg: "This is a paragraph with more information",
        time: "9:00 AM",
        avatar: "kawasaki_fumi.png",
      },
      {
        id: 3,
        name: "Robin Shao",
        latestMsg: "This is a paragraph with more information.",
        time: "9:00 AM",
        avatar: "robin_shao.png",
      },
      {
        id: 4,
        name: "Seth Yates",
        latestMsg: "This is a paragraph with more information",
        time: "9:00 AM",
        avatar: "seth_yates.png",
      },
      {
        id: 5,
        name: "Brandon Walls",
        latestMsg: "This is a paragraph with more information",
        time: "9:00 AM",
        avatar: "brandon_walls.png",
      },
    ],
    []
  );

  const onContactClick = (contact: any) => {
    navigation.push("Chat-Details");
  };

  return (
    <View className="h-full bg-white">
      <BasicHeader
        name="Chat"
        leftIcon={
          <TouchableOpacity>
            <Text className="text-[#96B4D1]">Edit</Text>
          </TouchableOpacity>
        }
        rightIcon={
          <TouchableOpacity>
            <SvgXml
              xml={`
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1452 0.0151036C18.2685 -0.095159 19.3832 0.397929 20.4919 1.50657C21.6005 2.61521 22.0936 3.72995 21.9833 4.85325C21.8769 5.93721 21.2231 6.8363 20.4919 7.56753L19.3666 8.69282C19.355 8.70516 19.3431 8.71709 19.3308 8.72858L12.5157 15.5437L12.507 15.5524L12.5069 15.5523C12.2798 15.7721 11.9828 15.9644 11.6959 16.1086C11.4106 16.252 11.0749 16.3783 10.7553 16.4239L7.70855 16.8592L7.70473 16.8597C6.95599 16.9627 6.24029 16.7583 5.73838 16.2584C5.2354 15.7575 5.02934 15.0415 5.13946 14.2885L5.13968 14.287L5.57418 11.2456L5.57437 11.2442C5.61978 10.9203 5.7454 10.5823 5.88979 10.295C6.0345 10.0071 6.22919 9.70828 6.45471 9.48276L14.4309 1.50657C15.1621 0.775337 16.0612 0.121504 17.1452 0.0151036ZM18.6098 7.32828L19.4312 6.50687C20.0766 5.8615 20.435 5.27265 20.4905 4.70671C20.5422 4.18011 20.347 3.483 19.4312 2.56723C18.5154 1.65145 17.8183 1.45624 17.2917 1.50793C16.7258 1.56348 16.1369 1.92186 15.4916 2.56723L14.6704 3.38844C14.9922 4.29514 15.5125 5.12063 16.1954 5.80349C16.8781 6.48621 17.7033 7.00645 18.6098 7.32828ZM13.5197 4.53912C13.9138 5.4012 14.4598 6.18925 15.1347 6.86415C15.8095 7.53891 16.5973 8.0848 17.4592 8.47892L11.4601 14.4779C11.3727 14.5614 11.2159 14.6711 11.0222 14.7684C10.8242 14.868 10.6487 14.9239 10.5432 14.939L7.50024 15.3737L7.49845 15.374C7.14491 15.4221 6.91981 15.318 6.79689 15.1956C6.67517 15.0744 6.57244 14.8546 6.62378 14.5049L6.62419 14.502L7.05944 11.4553L7.05978 11.4529C7.07527 11.3419 7.1317 11.1642 7.23003 10.9686C7.32825 10.7732 7.43722 10.6216 7.51537 10.5434L13.5197 4.53912ZM1.86451 2.11925C3.21271 0.771047 5.23096 0.254743 7.83545 0.254743H9.85987C10.2741 0.254743 10.6099 0.590529 10.6099 1.00474C10.6099 1.41896 10.2741 1.75474 9.85987 1.75474H7.83545C5.3789 1.75474 3.85443 2.25065 2.92517 3.17991C1.9959 4.10917 1.5 5.63365 1.5 8.09019V14.1634C1.5 16.62 1.9959 18.1445 2.92517 19.0737C3.85443 20.003 5.3789 20.4989 7.83545 20.4989H13.9087C16.3652 20.4989 17.8897 20.003 18.819 19.0737C19.7482 18.1445 20.2441 16.62 20.2441 14.1634V12.139C20.2441 11.7248 20.5799 11.389 20.9941 11.389C21.4084 11.389 21.7441 11.7248 21.7441 12.139V14.1634C21.7441 16.7679 21.2278 18.7862 19.8796 20.1344C18.5314 21.4826 16.5132 21.9989 13.9087 21.9989H7.83545C5.23096 21.9989 3.21271 21.4826 1.86451 20.1344C0.516305 18.7862 0 16.7679 0 14.1634V8.09019C0 5.4857 0.516305 3.46745 1.86451 2.11925Z" fill="#96B4D1"/>
            </svg>
            `}
            />
          </TouchableOpacity>
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
      <SafeAreaView>
        <ScrollView className="py-[11px] px-2.5">
          {contacts.map((contact) => (
            <TouchableOpacity
              onPress={() => onContactClick(contact)}
              key={contact.id}
            >
              <View className="flex-row mb-6 w-full">
                <View className="flex-row items-center grow w-4">
                  <Image
                    source={require(`../../../assets/images/brandon_walls.png`)}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <View className="flex-column grow">
                    <Text className="text-sm font-Poppins_600 text-[#58575D]">
                      {contact.name}
                    </Text>
                    <Text className="text-xs font-Poppins_400 text-[#707071] text-ellipsis">
                      {contact.latestMsg}
                    </Text>
                  </View>
                </View>
                <Text className="ml-1.5 text-[10px] text-[#C9C9C9] font-Poppins_600">
                  {contact.time}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
