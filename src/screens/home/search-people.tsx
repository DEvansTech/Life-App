import React from "react";
import {
  View,
  Text,
  SectionList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FriendCard } from "../../components/cards";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { CreateGroupComp } from "../../components/cards/create-group";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParams } from "../../navigation/home-stack";
import { BasicHeader } from "../../components/basic-header";

const sections = [{
  title: "New Friend requests",
  data: [{
    type: "request",
    avatar: "https://s3-alpha-sig.figma.com/img/81b7/8a09/fc745ee29bad5fb5945fecee64d72f2f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=APqC70N351XWZomFNJ-DIwvJ2o9INzVC0QkOcnN78DXI3iBBO3OLyYr0cRqqB~7ik-guUf9qrXaKVtblS93izR89mieGAZi3umEleqt83MNl4pXp1ZgfmN0YsjSMsszqKk7u9-Oo32s2WpKUrkuKiNc9pamb-ASNJgUxjXFjEjdOvxcEGkpFahwv~4ekhwNzN6K5plYEp-phdF7p2v9bx~Fkf2CBDY0uOVkAWXgDQfeRxc7CpeuDw6noZ-M8J2fxOhsLDyzM4CYcW7EixhUGaRG05KCOygAw8ozWuVe4yQg6TSHXx-rM9h5aVB7T9cd0wkUcRFGTq2VujoV-99IThQ__",
    name: "Anna Marie"
  }, {
    type: "request",
    avatar: "https://s3-alpha-sig.figma.com/img/81b7/8a09/fc745ee29bad5fb5945fecee64d72f2f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=APqC70N351XWZomFNJ-DIwvJ2o9INzVC0QkOcnN78DXI3iBBO3OLyYr0cRqqB~7ik-guUf9qrXaKVtblS93izR89mieGAZi3umEleqt83MNl4pXp1ZgfmN0YsjSMsszqKk7u9-Oo32s2WpKUrkuKiNc9pamb-ASNJgUxjXFjEjdOvxcEGkpFahwv~4ekhwNzN6K5plYEp-phdF7p2v9bx~Fkf2CBDY0uOVkAWXgDQfeRxc7CpeuDw6noZ-M8J2fxOhsLDyzM4CYcW7EixhUGaRG05KCOygAw8ozWuVe4yQg6TSHXx-rM9h5aVB7T9cd0wkUcRFGTq2VujoV-99IThQ__",
    name: "Anna Marie"
  }]
}, {
  title: "Official Account Recommendations",
  data: [{
    type: "recommendation",
    avatar: "https://s3-alpha-sig.figma.com/img/acec/55c0/9bc45d0030830152871655d43ca2cd96?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TAcdon35lPGMU3nKE1lZwXJFda5bPBgOQPZf3C6LViuUGQt~Pz1deBwQUPtDCUMq~VVoDmZVbGgoCZU0AuH-XDZCWBO78~PbmYDGK5qEr-ZiVtrjy3D3G4ZGgjd7bEUcTuHnEBIU-6iYq~64Qg3XcJgEF-CMX10DBJrewV44s~sAIhCUcJ-7JacfxsEijW~ksTYPQ30c3gcsLaRMQzl0eO65WMiIE0em9iwmii8O37RX5bfJUqw~XNSpqxtDILQDiqsPoDL0hapVPz8LSvfVnjMQ2oi5xQbcC0HDasPJSI5dgePoASnmWJAe0WTir5oCP~~f-urRatvEFMMEwgXCDw__",
    name: "Anna Marie"
  }, {
    type: "recommendation",
    avatar: "https://s3-alpha-sig.figma.com/img/81b7/8a09/fc745ee29bad5fb5945fecee64d72f2f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=APqC70N351XWZomFNJ-DIwvJ2o9INzVC0QkOcnN78DXI3iBBO3OLyYr0cRqqB~7ik-guUf9qrXaKVtblS93izR89mieGAZi3umEleqt83MNl4pXp1ZgfmN0YsjSMsszqKk7u9-Oo32s2WpKUrkuKiNc9pamb-ASNJgUxjXFjEjdOvxcEGkpFahwv~4ekhwNzN6K5plYEp-phdF7p2v9bx~Fkf2CBDY0uOVkAWXgDQfeRxc7CpeuDw6noZ-M8J2fxOhsLDyzM4CYcW7EixhUGaRG05KCOygAw8ozWuVe4yQg6TSHXx-rM9h5aVB7T9cd0wkUcRFGTq2VujoV-99IThQ__",
    name: "Anna Marie"
  }, {
    type: "recommendation",
    avatar: "https://s3-alpha-sig.figma.com/img/acec/55c0/9bc45d0030830152871655d43ca2cd96?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TAcdon35lPGMU3nKE1lZwXJFda5bPBgOQPZf3C6LViuUGQt~Pz1deBwQUPtDCUMq~VVoDmZVbGgoCZU0AuH-XDZCWBO78~PbmYDGK5qEr-ZiVtrjy3D3G4ZGgjd7bEUcTuHnEBIU-6iYq~64Qg3XcJgEF-CMX10DBJrewV44s~sAIhCUcJ-7JacfxsEijW~ksTYPQ30c3gcsLaRMQzl0eO65WMiIE0em9iwmii8O37RX5bfJUqw~XNSpqxtDILQDiqsPoDL0hapVPz8LSvfVnjMQ2oi5xQbcC0HDasPJSI5dgePoASnmWJAe0WTir5oCP~~f-urRatvEFMMEwgXCDw__",
    name: "Anna Marie"
  }, {
    type: "recommendation",
    avatar: "https://s3-alpha-sig.figma.com/img/81b7/8a09/fc745ee29bad5fb5945fecee64d72f2f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=APqC70N351XWZomFNJ-DIwvJ2o9INzVC0QkOcnN78DXI3iBBO3OLyYr0cRqqB~7ik-guUf9qrXaKVtblS93izR89mieGAZi3umEleqt83MNl4pXp1ZgfmN0YsjSMsszqKk7u9-Oo32s2WpKUrkuKiNc9pamb-ASNJgUxjXFjEjdOvxcEGkpFahwv~4ekhwNzN6K5plYEp-phdF7p2v9bx~Fkf2CBDY0uOVkAWXgDQfeRxc7CpeuDw6noZ-M8J2fxOhsLDyzM4CYcW7EixhUGaRG05KCOygAw8ozWuVe4yQg6TSHXx-rM9h5aVB7T9cd0wkUcRFGTq2VujoV-99IThQ__",
    name: "Anna Marie"
  }, {
    type: "recommendation",
    avatar: "https://s3-alpha-sig.figma.com/img/acec/55c0/9bc45d0030830152871655d43ca2cd96?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TAcdon35lPGMU3nKE1lZwXJFda5bPBgOQPZf3C6LViuUGQt~Pz1deBwQUPtDCUMq~VVoDmZVbGgoCZU0AuH-XDZCWBO78~PbmYDGK5qEr-ZiVtrjy3D3G4ZGgjd7bEUcTuHnEBIU-6iYq~64Qg3XcJgEF-CMX10DBJrewV44s~sAIhCUcJ-7JacfxsEijW~ksTYPQ30c3gcsLaRMQzl0eO65WMiIE0em9iwmii8O37RX5bfJUqw~XNSpqxtDILQDiqsPoDL0hapVPz8LSvfVnjMQ2oi5xQbcC0HDasPJSI5dgePoASnmWJAe0WTir5oCP~~f-urRatvEFMMEwgXCDw__",
    name: "Anna Marie"
  }, {
    type: "recommendation",
    avatar: "https://s3-alpha-sig.figma.com/img/81b7/8a09/fc745ee29bad5fb5945fecee64d72f2f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=APqC70N351XWZomFNJ-DIwvJ2o9INzVC0QkOcnN78DXI3iBBO3OLyYr0cRqqB~7ik-guUf9qrXaKVtblS93izR89mieGAZi3umEleqt83MNl4pXp1ZgfmN0YsjSMsszqKk7u9-Oo32s2WpKUrkuKiNc9pamb-ASNJgUxjXFjEjdOvxcEGkpFahwv~4ekhwNzN6K5plYEp-phdF7p2v9bx~Fkf2CBDY0uOVkAWXgDQfeRxc7CpeuDw6noZ-M8J2fxOhsLDyzM4CYcW7EixhUGaRG05KCOygAw8ozWuVe4yQg6TSHXx-rM9h5aVB7T9cd0wkUcRFGTq2VujoV-99IThQ__",
    name: "Anna Marie"
  }]
}, {
  title: "Friend recomendation",
  data: [{
    type: "recommendation",
    avatar: "https://s3-alpha-sig.figma.com/img/05f5/3e01/83c1ab3c4a7a680b17ca861ce53e0acd?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1K~nQ96831wTbP1WnJKl~FWDhEurhzUrIen~QdabrNb~8Kq7xLn4wy7IXJD3rtuF5Z2BFs7YMW9puWGb~1joBvpZyFoaK8rmNhi5UI~9qEPXdQpvOQT~rmiSgGBGeKpACw1SQOZt-ihrh8cumPQH5Lz-dp5B2bbg7kuGuptyIrXgszI8TWm702IKHxygXdrg8HKfMlILSU-GYBgW1RYG-FAAmrp82tE7EkJL1WW3iv6Lp6TOBGKcb8qa0FFl7q2IMurP~tqHnOrTNTG4qBIRjJXcl97XZXK0WriFUd-yVnOlEhxDQD-UiPiGNOcqP7QPNOH00DilC5GUBJNnTiD8A__",
    name: "Anna Marie"
  }, {
    type: "recommendation",
    avatar: "https://s3-alpha-sig.figma.com/img/5dc2/aefb/54c9d406cc8344a366c130d48d65eba6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gncKc8q07cB8K5Xu41RXoduBK1KCDVU8jsBozuh0iCEiQL2mloK4k2Y6ZT~Rg7kA8t6UYgRyyoAntHXtBhCKxaHnxt3qLeD02BMk-02Wvzv05ujDktsbb0RltPOXvQMS1-Hctb8a3su-Owf~HQis3Omlj21cRdml~q7ftXK3VhZNW12BUQc2GBMmEwhyC5WAY93pbzA5ZG~xVq-jxklmmYZrbH70YDXUctTEIc4EUh4zWG9xVf8f4w9~gxAk-dnTtB440R9rXd0sOfSJkZWxaCTLzHGHmxgLd-2~8diDBYuQeCauNA82T-o6P42KlORqgPxiJa9qxAwB1OJtgBfQZQ__",
    name: "Anna Marie"
  }]
}];

