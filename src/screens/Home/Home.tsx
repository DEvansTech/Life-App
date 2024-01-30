import React, {
  useState
} from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SectionList,
  SafeAreaView,
  Image
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HeaderComp from "@Components/Header";
import { Routes } from "@Navigators/routes";
import CustomTextInputComp from "@Components/CustomTextInput";
import CardComp from "@Components/Card";

const sections = [{
  title: "My groups",
  expanded: true,
  data: [{
    type: "group",
    size: 48,
    icon: "https://s3-alpha-sig.figma.com/img/bd60/d31b/e474b0d904b2669ce75a83d496fe77e1?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PBkUEmcuqnaQzhpFaSjZvPM-ZiLp33V206HOk9MCcdOSMHnkvcv9cgT0m3AN58eR1UfpgF-H8kx6kgQVqNoc-v9PzdZVfQoN35mUDCc5xBRRaZ9f9cxHz68J1V5uip~lF56r1XitxGqlGKBSjs6LKAwBMTwUCrXatt1FXwIt5izWFfboI5CEP3D~fvNRMy4sM-OddAuH~R9baF3Td4yH~XDa4CCf69qrtj47dAmn1KqUD-QGt4jrTB2uA9Z5-pHWSKPRyv0sm2qVYFuLQ~dB67Ac~P-fdqoUQ6~JSJoytnuBV2Z9KyFsebUYyfZ91I15Skm7aimiRgED4cfpPe8G4Q__",
    title: "Travel guide",
    info: "16 new",
    comment: "3 New users join this week",
  }, {
    type: "group",
    size: 48,
    icon: "https://s3-alpha-sig.figma.com/img/3eaf/9f72/591b5570913ed4517e6b6d622943cf98?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHTBe-b3B9T45IEe8aHiMXMb8EDdzE-RoMDwMxz3TE78Za6H-wj8fRs0tS6pY9Ogv~fdoOrrslPFOIo-d9IsCqb-iNOfydZTQZgesvsFNC~0mnIEkN0qef65jwqHyzjYafGkn50aOIETuEOQSz6pso32bHFt8OD-USOPYHnXIHZiQNP9RtKJZX8uqfkVEMO0989mh3Xt4XVO4Zv15OSruXDkQe3ZtSQepd4bFo6MnFPwspdhnjtff~DX8JMP7KDoLaOV9hDi67~0IEJiBrS6XnHKtv6GGl33OOPPICiWu7i0UtyBkg~WmtsnZauuRrW5dqtayGmQ40tMsJwF7~o58g__",
    title: "Animal Lover 😻",
    info: "16 new",
    comment: "3 New users join this week",
  }, {
    type: "group",
    size: 48,
    icon: "https://s3-alpha-sig.figma.com/img/c95f/1808/4df1f4106a7ea131be4d44105e42e5a5?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BLgzh-HPtVuvCf0TUR7ayjtQe-j8MIVv249XD9XXLlR6fBAdWLcCvzIbRkUqRxql~IkDCl2CV8ve042NNFeC2Btn1Uy-SVkcG1Jp61M2FJO7OmSMHwiAwNDOG9rPEfMjxiZA0z-lO1qGklWQ4U4DcvCDbG~sEmm-~pWhhuiFYs9rfISLafP9GTHBCzOMDyrMJbSgV~qrVcTJQgUBvQU9NF7WBUjaI8kLzrOE5P0Kpw3RhM6ybgeJHpGl1R4c5JxK1sCNARrsviqtlcmvJrrVwkmOFG5wIAc6SqgWG69wfeIFkSi9OVtMYsTjElT9eGY2nPDVDJS1UmHydotCkJW8Pw__",
    title: "UI/UX Group 🎍",
    info: "16 new",
    comment: "3 New users join this week",
  }, {
    type: "group",
    size: 48,
    icon: "https://s3-alpha-sig.figma.com/img/bd60/d31b/e474b0d904b2669ce75a83d496fe77e1?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PBkUEmcuqnaQzhpFaSjZvPM-ZiLp33V206HOk9MCcdOSMHnkvcv9cgT0m3AN58eR1UfpgF-H8kx6kgQVqNoc-v9PzdZVfQoN35mUDCc5xBRRaZ9f9cxHz68J1V5uip~lF56r1XitxGqlGKBSjs6LKAwBMTwUCrXatt1FXwIt5izWFfboI5CEP3D~fvNRMy4sM-OddAuH~R9baF3Td4yH~XDa4CCf69qrtj47dAmn1KqUD-QGt4jrTB2uA9Z5-pHWSKPRyv0sm2qVYFuLQ~dB67Ac~P-fdqoUQ6~JSJoytnuBV2Z9KyFsebUYyfZ91I15Skm7aimiRgED4cfpPe8G4Q__",
    title: "Travel guide",
    info: "16 new",
    comment: "3 New users join this week",
  }, {
    type: "group",
    size: 48,
    icon: "https://s3-alpha-sig.figma.com/img/3eaf/9f72/591b5570913ed4517e6b6d622943cf98?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHTBe-b3B9T45IEe8aHiMXMb8EDdzE-RoMDwMxz3TE78Za6H-wj8fRs0tS6pY9Ogv~fdoOrrslPFOIo-d9IsCqb-iNOfydZTQZgesvsFNC~0mnIEkN0qef65jwqHyzjYafGkn50aOIETuEOQSz6pso32bHFt8OD-USOPYHnXIHZiQNP9RtKJZX8uqfkVEMO0989mh3Xt4XVO4Zv15OSruXDkQe3ZtSQepd4bFo6MnFPwspdhnjtff~DX8JMP7KDoLaOV9hDi67~0IEJiBrS6XnHKtv6GGl33OOPPICiWu7i0UtyBkg~WmtsnZauuRrW5dqtayGmQ40tMsJwF7~o58g__",
    title: "Animal Lover 😻",
    info: "16 new",
    comment: "3 New users join this week",
  }, {
    type: "group",
    size: 48,
    icon: "https://s3-alpha-sig.figma.com/img/c95f/1808/4df1f4106a7ea131be4d44105e42e5a5?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BLgzh-HPtVuvCf0TUR7ayjtQe-j8MIVv249XD9XXLlR6fBAdWLcCvzIbRkUqRxql~IkDCl2CV8ve042NNFeC2Btn1Uy-SVkcG1Jp61M2FJO7OmSMHwiAwNDOG9rPEfMjxiZA0z-lO1qGklWQ4U4DcvCDbG~sEmm-~pWhhuiFYs9rfISLafP9GTHBCzOMDyrMJbSgV~qrVcTJQgUBvQU9NF7WBUjaI8kLzrOE5P0Kpw3RhM6ybgeJHpGl1R4c5JxK1sCNARrsviqtlcmvJrrVwkmOFG5wIAc6SqgWG69wfeIFkSi9OVtMYsTjElT9eGY2nPDVDJS1UmHydotCkJW8Pw__",
    title: "UI/UX Group 🎍",
    info: "16 new",
    comment: "3 New users join this week",
  }]
}, {
  title: "Friends 650",
  expanded: true,
  data: [{
    type: "person",
    size: 36,
    icon: "https://s3-alpha-sig.figma.com/img/572b/3ccc/da0677c5e750351244c5d0d6fb3908c1?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZzXCGIU~7le3CXgVEYIOiol92HHFf-2jBDFJ6la7hPsNiBbhC-hVe64wK83V~G8wR5xNA9yNwwIcA96uJVOEbDe3DKnwW6G-w3Hy4OnTvB54oiL1xi9txPPgAxDE~DWzzL2Hq9sw6E0u~9Sy7gcKek4LHZzr7qYxODtRJNdSCNhkKDSPXH9uVfvj0uriYaH4M~26qZHdRxh6AdMAezD0s4MDIphOPgwTbn7r7j7dUSUR5vQxyaEKF7e-vMB0WjAtnJO3uxxUwjn4VHkKxLua96MGCMhd7UAMxKsAtZQMySD09bkBlLDpbsXpKq71BVY51fsuxVauG7swd7VcmIIlKA__",
    title: "Anna Marie",
    info: "32 min ago"
  }, {
    type: "person",
    size: 36,
    icon: "https://s3-alpha-sig.figma.com/img/6449/1ec1/bda633892ba1c678167ed7a37b1cf428?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XOj0ySt1XRsJhBQZcvgWC6wkJG6O39B0a~aYEbTdzhPBHhaOo1iJoFDdwPdHvOUHTAfjs0W9reYXC4sRVRFAFpGyLmz7XA4DwwPtEQ203xO3edhc3ydGxxQPJJe-uJF8cRgTuNbzQENRWFU-9LuewpjbzFjCcNw05S2kOe6wvrf5GGTvZXdmvv7cFwVADzrmcDVEkQQmbceDkoIxtnf9CDZt9L2QkSbiXGiFajXN4RmbFQ-cYmIQdZ7VVE5dpqxtTL5Cm0q9c2ofTtiqU-4PPcxRVHhfdtTAIN4HrcPESpzRkJ4xjVDWX4cRMWZKm8MlwGf8BSRVniwIKfVKJlJzUQ__",
    title: "Anna Marie",
    info: "32 min ago"
  }, {
    type: "person",
    size: 36,
    icon: "https://s3-alpha-sig.figma.com/img/7f33/eec2/2b14470002bd662435f26ca2059ffcbe?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lYGPSX2KLs7E2KAQ2-O5QyRvcdWIu41uQQ75ElffkUMm7W3-myAAfyskj0wmwwvGKb5MWaDTlOrb0EAhOEkdX4PgKM7hZmgGtjeVVXnJAcoVo4gsLdmJ4puuoQMJdOCLaAZFOmDSp-kiRhlEVgXm7EgYVP3PBvuoZVPCIIgnHXw6dZO~jRCZWZQmNdiURhYKq~ZmfDoEcBBj1pGe9gWOYLi3puAl0G3nHVLNJz0Zp2IwcSIuNJVkSC4k0hqQlU7hdrqvig1QSZj7opmtUpzCCctZCFxUF~u24h9lAXd0X11nqe9cqZD1dy7I0WdC816oSPLPwXO61dHCE9J7jc4UYw__",
    title: "Anna Marie",
    info: "32 min ago"
  }, {
    type: "person",
    size: 36,
    icon: "https://s3-alpha-sig.figma.com/img/572b/3ccc/da0677c5e750351244c5d0d6fb3908c1?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZzXCGIU~7le3CXgVEYIOiol92HHFf-2jBDFJ6la7hPsNiBbhC-hVe64wK83V~G8wR5xNA9yNwwIcA96uJVOEbDe3DKnwW6G-w3Hy4OnTvB54oiL1xi9txPPgAxDE~DWzzL2Hq9sw6E0u~9Sy7gcKek4LHZzr7qYxODtRJNdSCNhkKDSPXH9uVfvj0uriYaH4M~26qZHdRxh6AdMAezD0s4MDIphOPgwTbn7r7j7dUSUR5vQxyaEKF7e-vMB0WjAtnJO3uxxUwjn4VHkKxLua96MGCMhd7UAMxKsAtZQMySD09bkBlLDpbsXpKq71BVY51fsuxVauG7swd7VcmIIlKA__",
    title: "Anna Marie",
    info: "32 min ago"
  }, {
    type: "person",
    size: 36,
    icon: "https://s3-alpha-sig.figma.com/img/6449/1ec1/bda633892ba1c678167ed7a37b1cf428?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XOj0ySt1XRsJhBQZcvgWC6wkJG6O39B0a~aYEbTdzhPBHhaOo1iJoFDdwPdHvOUHTAfjs0W9reYXC4sRVRFAFpGyLmz7XA4DwwPtEQ203xO3edhc3ydGxxQPJJe-uJF8cRgTuNbzQENRWFU-9LuewpjbzFjCcNw05S2kOe6wvrf5GGTvZXdmvv7cFwVADzrmcDVEkQQmbceDkoIxtnf9CDZt9L2QkSbiXGiFajXN4RmbFQ-cYmIQdZ7VVE5dpqxtTL5Cm0q9c2ofTtiqU-4PPcxRVHhfdtTAIN4HrcPESpzRkJ4xjVDWX4cRMWZKm8MlwGf8BSRVniwIKfVKJlJzUQ__",
    title: "Anna Marie",
    info: "32 min ago"
  }, {
    type: "person",
    size: 36,
    icon: "https://s3-alpha-sig.figma.com/img/7f33/eec2/2b14470002bd662435f26ca2059ffcbe?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lYGPSX2KLs7E2KAQ2-O5QyRvcdWIu41uQQ75ElffkUMm7W3-myAAfyskj0wmwwvGKb5MWaDTlOrb0EAhOEkdX4PgKM7hZmgGtjeVVXnJAcoVo4gsLdmJ4puuoQMJdOCLaAZFOmDSp-kiRhlEVgXm7EgYVP3PBvuoZVPCIIgnHXw6dZO~jRCZWZQmNdiURhYKq~ZmfDoEcBBj1pGe9gWOYLi3puAl0G3nHVLNJz0Zp2IwcSIuNJVkSC4k0hqQlU7hdrqvig1QSZj7opmtUpzCCctZCFxUF~u24h9lAXd0X11nqe9cqZD1dy7I0WdC816oSPLPwXO61dHCE9J7jc4UYw__",
    title: "Anna Marie",
    info: "32 min ago"
  }]
}]

