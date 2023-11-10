import React, { useState } from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { EmailAssignModal } from "../../components/modals/email-assign";
import { NameUpdateModal } from "../../components/modals/name-update";
import { UserNameUpdateModal } from "../../components/modals/username-update";
import {
  SmallPersonCard,
  PersonCard,
  ProfileCard,
  GroupCard,
} from "../../components/cards";
import { PasswordUpdateModal } from "../../components/modals/password-update";

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
    <SafeAreaView>
      <View>
        <Text>geafwe</Text>
        <Button onPress={() => setOpen(true)} title="hellop " />
      </View>

      <View className="pt-5">
        <SmallPersonCard />
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

      <PasswordUpdateModal
        inputValues={inputValues}
        open={open}
        setOpen={setOpen}
      />
    </SafeAreaView>
  );
};
