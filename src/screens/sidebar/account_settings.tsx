import React, { useMemo } from "react";
import { SafeAreaView, ScrollView, View, Text, Button } from "react-native";
import { BasicHeader } from "../../components/basic-header";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import cn from "classnames";

interface AccountSettingsProps {
  navigation: any;
}

const AccountSettingsView: React.FC<AccountSettingsProps> = ({
  navigation,
}) => {
  const items = useMemo(
    () => [
      {
        id: "name",
        title: "Name",
        value: "Johnathan Doe",
        onPress: () => {
          navigation.push("account_settings");
        },
      },
      {
        id: "username",
        title: "Username",
        value: "johnathan_doe",
        onPress: () => {
          navigation.push("account_settings");
        },
      },
      {
        id: "password",
        title: "Password",
        value: "Update now",
        descColor: "#2A5C81",
        onPress: () => {
          navigation.push("account_settings");
        },
      },
      {
        id: "phoneNumber",
        title: "Phone Number",
        value: "+81-8765434567",
        onPress: () => {
          navigation.push("account_settings");
        },
      },
      {
        id: "email",
        title: "Email Address",
        value: "johnathan_doe@gmail...",
        onPress: () => {
          navigation.push("account_settings");
        },
      },
      {
        id: "delete",
        title: "Delete Account",
        titleColor: "#ED1F24",
        value: "",
        onPress: () => {
          navigation.push("account_settings");
        },
      },
    ],
    []
  );

  return (
    <View className="h-full">
      <BasicHeader
        name="Account Settings"
        hasBack={true}
        backHandler={() => navigation.goBack()}
      />
      <SafeAreaView>
        <ScrollView>
          <View className="p-10 flex-column items-center justify-center bg-[#F4F4F4]">
            <View className="w-[125px] h-[125px] bg-zinc-400 rounded-full relative">
              <View className="left-[90px] top-[90px] absolute">
                <View className="w-[26px] h-[26px] flex flex justify-center items-center bg-sky-900 rounded-full border-2 border-white">
                  <Text className="z-5">
                    <FontAwesome name={"camera"} color={"#fff"} size={12} />
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="bg-white pl-6 pt-2">
            {items.map((item) => (
              <View
                key={item.id}
                className="flex-row py-2.5 border-b border-b-[#C9C9C9]"
              >
                <Text
                  className={cn(
                    "text-sm font-normal mr-auto font-Poppins_400",
                    {
                      ["text-[" + item.titleColor + "]"]: item.titleColor,
                      "text-black": !item.titleColor,
                    }
                  )}
                >
                  {item.title}
                </Text>

                <Text
                  className={cn("text-sm font-normal mr-4 font-Poppins_400", {
                    ["text-[" + item.descColor + "]"]: item.descColor,
                    "text-[#58575D]": !item.descColor,
                  })}
                >
                  {item.value}
                </Text>
                <Text className="mr-4">
                  <Ionicons name="chevron-forward" size={20} color="#AAA" />
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AccountSettingsView;
