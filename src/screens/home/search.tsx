import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { HomeStackParams } from "../../navigation/home-stack";
import { StackScreenProps } from "@react-navigation/stack";
import { BasicHeader } from "../../components/basic-header";
import { DefaultSearchComp } from "../../components/default-search";
import { AntDesign } from "@expo/vector-icons";
import { PersonCard } from "../../components/cards";
import { MaterialIcons } from "@expo/vector-icons";

type SearchScreenProps = StackScreenProps<HomeStackParams, "Search">;

export const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [inputType, setInputType] = useState<"username" | "number">("username");

  const tempResults = [
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
    { name: "James", number: 9876543210 },
  ];

  const [results, setResults] = useState(tempResults);
  //   will remove this once we add functionality
  const [inputState, setInputState] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="h-full w-fill bg-white">
        <BasicHeader
          backHandler={() => navigation.goBack()}
          hasBack
          containerParams="border-b border-[#C9C9C9]"
          backgroundColor="bg-white"
          textColor="text-[#58575D]"
          name="Search Friends"
          iconColor="#58575D"
        />
        <View className="px-5">
          <View className="flex flex-row pt-4">
            <Pressable
              onPress={() => setInputType("username")}
              className="flex flex-row items-center w-1/2"
            >
              {inputType === "username" ? (
                <AntDesign name="checkcircle" size={24} color="#2A5C81" />
              ) : (
                <View className="w-6 h-6 rounded-full border border-neutral-500" />
              )}
              <Text
                className={`${
                  inputType === "username" ? "text-[#58575D]" : "text-[#707071]"
                } pl-2.5 font-Poppins_500 text-sm`}
              >
                Username
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setInputType("number")}
              className="flex flex-row items-center w-1/2"
            >
              {inputType === "number" ? (
                <AntDesign name="checkcircle" size={24} color="#2A5C81" />
              ) : (
                <View className="w-6 h-6 rounded-full border border-neutral-500" />
              )}
              <Text
                className={`${
                  inputType === "number" ? "text-[#58575D]" : "text-[#707071]"
                } pl-2.5 font-Poppins_500 text-sm`}
              >
                Phone Number
              </Text>
            </Pressable>
          </View>
          <View className="py-4">
            <DefaultSearchComp
              phone={inputType === "number"}
              onTextChange={(text: string) => {
                setInputState(text);
              }}
              placeholder="Search friends"
            />
          </View>
          {inputState.length === 0 ? (
            <View className="pt-[140px] items-center justify-center ">
              <Image source={require("../../../assets/images/group.png")} />
              <View className="pt-6 px-[40px]">
                <Text className="text-[#707071] text-sm text-center font-Poppins_600">
                  Search friends using their username or phone number
                </Text>
              </View>
            </View>
          ) : (
            // keyboard view

            <View className="h-full pr-3 pb-[340px]">
              <FlatList
                style={{ flex: 1 }}
                data={results}
                ListEmptyComponent={() => {
                  return (
                    <View className="pt-[70px] items-center justify-center ">
                      <Image
                        source={require("../../../assets/images/search.png")}
                      />
                      <View className="pt-6 px-[20px]">
                        <Text className="text-[#707071] text-sm text-center font-Poppins_600">
                          No user is available by that username
                        </Text>
                      </View>
                    </View>
                  );
                }}
                ListHeaderComponent={() => {
                  return (
                    <View className="pb-4">
                      <Text className="font-sm font-Poppins_600 text-[#707071]">
                        Showing Results "
                        {results.length < 10
                          ? `0${results.length}`
                          : results.length}
                        "
                      </Text>
                    </View>
                  );
                }}
                renderItem={({ item }) => (
                  <View className="pb-4">
                    <PersonCard
                      icon={
                        <MaterialIcons
                          name="person-add-alt"
                          size={20}
                          color="#2A5C81"
                        />
                      }
                      name={item.name}
                      number={item.number}
                    />
                  </View>
                )}
                // ItemSeparatorComponent={() => <View className="pb-4" />}
              />
            </View>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
