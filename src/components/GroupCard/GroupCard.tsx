import CardComp from "@Components/Card";
import React from "react";
import { Text, Image } from "react-native";

interface GroupCardCompProps {
  icon: string;
  title: string;
  info: string;
  summary: string;
  onClick: () => void;
}

const GroupCardComp: React.FC<GroupCardCompProps> = ({
  icon,
  title,
  info,
  summary,
  onClick
}) => {
  return (
    <CardComp
      icon={<Image className="rounded-full" width={48} height={48} source={{ uri: icon }} />}
      title={
        <Text style={{ fontSize: 14, fontWeight: "600", color: "#707071", lineHeight: 22 }}>
          {title}
          {info?.length && <Text style={{ fontSize: 12, fontWeight: "400", color: "#58575D", marginTop: "auto" }}> . {info}</Text>}
        </Text >
      }
      summary={<Text style={{ fontSize: 12, fontWeight: "300", color: "#707071", lineHeight: 14 }}> {summary}</Text >}
      onClick={onClick}
    />
  );
}

export default GroupCardComp;