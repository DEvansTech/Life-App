import React from "react";
import { TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const TakePhotoComp = () => {
  return (
    <TouchableOpacity style={{ backgroundColor: "#F4F4F4" }} className="w-[74px] h-[74px] items-center justify-center rounded-full">
      <FontAwesome name={"camera"} color={"#2A5C81"} size={37} />
    </TouchableOpacity>
  );
}

export default TakePhotoComp;