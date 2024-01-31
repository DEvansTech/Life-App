import CardComp from "@Components/Card";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface ProfileCardCompProps {
  avatar: string;
  name: string;
  summary: string;
  onClick: () => void;
}

const ProfileCardComp: React.FC<ProfileCardCompProps> = ({
  avatar,
  name,
  summary,
  onClick
}) => {
  return (
    <CardComp
      icon={<Image className="rounded-full" width={55} height={55} source={{ uri: avatar }} />}
      title={<Text style={{ fontSize: 16, fontWeight: "600", color: "black", lineHeight: 22 }}>{name}</Text>}
      summary={<Text style={{ fontSize: 12, fontWeight: "400", color: "#707071", lineHeight: 22 }}>{summary}</Text>}
      onClick={onClick}
    />
  );
}

export default ProfileCardComp;