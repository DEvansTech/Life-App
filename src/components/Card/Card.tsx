import React from "react";
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { Card } from "src/types";

interface CardCompProps extends Card { }

const CardComp: React.FC<CardCompProps> = ({
  leftNode,
  icon,
  title,
  summary,
  rightNode,
  onClick
}) => {
  return (
    <TouchableOpacity className="flex flex-row justify-between px-4 py-1.5" onPress={onClick}>
      <View className="my-auto">{leftNode}</View>
      <View className="my-auto rounded-full">{icon}</View>
      <View className="my-auto ml-3 flex-1">
        {title}
        {summary}
      </View>
      <View className="my-auto">{rightNode}</View>
    </TouchableOpacity>
  );
}

// interface CardCompProps extends Card, TouchableOpacityProps {
//   type?: "person" | "group";
//   size?: number;
//   icon?: React.ReactNode;
//   title?: string;
//   titleSize?: number;
//   titleColor?: string;
//   info?: string;
//   comment?: string;
//   rightNode?: React.ReactNode;
// }

// const CardComp: React.FC<CardCompProps> = ({
//   size = 48,
//   icon,
//   title,
//   titleSize = 16,
//   titleColor = '#58575D',
//   info,
//   comment,
//   rightNode,
//   ...rest
// }) => {
//   return (
//     <View className="flex flex-row justify-between px-4">
//       <View>
//         <TouchableOpacity className="w-full flex flex-row items-center justify-between" {...rest}>
//           <View className="flex flex-row items-center">
//             {icon}
//             <View className="ml-[18px]">
//               <View className="my-auto">
//                 <Text className={`${titleColor === '#2A5C81' ? 'text-primary' : `text-[${titleColor}]`} text-[${titleSize}px] font-bold leading-snug font-poppins`}>
//                   {title} {info ? ". " : ""}
//                   {info && <Text className="font-poppins text-[12px] text-[#707071] font-normal">{info}</Text>}
//                 </Text>
//                 {comment && <Text>{comment}</Text>}
//               </View>
//             </View>
//           </View>
//         </TouchableOpacity >
//       </View>

//       <View className="my-auto">{rightNode}</View>
//     </View>

//   );
// };

export default CardComp;