const HomeScreen = ({ navigation, route }: any) => {
  const [expandedSections, setExpandedSections] = useState(new Set(sections.map(section => section.title)));

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

  const renderListHeader = () => {
    return (
      <View className="py-4">
        <CardComp
          size={56}
          icon={<View><Image className="rounded-full" width={56} height={56} source={{ uri: "https://s3-alpha-sig.figma.com/img/c821/61ec/21f46033e43fc009cdf3e9bf3334b5bc?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XQULIF6H-dtrC4OeczVEvVM4UENGAXWcRPVv55cBVS1IZek2UXCCQ2kU70HwKuJOp8HcvX9OErg9rKNZTCu1tlSovb4i3fvmPatGt~3d6HLaBsvMox2kpD338~dIjUKNQjXglUDTtN855-pMueOXM97Gf4V8i-bXDpmj5VsKdpmq3jeeup6TZ1ND~WFCUOs6EZ3AeBQ6Kd36Tgoia8FkaFTHx5gtkWTNcI6QZJ3vE3AHMUECDIhLaBBoLbPRsN13zqrj9nHBufF2uOVkvHiKf8QQpkQB767ruTmKCf2bYRFSZFbmL6MWuBqIEzsASBtALe-A8O84dJXSkQquCTVBow__" }} /></View>}
          title="Michel lin"
          titleSize={16}
          comment="Lorem ispum Lorem ispum"
        />
      </View>
    );
  }

  const renderSectionHeader = ({ section }: any) => {
    return (
      <View className="px-4">
        <View className="border-t border-gray-200 -mx-1">
          <TouchableOpacity className="w-full py-4 px-1" onPress={() => handleToggle(section.title)} >
            <View className="w-full flex flex-row justify-between">
              <Text className="font-poppins font-bold leading-snug text-base text-[#565656]">{section.title}</Text>
              <View className="my-auto">
                <FontAwesome name={expandedSections.has(section.title) ? "chevron-up" : "chevron-down"} color={"#AAAAAA"} size={16} />
              </View>
            </View>
          </TouchableOpacity>
          <View className="-mx-4 mb-4 px-1">
            {(expandedSections.has("My groups") && section.title === "My groups")
              ? <CardComp
                onPress={() => navigation.navigate(Routes.CreateGroup)}
                icon={<View><Image width={48} height={48} source={require("@Assets/img/create_group.png")}></Image></View>}
                size={48}
                title="Create group"
                titleColor="#2A5C81"
                titleSize={14} comment="Create group for you and friends" />
              : null}
          </View>

        </View>
      </View>
    )
  }

  const renderItem = ({ section: { title }, item }: any) => {
    const isExpanded = expandedSections.has(title);
    if (!isExpanded) return null;
    return (
      <View className="pb-3">
        <CardComp
          size={item.size}
          icon={<View><Image className="rounded-full" width={item.size} height={item.size} source={{ uri: item.icon }} /></View>}
          title={item.title}
          titleSize={14}
          info={item.info}
          comment={item.comment}
        />
      </View>
    )
  };

  return (
    <SafeAreaView className="w-full h-full bg-white">
      <HeaderComp
        leftNode={
          <TouchableOpacity
            className="my-auto"
            onPress={() => {
              // navigation.navigate("SideBar")
            }}
          >
            <Feather name="settings" size={22} color="#6B95BB" />
          </TouchableOpacity>
        }
        centerNode={
          <Text className="font-poppins text-white text-[17px] font-bold leading-[26px]">Home</Text>
        }
        rightNode={
          <TouchableOpacity
            className="my-auto"
            onPress={() => {
              navigation.navigate(Routes.AddPeople);
            }}
          >
            <MaterialIcons name="person-add-alt" size={28} color="#6B95BB" />
          </TouchableOpacity>
        }
      />
      <View className="px-4 pb-4 bg-[#00406E]">
        <CustomTextInputComp
          leftNode={<MaterialIcons name="search" color="white" size={28} />}
          placeholder="Search"
        />
      </View>
      <SectionList
        ListHeaderComponent={renderListHeader}
        stickySectionHeadersEnabled={false}
        sections={sections}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;