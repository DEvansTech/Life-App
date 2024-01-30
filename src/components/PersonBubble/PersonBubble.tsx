import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  PressableProps
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface PersonBubbleProps extends PressableProps {
  avatar?: string,
  name: string
}

const PersonBubble: React.FC<PersonBubbleProps> = ({
  avatar,
  name,
  ...rest
}) => {
  return (
    <View className="flex flex-col items-center">
      <Image className="w-[48] h-[48] rounded-full" source={{ uri: avatar }} />
      <View className="left-[30] top-[25] absolute">
        <Pressable className="w-5 h-5" {...rest}>
          <View className="w-5 h-5 flex justify-center items-center bg-rose-600 rounded-full border-2 border-white">
            <Text className="z-5">
              <FontAwesome name={"times"} color={"#fff"} size={10} />
            </Text>
          </View>
        </Pressable>
      </View>
      <View>
        <Text className="text-black pt-1.5 text-xs leading-none font-poppins font-medium">
          {name}
        </Text>
      </View>
    </View >
  );
}

export default PersonBubble;