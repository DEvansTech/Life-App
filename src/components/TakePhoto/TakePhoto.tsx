import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { launchImageLibrary } from 'react-native-image-picker';

interface TakePhotoProps {
  handleUpload?: (uri: string) => void;
}

const TakePhotoComp: React.FC<TakePhotoProps> = ({
  handleUpload
}) => {
  const [selectedImage, setSelectedImage] = useState("");
  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      // aspectRatio: ''
      quality: 1,
    });

    if (!result.didCancel) {
      const uri = result.assets ? result.assets[0].uri! : "";
      setSelectedImage(uri);
      if (handleUpload) handleUpload(uri);
    }
  };
  return (
    <TouchableOpacity style={{ backgroundColor: "#F4F4F4" }} className="w-[74px] h-[74px] items-center justify-center rounded-full" onPress={pickImage}>
      <FontAwesome name={"camera"} color={"#2A5C81"} size={37} />
    </TouchableOpacity>
  );
}

export default TakePhotoComp;