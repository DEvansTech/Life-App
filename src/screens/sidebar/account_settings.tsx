import React, { useMemo, useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Button, TouchableOpacity } from "react-native";
import { BasicHeader } from "../../components/basic-header";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import cn from "classnames";
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';
import { NameUpdateModal } from "../../components/modals/onboarding/name-update";
import { PasswordUpdateModal } from "../../components/modals/onboarding/password-update";
import { UserNameUpdateModal } from "../../components/modals/onboarding/username-update";
import { EmailAssignModal } from "../../components/modals/onboarding/email-assign";
import { ImageBanner } from "../../components";

interface AccountSettingsProps {
  navigation: any;
}

const AccountSettingsView: React.FC<AccountSettingsProps> = ({
  navigation,
}) => {
  const inputValues = [
    {
      label: "Your display name",
      placeholder: "Enter your display name               ",
      password: false,
    },
    {
      label: "Email address",
      placeholder: "Enter your email address",
      password: false,
    },
    {
      label: "Enter your username",
      placeholder: "Please select a username              ",
      password: false,
    },
    {
      label: "Enter your password",
      placeholder: "Enter password",
      password: true,
    },
    {
      label: "Retype your password",
      placeholder: " *  *  *  *  *  *  *",
      password: true,
    },
  ];

  // const uid = auth().currentUser?.uid;
  const [open, setOpen] = useState(false);
  const [modalNumber, setModalNumber] = useState(0);
  const [name, setName] = useState("Johnathan Doe");
  const [userName, setUserName] = useState("johnathan_doe");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("+81-8765434567");
  const [email, setEmail] = useState("johnathan_doe@gmail.com");

  const handleUpdatename = (newName: string) => {
    // firestore()
    //   .collection('Person')
    //   .doc(uid)
    //   .set({
    //     fullname: newName
    //   })
    //   .then(() => {
    //     setName(newName);
    //   });
  }

  const handleUpdateUserName = (newUserName: string) => {
    // firestore()
    //   .collection('Person')
    //   .doc(uid)
    //   .set({
    //     username: newUserName
    //   })
    //   .then(() => {
    //     setUserName(newUserName);
    //   });
  }

  const handleUpdatePhone = (newPhone: string) => {
    // ??Need authentication
    // firestore()
    //   .collection('Person')
    //   .doc(uid)
    //   .set({
    //     phone: newPhone
    //   })
    //   .then(() => {
    //     setPhone(newPhone);
    //   });
  }

  const handleUpdatePassword = (newPassword: string) => {
    // auth().currentUser?.updatePassword(newPassword).then(() => {
    //   setPassword(newPassword);
    // }).catch((error) => {
    // })
  }

  const handleUpdateEmail = (newEmail: string) => {
    // auth().currentUser?.updateEmail(newEmail).then(() => {
    //   firestore()
    //   .collection('Person')
    //   .doc(uid)
    //   .set({
    //     email: newEmail
    //   })
    //   .then(() => {
    //     setEmail(newEmail);
    //   });
    // }).catch((error) => {
    // });
  }

  const handleDeleteUser = () => {
    // cleanupUser();
  }

  const handlePressUpdate = (i: number) => {
    setModalNumber(i);
    setOpen(true);
  }

  const items = useMemo(
    () => [
      {
        id: "name",
        title: "Name",
        value: name,
        onPress: () => {
          navigation.push("account_settings");
        },
      },
      {
        id: "username",
        title: "Username",
        value: userName,
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
        value: phone,
        onPress: () => {
          navigation.push("account_settings");
        },
      },
      {
        id: "email",
        title: "Email Address",
        value: email,
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
            {/* <View className="w-[125px] h-[125px] bg-zinc-400 rounded-full relative">
              <View className="left-[90px] top-[90px] absolute">
                <View className="w-[26px] h-[26px] flex flex justify-center items-center bg-sky-900 rounded-full border-2 border-white">
                  <Text className="z-5">
                    <FontAwesome name={"camera"} color={"#fff"} size={12} />
                  </Text>
                </View>
              </View>
            </View> */}
            <View className="w-full">
              <ImageBanner bgColor="bg-white" hideText={true}/>
            </View>
          </View>
          <View className="bg-white pl-6 pt-2">
            {items.map((item, i) => (
              <TouchableOpacity  
                  key={item.id} 
                  onPress={() => { 
                    if (i !== items.length - 1) handlePressUpdate(i);
                    else handleDeleteUser();
                  }}
              >
                <View
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
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <NameUpdateModal
          inputValues={inputValues}
          open={open && modalNumber === 0}
          setOpen={setOpen}
          name={name}
          setName={handleUpdatename}
        />
        <UserNameUpdateModal
          inputValues={inputValues}
          open={open && modalNumber === 1}
          setOpen={setOpen}
          userName={userName}
          setUserName={handleUpdateUserName}
        />
        <PasswordUpdateModal
          inputValues={inputValues}
          open={open && modalNumber === 2}
          setOpen={setOpen}
          password={password}
          setPassword={handleUpdatePassword}
        />
        <EmailAssignModal
          inputValues={inputValues}
          open={open && modalNumber === 4}
          setOpen={setOpen}
          email={email}
          setEmail={handleUpdateEmail}
        />
      </SafeAreaView>
    </View>
  );
};

export default AccountSettingsView;
