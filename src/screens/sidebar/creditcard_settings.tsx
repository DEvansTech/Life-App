import React, { useMemo } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Switch,
} from "react-native";
import { BasicHeader } from "../../components/basic-header";
import { SvgXml } from "react-native-svg";

interface Props {
  navigation: any;
}

const CreditCardSettingsView: React.FC<Props> = ({ navigation }) => {
  const creditCards = useMemo(
    () => [
      {
        id: 1,
        card_serial: "165 1555 1445556696",
        exp_date: "December 2027",
        cvv: "1323",
        status: "inactive",
      },
      {
        id: 2,
        card_serial: "165 1555 1445556696",
        exp_date: "December 2027",
        cvv: "1323",
        status: "active",
      },
    ],
    []
  );
  return (
    <View className="bg-white h-full">
      <BasicHeader
        name="Credit Card Settings"
        hasBack
        backHandler={() => navigation.goBack()}
      />
      <SafeAreaView>
        <ScrollView className="px-6 py-4">
          {creditCards.map((card) => (
            <View className="rounded-md border border-[#96B4D159] bg-[#F7FBFE] py-3 px-4 mb-2" key={card.id}>
              <View className="flex-row items-center">
                <SvgXml
                  xml={`
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="11" viewBox="0 0 36 11" fill="none">
                        <g clip-path="url(#clip0_229_8729)">
                          <path d="M18.6183 3.50256C18.5978 5.02878 20.0616 5.88042 21.1642 6.38681C22.2971 6.90633 22.6776 7.23951 22.6731 7.70416C22.6647 8.41519 21.7695 8.72902 20.9318 8.74121C19.4702 8.76255 18.6204 8.36933 17.9449 8.07193L17.4184 10.3937C18.0962 10.6881 19.3513 10.9448 20.6528 10.9561C23.7078 10.9561 25.7065 9.5348 25.7174 7.33122C25.7293 4.53457 21.6128 4.37978 21.6409 3.12975C21.6506 2.75072 22.0344 2.34624 22.8753 2.24339C23.2916 2.19144 24.4406 2.15168 25.7434 2.71705L26.2547 0.47067C25.5541 0.23026 24.6537 5.43594e-05 23.5326 5.43594e-05C20.6571 5.43594e-05 18.6346 1.44066 18.6183 3.50256ZM31.1678 0.193548C30.61 0.193548 30.1399 0.500223 29.9301 0.970838L25.566 10.7911H28.6189L29.2264 9.20878H32.9569L33.3093 10.7911H36L33.652 0.193548H31.1678ZM31.5949 3.05633L32.4759 7.03581H30.0631L31.5949 3.05633ZM14.9169 0.193681L12.5106 10.7909H15.4197L17.8249 0.193416H14.9169M10.6134 0.193416L7.58545 7.40663L6.36061 1.27354C6.21689 0.588886 5.64933 0.193548 5.01905 0.193548H0.0693281L0 0.501284C1.01616 0.70909 2.17069 1.04426 2.87016 1.40289C3.29822 1.62196 3.42028 1.81346 3.56091 2.33404L5.8808 10.7911H8.955L13.6682 0.193548H10.6134" fill="url(#paint0_linear_229_8729)"/>
                        </g>
                        <defs>
                          <linearGradient id="paint0_linear_229_8729" x1="16.5506" y1="11.1758" x2="16.8495" y2="-0.0771395" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#222357"/>
                            <stop offset="1" stop-color="#254AA5"/>
                          </linearGradient>
                          <clipPath id="clip0_229_8729">
                            <rect width="36" height="11" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg> 
                  `}
                />
                {card.status === "inactive" ? (
                  <TouchableOpacity className="rounded-full py-1 px-2.5 flex items-center justify-center bg-[#229245] ml-auto">
                    <Text className="text-sm text-white font-Poppins_400">
                      Active
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <Text className="text-sm text-[#565656] font-Poppins_400 ml-auto">
                    Active Now
                  </Text>
                )}
                <TouchableOpacity className="ml-3.5">
                  <Text className="text-sm text-[#2A5C81] font-Poppins_400">
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
              <Text className="text-base font-Poppins_400">
                {card.card_serial}
              </Text>
              <View className="flex-row justify-between mt-10">
                <Text className="text-sm text-[#565656] font-Poppins_400">
                  {card.exp_date}
                </Text>
                <Text className="text-sm text-[#565656] font-Poppins_400">
                  CVV: {card.cvv}
                </Text>
              </View>
            </View>
          ))}
          <TouchableOpacity className="mt-[30px]">
            <Text className="text-sm text-[#2A5C81] font-Poppins_600">+ Add New</Text>
          </TouchableOpacity>
          <View className="mt-7">
            <Text className="text-black text-sm font-Poppins_400 mb-4">Other settings</Text>
            <View className="rounded-md border border-[#2A5C81] py-2.5 px-4 flex-row justify-between items-center mb-2">
              <Text className="text-sm text-black font-Poppins_400">Online Transaction</Text>
              <Switch className="h-3"/>
            </View>
            <View className="rounded-md border border-[#2A5C81] py-2.5 px-4 flex-row justify-between items-center">
              <Text className="text-sm text-black font-Poppins_400">Send or receive Money</Text>
              <Switch className="h-3"/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default CreditCardSettingsView;
