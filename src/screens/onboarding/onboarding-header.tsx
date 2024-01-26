import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const OnboardingHeader = ({navigation} : any) => {
    navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.push('Landing');
            }}
        >
            <Ionicons name="chevron-back" size={28} color="#2A5C81" />
        </TouchableOpacity>
    )
}