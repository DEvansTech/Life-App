import React, { useState } from "react";
import {
  View,
  Text,
  SectionList,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import {
  FriendCard,
  ProfileCard,
  GroupCard,
} from "../../components/cards";
import { CreateGroupComp } from "../../components/cards/create-group";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParams } from "../../navigation/home-stack";
import { BasicHeader } from "../../components/basic-header";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";
import CustomTextInput from "../../components/text-input";

type HomeScreenProps = StackScreenProps<HomeStackParams, "Home">;

const sections = [{
  title: "My groups",
  expanded: true,
  data: [{
    // avatar: "https://s3-alpha-sig.figma.com/img/bd60/d31b/e474b0d904b2669ce75a83d496fe77e1?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PBkUEmcuqnaQzhpFaSjZvPM-ZiLp33V206HOk9MCcdOSMHnkvcv9cgT0m3AN58eR1UfpgF-H8kx6kgQVqNoc-v9PzdZVfQoN35mUDCc5xBRRaZ9f9cxHz68J1V5uip~lF56r1XitxGqlGKBSjs6LKAwBMTwUCrXatt1FXwIt5izWFfboI5CEP3D~fvNRMy4sM-OddAuH~R9baF3Td4yH~XDa4CCf69qrtj47dAmn1KqUD-QGt4jrTB2uA9Z5-pHWSKPRyv0sm2qVYFuLQ~dB67Ac~P-fdqoUQ6~JSJoytnuBV2Z9KyFsebUYyfZ91I15Skm7aimiRgED4cfpPe8G4Q__",
    avatar: "",
    type: "group",
    title: "Travel guide",
    info: "16 New"
  }, {
    avatar: "https://s3-alpha-sig.figma.com/img/3eaf/9f72/591b5570913ed4517e6b6d622943cf98?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHTBe-b3B9T45IEe8aHiMXMb8EDdzE-RoMDwMxz3TE78Za6H-wj8fRs0tS6pY9Ogv~fdoOrrslPFOIo-d9IsCqb-iNOfydZTQZgesvsFNC~0mnIEkN0qef65jwqHyzjYafGkn50aOIETuEOQSz6pso32bHFt8OD-USOPYHnXIHZiQNP9RtKJZX8uqfkVEMO0989mh3Xt4XVO4Zv15OSruXDkQe3ZtSQepd4bFo6MnFPwspdhnjtff~DX8JMP7KDoLaOV9hDi67~0IEJiBrS6XnHKtv6GGl33OOPPICiWu7i0UtyBkg~WmtsnZauuRrW5dqtayGmQ40tMsJwF7~o58g__",
    type: "group",
    title: "Animal Lover 😻",
    info: "12 New"
  }, {
    avatar: "https://s3-alpha-sig.figma.com/img/c95f/1808/4df1f4106a7ea131be4d44105e42e5a5?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oA9GwvDasVZeaHWQ7Rv~vAbQdRaZBgqQ2dADlRKhZSlO81b94Wt-7S0aoxArVGivyck~ym6W~ysit5mUr3qXtm8kV69P2VdmDp7iIqWDGjbvflfS1wzCLhgfWK7Dy4l1GqKR8kA61reSWwMZhbdiLcqqOzFmrRCKNb~1KLuSIR3W6C5hHYj6aVYdHB9rQfsa1grRSCYQnzduHwJKKsQj-rYwvVkvAeKqDLu3f7dO6esYOZCQIfJ2nWNScOiGf8VRr-Arq9mIEufeusjpb~9NEaJ2~hGSUM~sVVrg4hlW2mY-QchKLGLZY~K1RLGBnSvV5kcUzIHmDTbLf2HK0cTPLQ__",
    type: "group",
    title: "UI/UX Group 🎍",
    info: "12 New"
  }]
}, {
  title: "Friends 650",
  expanded: true,
  data: [{
    // avatar: "https://s3-alpha-sig.figma.com/img/572b/3ccc/da0677c5e750351244c5d0d6fb3908c1?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tie8HPT7vJLPzkfOnZnsyV7j87l6hRfLtaAoWGdSguMx0ZFKJ6-hFAea0I02YSn4rKpz8kQJjiS40EDDuDp4TPQHFM3la~jfaQIz7voYBSjgURnYXA10kT9xxHbZ0QcnYwKp4dU~VmQ51FMy-D~AnjWnK6-uai7QqRaN9LZ8i-t70kmfOxnxZTIbWV-gD~Xqnjk3-Md4tSbjec4yFbb8-w3k9AU~qUNkUV3M-pZVJxt~o4LXsIPSczjugEV6~W19SVKnS5NgHqJERdo0XjpDyKY3MiGGASxbBr8r1ihCsOkpK~Ul2L5LQtFxe0pnbWqZHTTj4Q36LXSwX9BZbUO4ug__",
    avatar: "",
    name: "Anna Marie",
    last_seen: "32 min ago",
    type: "friend",
  }, {
    avatar: "https://s3-alpha-sig.figma.com/img/6449/1ec1/bda633892ba1c678167ed7a37b1cf428?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZNwJeJXIQNPukwTL4-~hjIlXjC7LUCRYkHLOnFpJHVlfMSDur3FSBgQdXN2up~H9eQvP76SLbpmFbEfsYtzJqoshWpv-MzVgbFNlNBWWcPoHvVI7Qbm2BqsbcXD1k3kGTUSTcaxOqAMv~ZQ5t1ggBzpIUkFKcR29ZEwO7sFNtUER~IinoiszB6UIqUJ9P6ZAnqwtp8KgrSInY6g0gpKajOW2-JJeNx-RODbeKO1R4vOEtX4~l5colkzuPfvKlJRNR0jgRzqrIqFm1v7auBAHTBLRBe~Et1rp6VsFDv3Esw~96-LdoIsXbvMu9aGenpgIqmdTG~iKV0J-ZhGlOtldaA__",
    name: "Anna Marie",
    last_seen: "32 min ago",
    type: "friend",
  }, {
    avatar: "https://s3-alpha-sig.figma.com/img/7f33/eec2/2b14470002bd662435f26ca2059ffcbe?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c1jNpWlBpxLlpRqPvDzjaGV5wT~xOHKw1NK3RbWWfexEdC11IB2jFL1jzPz2-wuSRnYIbBId4Xq2pZZcLXIMBc27l3CiS-QvDPNv5Gve463bjdJtiTAQ9sTstjK7wlgvF4SqrE0rC7QS7QMsECAFJoNkQnhVmxI5Ddv6-PIOjQ5u-oYHebBoKkbm~Q43l0s0zDqm~OOYRCL0D-m8sHSp4hgl05v9AoOrSkLQJyz0KXZuCul0X2iC-IvM4jqS6~g~09lsxvGomgUD5-TrUQyuhvJ9cs~BABIg8LIZ6c0BFxgeiFsb7BHYGrALgOpFz5kaHSYBqwQxMY~GznPOf0jjYA__",
    name: "Anna Marie",
    last_seen: "32 min ago",
    type: "friend",
  }, {
    avatar: "https://s3-alpha-sig.figma.com/img/6449/1ec1/bda633892ba1c678167ed7a37b1cf428?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZNwJeJXIQNPukwTL4-~hjIlXjC7LUCRYkHLOnFpJHVlfMSDur3FSBgQdXN2up~H9eQvP76SLbpmFbEfsYtzJqoshWpv-MzVgbFNlNBWWcPoHvVI7Qbm2BqsbcXD1k3kGTUSTcaxOqAMv~ZQ5t1ggBzpIUkFKcR29ZEwO7sFNtUER~IinoiszB6UIqUJ9P6ZAnqwtp8KgrSInY6g0gpKajOW2-JJeNx-RODbeKO1R4vOEtX4~l5colkzuPfvKlJRNR0jgRzqrIqFm1v7auBAHTBLRBe~Et1rp6VsFDv3Esw~96-LdoIsXbvMu9aGenpgIqmdTG~iKV0J-ZhGlOtldaA__",
    name: "Anna Marie",
    last_seen: "32 min ago",
    type: "friend",
  }]
}];

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  // const [addFriend, setAddFriend] = React.useState(false);
  const [expandedSections, setExpandedSections] = useState(new Set(sections.map(section => section.title)));
  const renderItem = ({ section: { title }, item }) => {
    const isExpanded = expandedSections.has(title);
    if (!isExpanded) return null;
    switch (item.type) {
      case "group":
        return (
          <View className="pb-3">
            <GroupCard avatar={item.avatar} title={item.title} info={item.info} />
          </View>
        );
      case "friend":
        return (
          <View className="pb-3">
            <FriendCard avatar={item.avatar} name={item.name} last_seen="32 min ago" />
          </View>
        );
      // Add more cases for other card types as needed
      default:
        return null;
    }
  };

  const handleNavigation = () => {
    navigation.navigate("GroupCreation");
  };

  const handleChange = () => { }

  const handleToggle = (title: string) => {
    setExpandedSections((expandedSections) => {
      const next = new Set(expandedSections);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  }

  return (
    <View className="bg-white h-full flex-column pb-40">
      <BasicHeader
        name="Home"
        leftIcon={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SideBar")
            }}
          >
            <Feather name="settings" size={22} color="#6B95BB" />
          </TouchableOpacity>
        }
        rightIcon={
          // addFriend ? (
          //   <TouchableOpacity
          //     onPress={() => {
          //       setAddFriend(false);
          //     }}
          //   >
          //     <MaterialIcons name="close" size={22} color="#6B95BB" />
          //   </TouchableOpacity>
          // ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeAdd");
            }}
          >
            <MaterialIcons name="person-add-alt" size={28} color="#6B95BB" />
          </TouchableOpacity>
          // )
        }
      />
      <View className="px-4 pb-4 bg-[#00406E]">
        <CustomTextInput
          leftIcon={<MaterialIcons name="search" color="white" size={20} />}
          containerStyle="rounded bg-[#96B4D137] text-white border border-transparent h-10 items-center"
          inputStyle="font-Poppins_400 text-white text-sm"
          placeholder="Search"
          placeholderTextColor={"#C9C9C9"}
          onChange={handleChange}
        />
      </View>
      <SafeAreaView className="flex h-full grow flex-column">
        <SectionList
          className="mx-4"
          ListHeaderComponent={() => {
            return (
              <View className="pt-5 pb-4">
                <ProfileCard avatar="https://s3-alpha-sig.figma.com/img/c821/61ec/21f46033e43fc009cdf3e9bf3334b5bc?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0QZvmWeHu3A4h0-KqtrL3U3AQN1-IUCNhYxNo0MoaXk75yetkSnUpSH4JTP7WAJdo-R6IvKmU9VuCfPrHBAgByU0AS7JcZ9ZIRwZWZp1RU0Tw9RKskpwmRT0rnU7N0Ft4bY3n1AjAh1QWp-Q5g9FmTRhjpBOjDFyPZ7DSrWtQx5B1yv9-Hin7SjNikzhDoHMXTI8iLZdgP9YxA0QNjcInI-dZxVALqV8OkcCNSPQiwNvealykeblMHj6HURTiqeW49RHyHfVE-yxfLZdf0UBhJZItkTg57MX116O7y1yEm78wzb2FdjwPghXdCew3PYru9nKVIUs-~8lIMhL9lF9g__" name="Michel lin" info="Lorem ispum Lorem ispum" />
              </View>
            );
          }}
          stickySectionHeadersEnabled={false}
          renderSectionFooter={() => <View className="pb-2" />}
          renderSectionHeader={({ section }) => (
            <View>
              <TouchableOpacity
                className="flex flex-row justify-between pt-4 pb-3 border-t border-neutral-200"
                onPress={() => handleToggle(section.title)}
              >
                <Text className="text-[#565656] font-Poppins_600 text-sm">
                  {section.title}
                </Text>
                <FontAwesome name={expandedSections.has(section.title) ? "chevron-up" : "chevron-down"} color={"#AAAAAA"} size={16} />
              </TouchableOpacity>
              {
                (expandedSections.has("My groups") && section.title === "My groups") ? (
                  <View className="mb-2.5">
                    <CreateGroupComp onPress={handleNavigation} />
                  </View>
                ) : null
              }
            </View>
          )}
          sections={sections}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
};
