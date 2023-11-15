import React, { useState } from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { EmailAssignModal } from "../../components/modals/onboarding/email-assign";
import { NameUpdateModal } from "../../components/modals/onboarding/name-update";
import { UserNameUpdateModal } from "../../components/modals/onboarding/username-update";
import {
  SmallPersonCard,
  PersonCard,
  ProfileCard,
  GroupCard,
} from "../../components/cards";
import { PasswordUpdateModal } from "../../components/modals/onboarding/password-update";
import { GroupAssigneModal } from "../../components/modals/home/group-assign";
import { ScanQRModal } from "../../components/modals/home/scan-qr";
import { MyQRModal } from "../../components/modals/home/my-qr";
import { BasicHeader } from "../../components/basic-header";
import { FriendSuccesseModal } from "../../components/modals/home/friend-sucess";
import { AddFriendModal } from "../../components/modals/home/add-friend";
import { GroupCompletionModal } from "../../components/modals/home/group-completion";

export const ModalTest = () => {
  const inputValues = [
    {
      label: "Your display name",
      placeholder: "Enter your display name",
      password: false,
    },
    {
      label: "Email address",
      placeholder: "Enter your email address",
      password: false,
    },
    {
      label: "Enter your username",
      placeholder: "Please select a username",
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

  const [open, setOpen] = useState(false);

  return (
    <View>
      <BasicHeader name="Scan Qr" />

      <SafeAreaView>
        <View>
          <Text>geafwe</Text>
          <Button onPress={() => setOpen(true)} title="hellop " />
        </View>
        <View className="pt-5">
          <SmallPersonCard time="13 min" />
        </View>
        <View className="pt-5">
          <PersonCard />
        </View>
        <View className="pt-5">
          <ProfileCard />
        </View>
        <View className="pt-5">
          <GroupCard />
        </View>
        {/* <EmailAssignModal
        inputValues={inputValues}
        open={open}
        setOpen={setOpen}
      /> */}
        {/* <NameUpdateModal
        inputValues={inputValues}
        open={open}
        setOpen={setOpen}
      /> */}
        {/* <UserNameUpdateModal
        inputValues={inputValues}
        open={open}
        setOpen={setOpen}
      /> */}
        {/* <PasswordUpdateModal
        inputValues={inputValues}
        open={open}
        setOpen={setOpen}
      /> */}
        {/* <GroupAssigneModal open={open} setOpen={setOpen} /> */}
        {/* <ScanQRModal open={open} setOpen={setOpen} /> */}
        {/* <MyQRModal open={open} setOpen={setOpen} /> */}

        {/* <FriendSuccesseModal open={open} setOpen={setOpen} /> */}
        {/* <AddFriendModal open={open} setOpen={setOpen} /> */}
        <GroupCompletionModal open={open} setOpen={setOpen} />

      </SafeAreaView>
    </View>
  );
};
