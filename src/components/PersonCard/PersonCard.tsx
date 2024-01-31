import CardComp from "@Components/Card";
import React from "react";
import { Text, Image } from "react-native";

interface PersonCardCompProps {
  avatar?: string;
  name?: string;
  info?: string;
  summary?: string;
  rightNode?: React.ReactNode;
  onClick?: () => void;
}

const PersonCardComp: React.FC<PersonCardCompProps> = ({
  avatar,
  name,
  info,
  summary,
  rightNode,
  onClick
}) => {
  return (
    <CardComp
      icon={<Image className="rounded-full" width={48} height={48} source={{ uri: avatar }} />}
      title={
        <Text style={{ fontSize: 14, fontWeight: "600", color: "#707071", lineHeight: 22 }}>
          {name}
          {info?.length && <Text style={{ fontSize: 12, fontWeight: "400", color: "#58575D", marginTop: "auto" }}> . {info}</Text>}
        </Text >
      }
      summary={<Text style={{ fontSize: 12, fontWeight: "300", color: "#707071", lineHeight: 14 }}> {summary}</Text >}
      onClick={onClick}
      rightNode={rightNode}
    />
  );
}

export default PersonCardComp;