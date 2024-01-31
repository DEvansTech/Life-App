import React, { useState } from "react";
import { FlatList, Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HeaderComp from "@Components/Header";
import PersonCardComp from "@Components/PersonCard";
import styles from "./styles";

const SearchPeopleScreen = ({ navigation, route }: any) => {
  const [searchBy, setSearchBy] = useState<"username" | "phone">("username");
  const [searchKey, setSearchKey] = useState("");
  const [people, setPeople] = useState([]);

  const renderListHeader = () => {
    return (
      <Text style={{ fontSize: 14, fontWeight: "600", lineHeight: 22, color: "#707071" }}>Showing Results “{searchKey}”</Text>
    );
  }

  const renderItem = ({ section: { title }, item }: any) => {
    return (
      <PersonCardComp
        avatar={item.avatar}
        name={item.name}
        rightNode={
          <MaterialIcons name="person-add-alt" size={22} color="#6B95BB" />
        }
      />
    );
  }

  return (
    <View className="h-full bg-white">
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HeaderComp
        bgColor="white"
        color="#58575D"
        leftIcon="return"
        onLeftPress={() => navigation.goBack()}
        title="Search Friends"
        middleLayer={
          <View className="mt-3 flex flex-row justify-between pt-3 px-2 border-t border-[#C9C9C9]">
            <TouchableOpacity className="flex flex-row" onPress={() => setSearchBy("username")}>
              <Octicons
                className="my-auto"
                name={`${searchBy === "username" ? "check-circle-fill" : "circle"}`}
                size={26}
                color={`${searchBy === "username" ? "#2A5C81" : "#707071"}`}
              />
              <Text style={{ fontSize: 14, fontWeight: "500", lineHeight: 22, color: "#58575D" }} className="my-auto ml-3">Username</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row" onPress={() => setSearchBy("phone")}>
              <Octicons
                className="my-auto"
                name={`${searchBy === "phone" ? "check-circle-fill" : "circle"}`}
                size={26}
                color={`${searchBy === "phone" ? "#2A5C81" : "#707071"}`}
              />
              <Text style={{ fontSize: 14, fontWeight: "500", lineHeight: 22, color: "#58575D" }} className="my-auto ml-3">Phone Number</Text>
            </TouchableOpacity>
          </View>
        }
        hasSearchBar
        searchBarBgColor="#E5E5E5"
        searchBarPhColor="#565656"
        searchBarCrColor="#707071"
        value={searchKey}
        setValue={setSearchKey}
      />
      <View className="px-4">
        {
          searchKey.length > 0
            ? (
              <View>
                <FlatList ListHeaderComponent={renderListHeader} data={[]} renderItem={renderItem} />
                {!people.length && (
                  <View>
                    <Image className="mx-auto mt-[131]" source={require("@Assets/img/empty.png")} />
                    <Text style={{ fontSize: 14, fontWeight: "600", lineHeight: 22 }} className="mt-6 mx-auto w-3/5 text-center">No user is available by that username</Text>
                  </View>
                )}
              </View>
            ) : (
              <View>
                <Image className="mx-auto mt-[131]" source={require("@Assets/img/search.png")} />
                <Text style={{ fontSize: 14, fontWeight: "600", lineHeight: 22 }} className="mt-6 mx-auto w-3/5 text-center">Search friends using their username or phone number</Text>
              </View>
            )
        }
      </View>

    </View>
  );
}

export default SearchPeopleScreen;