type HomeSearchScreenProps = StackScreenProps<HomeStackParams, "HomeSearch">;

export const HomeSearchPeople: React.FC<HomeSearchScreenProps> = ({ navigation }) => {

  const handleNavigation = () => {
    navigation.navigate("GroupCreation");
  };


  const renderCard = ({ item }: { item: any }) => {
    console.log("item", item);

    return (
      <View className="px-4 py-1.5">
        {
          item.type === 'request'
            ? <FriendCard acceptIcon name={item.name} avatar={item.avatar} />
            : <FriendCard addIcon name={item.name} avatar={item.avatar} />
        }
      </View>
    )
  };

  const renderHeader = (section: any) => {
    return (
      <View className="px-4">
        <View className="flex flex-row justify-between pt-4 pb-3 border-t border-neutral-200">
          <Text className="text-[#565656] font-Poppins_600">
            {section.title}
          </Text>
          {
            section.title === "Official Account Recommendations"
              ? (
                <TouchableOpacity className="rounded-sm justify-center items-center px-3.5 py-1 bg-[#E5E5E5]">
                  <Text className="text-xs text-primary-color font-Poppins_300">
                    See All
                  </Text>
                </TouchableOpacity>
              )
              : (
                <TouchableOpacity className="rounded-sm justify-center items-center px-3.5 py-1 bg-[#E5E5E5]">
                  <Text className="text-xs text-primary-color font-Poppins_300">
                    {section.data.length}+ See All
                  </Text>
                </TouchableOpacity>
              )
          }
        </View>
      </View>
    );
    // }
  };

  return (
    <View className="bg-white h-full pb-44">
      <BasicHeader
        name="Home"
        leftIcon={
          <TouchableOpacity>
            <Feather name="settings" size={22} color="#6B95BB" />
          </TouchableOpacity>
        }
        rightIcon={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <MaterialIcons name="close" size={28} color="#6B95BB" />
          </TouchableOpacity>
        }
      />
      <View className="w-full flex flex-row justify-between px-20 py-4 border-t border-[#2A5C81] bg-[#00406E]">
        <View className="items-center">
          <MaterialIcons name="qr-code-2" size={40} color="#96B4D1" />
          <Text
            style={{ fontFamily: "Poppins_300Light" }}
            className="text-slate-400 text-xs font-light font-['Poppins'] leading-snug"
          >
            QR Code
          </Text>
        </View>
        <TouchableOpacity className="items-center">
          <MaterialIcons name="search" size={40} color="#96B4D1" />
          <Text
            style={{ fontFamily: "Poppins_300Light" }}
            className="text-slate-400 text-xs font-light font-['Poppins'] leading-snug"
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView className="flex h-full">
        <View className="flex h-full">
          <SectionList
            ListHeaderComponent={() => {
              return (
                <View className=" pt-2.5 pb-1 px-4 bg-[#F4F4F4]">
                  <View className=" pb-1.5 flex flex-row justify-between items-center">
                    <View className=" pb-1.5 flex flex-row">
                      <View
                        className={
                          "h-[48] w-[48] bg-[#E5E5E5] flex items-center justify-center rounded-full"
                        }
                      >
                        <AntDesign name="adduser" size={24} color="#2A5C81" />
                      </View>
                      <View className="pl-4 flex justify-evenly">
                        <Text className="text-primary-color font-Poppins_600 text-sm">
                          Auto-Add Friends
                        </Text>
                        <Text className="text-xs text-[#707071] font-Poppins_300">
                          Auto-add contacts as friend
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity className="rounded-sm justify-center items-center px-3.5 py-1 bg-primary-color">
                      <Text className="text-xs text-white font-Poppins_300">
                        Allow
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className="border-t border-neutral-200 pt-2.5 pb-2">
                    <CreateGroupComp color="gray" onPress={handleNavigation} />
                  </View>
                </View>
              );
            }}
            stickySectionHeadersEnabled={false}
            renderSectionFooter={() => <View className="pb-3" />}
            renderSectionHeader={({ section }) => {
              return renderHeader(section);
            }}
            sections={sections}
            renderItem={renderCard}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
