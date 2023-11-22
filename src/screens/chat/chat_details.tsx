import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  TextInput,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BasicHeader } from "../../components/basic-header";
import { SvgXml } from "react-native-svg";
import AlbumModal from "../../components/modals/chat/album-modal";
import CustomTextInput from "../../components/text-input";
import ZedpayModal from "../../components/modals/zedpay/zedpay-modal";

interface Props {
  navigation: any;
}

const ChatDetails: React.FC<Props> = ({ navigation }) => {
  const [isAlbumModalShow, setIsAlbumModalShow] = useState<boolean>(false);
  const [isZedpayModalShow, setIsZedpayModalShow] = useState<boolean>(false);
  const [isToolbarShow, setIsToolbarShow] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const messages = useMemo(
    () => [
      {
        id: 8,
        sender: "Brandon Walls",
        senderAvatar: "brandon_walls.png",
        message: "This space is for options",
        time: "00:32 AM",
        receiver: "Anna Marie",
        type: "message",
        isRead: true,
      },
      {
        id: 7,
        sender: "Anna Marie",
        senderAvatar: "anna_marie.png",
        photo: "anna_marie.png",
        time: "00:32 AM",
        receiver: "Brandon Walls",
        type: "photo",
        isRead: true,
      },
      {
        id: 6,
        sender: "Anna Marie",
        senderAvatar: "anna_marie.png",
        message: "And remove this backend color, not so nice.",
        time: "00:32 AM",
        receiver: "Brandon Walls",
        type: "message",
        isRead: true,
      },
      {
        id: 5,
        sender: "Brandon Walls",
        senderAvatar: "brandon_walls.png",
        time: "00:32 AM",
        receiver: "Anna Marie",
        type: "zedpay",
        amount: "5.01",
        currency: "ZSD",
        isRead: true,
      },
      {
        id: 4,
        sender: "Brandon Walls",
        senderAvatar: "brandon_walls.png",
        message: "This space is for options",
        time: "00:32 AM",
        receiver: "Anna Marie",
        type: "message",
        isRead: true,
      },
      {
        id: 3,
        sender: "Anna Marie",
        senderAvatar: "anna_marie.png",
        photo: "anna_marie.png",
        time: "00:32 AM",
        receiver: "Brandon Walls",
        type: "photo",
        isRead: true,
      },
      {
        id: 2,
        sender: "Anna Marie",
        senderAvatar: "anna_marie.png",
        message: "And remove this backend color, not so nice.",
        time: "00:32 AM",
        receiver: "Brandon Walls",
        type: "message",
        isRead: true,
      },
      {
        id: 1,
        sender: "Brandon Walls",
        senderAvatar: "brandon_walls.png",
        time: "00:32 AM",
        receiver: "Anna Marie",
        type: "zedpay",
        amount: "5.01",
        currency: "ZSD",
        isRead: true,
      },
      {
        id: 10,
        caller: "Anna Marie",
        callerAvatar: "anna_marie.png",
        receiver: "Brandon Walls",
        time: "00:27 AM",
        duration: "27 sec",
        type: "call",
        status: "incoming",
      },
      {
        id: 11,
        caller: "Anna Marie",
        callerAvatar: "anna_marie.png",
        receiver: "Brandon Walls",
        time: "00:27 AM",
        type: "call",
        status: "cancelled",
      },
      {
        id: 12,
        caller: "Anna Marie",
        callerAvatar: "anna_marie.png",
        receiver: "Brandon Walls",
        time: "00:27 AM",
        duration: "27 sec",
        type: "call",
        status: "outgoing",
      },
      {
        id: 13,
        caller: "Anna Marie",
        callerAvatar: "anna_marie.png",
        receiver: "Brandon Walls",
        time: "00:27 AM",
        type: "call",
        status: "missed",
      },
    ],
    []
  );

  return (
    <View className="h-full bg-white flex-column">
      <BasicHeader
        name="Anna Marie"
        hasBack
        backHandler={() => {
          navigation.goBack();
        }}
        rightIcon={
          <TouchableOpacity
            onPress={() => {
              setIsToolbarShow(!isToolbarShow);
            }}
          >
            {!isToolbarShow ? (
              <MaterialIcons name="add" color="white" size={18} />
            ) : (
              <MaterialIcons name="close" color="white" size={18} />
            )}
          </TouchableOpacity>
        }
      />
      {isToolbarShow ? (
        <View className="bg-[#00406E] py-3 px-6 flex-row justify-between border-t border-t-[#2A5C81]">
          <TouchableOpacity onPress={() => {setIsZedpayModalShow(true)}}>
            <Image source={require("../../../assets/images/zedpay_gray.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push("Video-Incoming-Call")}
          >
            <SvgXml
              xml={`
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M9.33333 21C8.96667 21 8.65289 20.8777 8.392 20.6331C8.13067 20.3881 8 20.0938 8 19.75V12.25C8 11.9062 8.13067 11.6121 8.392 11.3675C8.65289 11.1225 8.96667 11 9.33333 11H20C20.3667 11 20.6807 11.1225 20.942 11.3675C21.2029 11.6121 21.3333 11.9062 21.3333 12.25V15.0625L23.4333 13.0938C23.5333 13 23.6529 12.9765 23.792 13.0231C23.9307 13.0702 24 13.1667 24 13.3125V18.6875C24 18.8333 23.9307 18.9296 23.792 18.9762C23.6529 19.0233 23.5333 19 23.4333 18.9062L21.3333 16.9375V19.75C21.3333 20.0938 21.2029 20.3881 20.942 20.6331C20.6807 20.8777 20.3667 21 20 21H9.33333Z" fill="#96B4D1"/>
              <path d="M11.4 0.666667C12.1556 0.422222 12.9164 0.249778 13.6827 0.149333C14.4498 0.0497778 15.2222 0 16 0C18.0889 0 20.0613 0.372 21.9173 1.116C23.7724 1.86089 25.4169 2.89422 26.8507 4.216C28.2836 5.53867 29.4556 7.09422 30.3667 8.88267C31.2778 10.672 31.8222 12.6 32 14.6667H29.3333C29.1778 13.0667 28.7556 11.572 28.0667 10.1827C27.3778 8.79422 26.4942 7.56667 25.416 6.5C24.3387 5.43333 23.1 4.572 21.7 3.916C20.3 3.26089 18.8 2.86667 17.2 2.73333L19.2667 4.8L17.4 6.66667L11.4 0.666667ZM20.6 31.3333C19.8444 31.5778 19.0836 31.7498 18.3173 31.8493C17.5502 31.9498 16.7778 32 16 32C13.9111 32 11.9387 31.628 10.0827 30.884C8.22756 30.1391 6.58356 29.1053 5.15067 27.7827C3.71689 26.4609 2.54444 24.9053 1.63333 23.116C0.722222 21.3276 0.177778 19.4 0 17.3333H2.66667C2.84444 18.9333 3.27244 20.428 3.95067 21.8173C4.628 23.2058 5.50578 24.4333 6.584 25.5C7.66133 26.5667 8.9 27.4276 10.3 28.0827C11.7 28.7387 13.2 29.1333 14.8 29.2667L12.7333 27.2L14.6 25.3333L20.6 31.3333Z" fill="#96B4D1"/>
            </svg>
            `}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push("Incoming-Call")}>
            <SvgXml
              xml={`
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M11.4 0.666667C12.1556 0.422222 12.9164 0.249778 13.6827 0.149333C14.4498 0.0497778 15.2222 0 16 0C18.0889 0 20.0613 0.372 21.9173 1.116C23.7724 1.86089 25.4169 2.89422 26.8507 4.216C28.2836 5.53867 29.4556 7.09422 30.3667 8.88267C31.2778 10.672 31.8222 12.6 32 14.6667H29.3333C29.1778 13.0667 28.7556 11.572 28.0667 10.1827C27.3778 8.79422 26.4942 7.56667 25.416 6.5C24.3387 5.43333 23.1 4.572 21.7 3.916C20.3 3.26089 18.8 2.86667 17.2 2.73333L19.2667 4.8L17.4 6.66667L11.4 0.666667ZM20.6 31.3333C19.8444 31.5778 19.0836 31.7498 18.3173 31.8493C17.5502 31.9498 16.7778 32 16 32C13.9111 32 11.9387 31.628 10.0827 30.884C8.22756 30.1391 6.58356 29.1053 5.15067 27.7827C3.71689 26.4609 2.54444 24.9053 1.63333 23.116C0.722222 21.3276 0.177778 19.4 0 17.3333H2.66667C2.84444 18.9333 3.27244 20.428 3.95067 21.8173C4.628 23.2058 5.50578 24.4333 6.584 25.5C7.66133 26.5667 8.9 27.4276 10.3 28.0827C11.7 28.7387 13.2 29.1333 14.8 29.2667L12.7333 27.2L14.6 25.3333L20.6 31.3333Z" fill="#96B4D1"/>
              <path d="M21.3 22C19.8667 22 18.4696 21.6804 17.1087 21.0413C15.7473 20.4027 14.5418 19.5582 13.492 18.508C12.4418 17.4582 11.5973 16.2527 10.9587 14.8913C10.3196 13.5304 10 12.1333 10 10.7C10 10.5 10.0667 10.3333 10.2 10.2C10.3333 10.0667 10.5 10 10.7 10H13.4C13.5556 10 13.6944 10.05 13.8167 10.15C13.9389 10.25 14.0111 10.3778 14.0333 10.5333L14.4667 12.8667C14.4889 13.0222 14.4862 13.1638 14.4587 13.2913C14.4307 13.4193 14.3667 13.5333 14.2667 13.6333L12.6667 15.2667C13.1333 16.0667 13.7167 16.8167 14.4167 17.5167C15.1167 18.2167 15.8889 18.8222 16.7333 19.3333L18.3 17.7667C18.4 17.6667 18.5307 17.5916 18.692 17.5413C18.8529 17.4916 19.0111 17.4778 19.1667 17.5L21.4667 17.9667C21.6222 18 21.75 18.0749 21.85 18.1913C21.95 18.3082 22 18.4444 22 18.6V21.3C22 21.5 21.9333 21.6667 21.8 21.8C21.6667 21.9333 21.5 22 21.3 22Z" fill="#96B4D1"/>
            </svg>
          `}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View className="px-4 pb-4 bg-[#00406E]">
          <CustomTextInput
            leftIcon={<MaterialIcons name="search" color="white" size={20} />}
            containerStyle="rounded bg-[#96B4D137] text-white border border-transparent h-10 items-center"
            inputStyle="font-Poppins_400 text-white text-sm"
            placeholder="Search"
            placeholderTextColor={"#C9C9C9"}
          />
        </View>
      )}
      <SafeAreaView className="flex-column grow">
        <ScrollView
          className="bg-[#F4F4F4] px-4 py-2.5 h-4"
          ref={scrollViewRef}
          onContentSizeChange={() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
          }}
        >
          {messages.map((message) => {
            if (message.type === "message") {
              if (message.sender === "Brandon Walls") {
                return (
                  <View className="flex-row mb-6" key={message.id}>
                    <View className="flex-row ml-auto items-end justify-end">
                      <View className="bg-white p-2.5 border border-[#E4E4E4] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] max-w-[80%]">
                        <Text className="text-sm font-Poppins_400 text-[#58575D]">
                          {message.message}
                        </Text>
                        <View className="flex-row">
                          <Text className="text-xs text-[#ACABAE] font-Poppins_400 ml-auto leading-[2.2rem]">
                            {message.time}
                          </Text>
                          <View className="ml-2">
                            <MaterialIcons
                              name="done-all"
                              size={13}
                              color="#6B95BB"
                            />
                          </View>
                        </View>
                      </View>
                      <Image
                        className="w-[52px] h-[52px] rounded-full ml-2.5"
                        source={require("../../../assets/images/brandon_walls.png")}
                      />
                    </View>
                  </View>
                );
              } else {
                return (
                  <View className="flex-row mb-6" key={message.id}>
                    <View className="flex-row items-end">
                      <Image
                        className="w-[52px] h-[52px] rounded-full mr-2.5"
                        source={require("../../../assets/images/brandon_walls.png")}
                      />
                      <View className="bg-white p-2.5 border border-[#E4E4E4] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] max-w-[80%]">
                        <Text className="text-sm font-Poppins_400 text-[#58575D]">
                          {message.message}
                        </Text>
                        <View className="flex-row">
                          <Text className="text-xs text-[#ACABAE] font-Poppins_400 ml-auto leading-[2.2rem]">
                            {message.time}
                          </Text>
                          <View className="ml-2">
                            <MaterialIcons
                              name="done-all"
                              size={13}
                              color="#6B95BB"
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }
            } else if (message.type === "photo") {
              if (message.sender === "Brandon Walls") {
                return (
                  <View className="flex-row mb-6" key={message.id}>
                    <View className="flex-row ml-auto items-end">
                      <View className="flex-column">
                        <TouchableOpacity
                          onPress={() => setIsAlbumModalShow(true)}
                        >
                          <Image
                            className="mb-2 rounded-3xl w-[200px] h-[160px]"
                            source={require("../../../assets/images/photo.jpg")}
                          />
                        </TouchableOpacity>
                        <View className="flex-row">
                          <Text className="text-xs text-[#ACABAE] font-Poppins_400 ml-auto leading-[2.2rem]">
                            {message.time}
                          </Text>
                          <View className="ml-2">
                            <MaterialIcons
                              name="done-all"
                              size={13}
                              color="#6B95BB"
                            />
                          </View>
                        </View>
                      </View>
                      <Image
                        className="w-[52px] h-[52px] rounded-full ml-2.5"
                        source={require("../../../assets/images/brandon_walls.png")}
                      />
                    </View>
                  </View>
                );
              } else {
                return (
                  <View className="flex-row mb-6 items-end" key={message.id}>
                    <Image
                      className="w-[52px] h-[52px] rounded-full mr-2.5"
                      source={require("../../../assets/images/brandon_walls.png")}
                    />
                    <View className="flex-column">
                      <TouchableOpacity
                        onPress={() => setIsAlbumModalShow(true)}
                      >
                        <Image
                          source={require("../../../assets/images/photo.jpg")}
                          className="mb-2 rounded-3xl w-[200px] h-[160px]"
                        />
                      </TouchableOpacity>
                      <View className="flex-row">
                        <Text className="text-xs text-[#ACABAE] font-Poppins_400 leading-[2.2rem]">
                          {message.time}
                        </Text>
                        <View className="ml-2">
                          <MaterialIcons
                            name="done-all"
                            size={13}
                            color="#6B95BB"
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }
            } else if (message.type === "zedpay") {
              if (message.sender === "Brandon Walls") {
                return (
                  <View className="flex-row mb-6 items-end" key={message.id}>
                    <View className="flex-row ml-auto items-end justify-end">
                      <View className="flex-column w-[80%] bg-[#F7FBFE] rounded-lg py-6 px-4">
                        <View className="flex-row items-center">
                          <SvgXml
                            xml={`
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                              <mask id="mask0_219_8145" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="27" height="27">
                                <rect x="27" y="27" width="27" height="27" transform="rotate(-180 27 27)" fill="#ED1F24"/>
                              </mask>
                              <g mask="url(#mask0_219_8145)">
                                <path d="M13.5 9.00048L9 13.5005L10.575 15.0755L12.375 13.2755L12.375 18.0005L14.625 18.0005L14.625 13.2755L16.425 15.0755L18 13.5005L13.5 9.00048ZM13.5 2.25048C15.0562 2.25048 16.5187 2.54598 17.8875 3.13698C19.2563 3.72723 20.4469 4.52861 21.4594 5.54111C22.4719 6.55361 23.2733 7.74424 23.8635 9.11299C24.4545 10.4817 24.75 11.9442 24.75 13.5005C24.75 15.0567 24.4545 16.5192 23.8635 17.888C23.2732 19.2567 22.4719 20.4474 21.4594 21.4599C20.4469 22.4724 19.2562 23.2741 17.8875 23.8651C16.5187 24.4554 15.0562 24.7505 13.5 24.7505C11.9437 24.7505 10.4812 24.4554 9.1125 23.8651C7.74375 23.2741 6.55312 22.4724 5.54062 21.4599C4.52812 20.4474 3.72675 19.2567 3.1365 17.888C2.5455 16.5192 2.25 15.0567 2.25 13.5005C2.25 11.9442 2.5455 10.4817 3.1365 9.11298C3.72675 7.74423 4.52812 6.55361 5.54062 5.54111C6.55312 4.52861 7.74375 3.72723 9.1125 3.13698C10.4812 2.54598 11.9437 2.25048 13.5 2.25048Z" fill="#ED1F24"/>
                              </g>
                            </svg>
                            `}
                          />
                          <SvgXml
                            xml={`
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                              <path d="M1.61696 4.21873C1.57323 4.22698 1.53467 4.22294 1.49659 4.21986C1.31202 4.20497 1.12631 4.21048 0.937859 4.18879C0.937859 4.17261 0.937052 4.16015 0.937859 4.14801C0.956736 3.90027 0.975774 3.65269 0.994974 3.40511C1.01337 3.16772 1.03273 2.9305 1.05015 2.69311C1.06371 2.50994 1.07468 2.32643 1.08726 2.14326C1.10017 1.95474 1.11356 1.76638 1.12631 1.57787C1.13244 1.48757 1.13857 1.39712 1.14341 1.30666C1.156 1.07154 1.16842 0.836256 1.18004 0.601135C1.18907 0.420223 1.19682 0.239149 1.20521 0.0582371C1.20585 0.0428644 1.20795 0.0274917 1.20972 0.00936817C1.21908 0.00613182 1.22844 0.000306384 1.23764 0.000306384C1.40285 -0.000179069 1.56791 -1.72512e-05 1.73313 0.000306384C1.73797 0.000306384 1.74297 0.00273365 1.75249 0.00532273C1.76152 0.0195627 1.77201 0.037039 1.78346 0.053868C1.83122 0.12442 1.87559 0.197724 1.92803 0.264555C2.04694 0.416178 2.20619 0.501455 2.39496 0.527832C2.50209 0.542719 2.61035 0.549839 2.71846 0.556473C2.79041 0.560843 2.86286 0.558901 2.93514 0.558901C6.01133 0.558901 9.08753 0.558901 12.1637 0.558901H12.2694C12.3068 0.602753 12.4162 0.79742 12.4593 0.896938C12.3341 1.073 12.2032 1.24905 12.0742 1.42657C11.9464 1.60214 11.8181 1.77739 11.6902 1.9528C11.5606 2.13031 11.4312 2.30782 11.3017 2.48534C11.1723 2.66285 11.0427 2.84053 10.9133 3.01804C10.7839 3.19556 10.6543 3.37307 10.5249 3.55075C10.397 3.72616 10.2692 3.90173 10.1413 4.0773C10.0119 4.25498 9.88247 4.43249 9.75307 4.61017C9.62383 4.78784 9.4946 4.96568 9.36552 5.14335C9.2379 5.31909 9.11011 5.49466 8.98265 5.67039C8.85374 5.84791 8.72498 6.02558 8.59171 6.20925C8.60978 6.21426 8.62092 6.21993 8.63189 6.22009C8.70933 6.2209 8.78678 6.22074 8.86406 6.22074C9.08865 6.22074 9.31308 6.22057 9.53768 6.22106C9.56559 6.22106 9.59447 6.21572 9.62093 6.22899C9.63384 6.2819 9.63706 6.59146 9.62561 6.70473C9.61286 6.70732 9.59866 6.71185 9.58414 6.71282C9.56107 6.71428 9.53768 6.71331 9.51444 6.71331C9.11447 6.71331 8.7145 6.71331 8.31436 6.71331H8.22611C8.03298 6.98015 7.84066 7.24585 7.6522 7.50621C7.64414 7.51123 7.6422 7.51301 7.63978 7.51382C7.63736 7.51479 7.63478 7.5156 7.6322 7.5156C6.83483 7.51625 6.03731 7.51673 5.23994 7.51706C5.22704 7.51706 5.21429 7.51576 5.20138 7.51463C5.19929 7.51447 5.19735 7.51236 5.19348 7.50977C5.18815 7.48372 5.21026 7.46916 5.22284 7.45168C5.38209 7.23193 5.54214 7.01267 5.70187 6.79325C5.71688 6.77253 5.73076 6.75117 5.74915 6.72431C5.73253 6.71962 5.72172 6.7146 5.71059 6.71396C5.68477 6.71266 5.65896 6.71331 5.63314 6.71331C4.72219 6.71331 3.81124 6.71331 2.90013 6.71331C2.86689 6.71331 2.83366 6.71266 2.79913 6.71234C2.78202 6.65716 2.79154 6.60538 2.78993 6.55457C2.78832 6.50019 2.78961 6.44582 2.78961 6.39145C2.78961 6.34 2.78961 6.28854 2.78961 6.2332C2.80736 6.2285 2.82123 6.22252 2.83543 6.22155C2.86108 6.21977 2.88706 6.22074 2.91288 6.22074C3.94516 6.22074 4.97744 6.2209 6.00972 6.22041C6.14509 6.22041 6.10653 6.23676 6.18413 6.12979C7.30015 4.59528 8.41069 3.05672 9.51202 1.51152C9.52832 1.4887 9.54381 1.46524 9.55817 1.44404C9.55139 1.42317 9.53671 1.42721 9.52493 1.42673C9.5017 1.42592 9.47846 1.4264 9.45523 1.4264C8.17787 1.4264 6.90034 1.4264 5.62298 1.4264C5.42936 1.4264 5.23575 1.42495 5.0423 1.43029C4.76382 1.43789 4.48518 1.44712 4.20702 1.46346C3.95984 1.47786 3.71363 1.50408 3.47016 1.55246C3.3385 1.57868 3.2091 1.61266 3.08326 1.66007C2.86254 1.74324 2.68006 1.87755 2.53839 2.06688C2.38947 2.26608 2.25959 2.47725 2.15165 2.70153C2.00209 3.01189 1.8843 3.33472 1.78121 3.66289C1.73087 3.82308 1.68601 3.98506 1.63842 4.14607C1.6318 4.16824 1.6247 4.19025 1.61599 4.21824L1.61696 4.21873Z" fill="black"/>
                              <path d="M6.20708 9.51247C6.15739 9.59289 6.10672 9.65762 6.05945 9.72477C6.01185 9.79241 5.96345 9.85941 5.91537 9.92672C5.86729 9.99404 5.81921 10.0614 5.77113 10.1287C5.72305 10.196 5.67497 10.2633 5.62705 10.3306C5.57897 10.3979 5.53105 10.4654 5.48313 10.5327C5.43666 10.5979 5.39003 10.6632 5.34356 10.7285C5.29565 10.7958 5.24773 10.8633 5.19981 10.9308C5.15189 10.9983 5.10397 11.0656 5.05605 11.1331C5.00813 11.2005 4.96021 11.2679 4.91229 11.3353C4.86437 11.4028 4.81661 11.4703 4.76886 11.5378C4.7211 11.6053 4.67334 11.6729 4.62558 11.7404C4.57782 11.8079 4.53007 11.8753 4.48231 11.943C4.43455 12.0104 4.38695 12.0781 4.3392 12.1457C4.29144 12.2134 4.24384 12.2808 4.19624 12.3485C4.14865 12.4161 4.10105 12.4838 4.05329 12.5514C4.0057 12.619 3.95794 12.6867 3.91034 12.7543C3.8642 12.8199 3.81822 12.8856 3.77223 12.9511C3.72464 13.0187 3.6772 13.0865 3.62976 13.1542C3.58233 13.222 3.53489 13.2896 3.48746 13.3574C3.44002 13.4252 3.39259 13.493 3.34515 13.5607C3.29772 13.6285 3.25012 13.6961 3.20317 13.7641C3.1567 13.8312 3.10765 13.8969 3.05974 13.9731C3.09975 13.9801 3.12927 13.987 3.15928 13.99C3.28513 14.0019 3.41082 14.0149 3.53699 14.0235C3.77643 14.0395 4.01586 14.0539 4.25546 14.0668C4.40228 14.0748 4.54927 14.0809 4.69625 14.084C5.12704 14.0932 5.55783 14.1019 5.98862 14.1081C6.29308 14.1125 6.59753 14.115 6.90199 14.1134C7.23743 14.1116 7.57286 14.1066 7.90813 14.0982C8.1324 14.0927 8.35683 14.0817 8.58078 14.0681C8.84587 14.0521 9.11063 14.0291 9.37379 13.9916C9.66759 13.9497 9.95818 13.8924 10.2388 13.7921C10.5366 13.6856 10.8048 13.5301 11.0311 13.3064C11.1528 13.1862 11.2593 13.053 11.3595 12.9147C11.5494 12.6521 11.7062 12.3698 11.8477 12.0789C12.0163 11.7323 12.1612 11.3756 12.2977 11.0154C12.3104 10.9818 12.3236 10.9484 12.3378 10.9117C12.4145 10.9141 12.4855 10.9374 12.5579 10.9507C12.6313 10.9641 12.7044 10.9806 12.7775 10.9959C12.8504 11.0109 12.9234 11.0259 12.9974 11.0413C13.0047 11.0743 12.9948 11.1018 12.9897 11.1285C12.9034 11.5672 12.8167 12.0061 12.7288 12.4444C12.592 13.1262 12.4563 13.8081 12.2957 14.4848C12.263 14.623 12.2257 14.7604 12.1902 14.8979C12.1865 14.9126 12.1805 14.9267 12.1744 14.9442C12.1557 14.9461 12.1384 14.9487 12.1208 14.9495C12.1002 14.9505 12.0795 14.9499 12.0589 14.9499C8.14176 14.9499 4.22464 14.9499 0.307522 14.9499C0.271704 14.9499 0.235886 14.9494 0.197163 14.9491C0.131012 14.8317 0.0664739 14.7173 0 14.5994C1.23719 12.9016 2.47777 11.2093 3.71108 9.52315C3.72109 9.51571 3.72302 9.51392 3.72528 9.51279C3.72754 9.51166 3.72996 9.51036 3.73238 9.51036C4.54265 9.50956 5.35276 9.50891 6.16303 9.50842C6.17304 9.50842 6.18304 9.5102 6.20692 9.51263L6.20708 9.51247Z" fill="black"/>
                              <path d="M9.63054 8.24704C9.63941 8.35691 9.63635 8.66194 9.62618 8.71906C9.62425 8.721 9.6228 8.72327 9.6207 8.72456C9.6186 8.72569 9.6157 8.72634 9.61328 8.72634C7.35526 8.72715 5.09725 8.7278 2.83923 8.72828C2.82907 8.72828 2.81874 8.72618 2.80874 8.72456C2.80664 8.72424 2.80487 8.72149 2.79664 8.71485C2.79002 8.66712 2.79454 8.61307 2.79373 8.55951C2.79293 8.50772 2.79309 8.45594 2.79373 8.40416C2.79438 8.35044 2.79034 8.29639 2.79631 8.2493C2.8039 8.24154 2.80551 8.23927 2.80761 8.23797C2.80971 8.23684 2.81261 8.2362 2.81503 8.2362C5.07305 8.23539 7.33106 8.23474 9.58908 8.23425C9.59924 8.23425 9.60957 8.23619 9.61973 8.23781C9.62183 8.23814 9.6236 8.24089 9.6307 8.2472L9.63054 8.24704Z" fill="black"/>
                            </svg>
                            `}
                            className="mx-1"
                          />
                          <Text className="text-lg text-black font-Poppins_400 top-[2px] mr-auto">
                            5.01
                          </Text>
                          <Image
                            source={require("../../../assets/images/zedpay_simple.png")}
                          />
                        </View>
                        <View className="w-full h-[1px] bg-[#C9C9C9] mt-5 mb-2"></View>
                        <View className="flex-row">
                          <Text className="text-xs text-[#6F94A6] font-Poppins_400 mr-2">
                            Balance sent successfully
                          </Text>
                          <MaterialIcons
                            name="check"
                            color={"#219A3D"}
                            size={16}
                          />
                        </View>
                        <View className="flex-row mt-1">
                          <Text className="text-xs text-[#ACABAE] font-Poppins_400 leading-[2.2rem] ml-auto">
                            {message.time}
                          </Text>
                          <View className="ml-2">
                            <MaterialIcons
                              name="done-all"
                              size={13}
                              color="#6B95BB"
                            />
                          </View>
                        </View>
                      </View>
                      <Image
                        className="w-[52px] h-[52px] rounded-full ml-2.5"
                        source={require("../../../assets/images/brandon_walls.png")}
                      />
                    </View>
                  </View>
                );
              }
            } else if (message.type === "call") {
              switch (message.status) {
                case "incoming":
                  return (
                    <View
                      className="flex-row justify-end mb-6 items-center"
                      key={message.id}
                    >
                      <View className="rounded-full border border-[#96B4D1] py-1 px-4 flex-row items-center justify-between -right-[36px] w-[220px] bg-[#F2F1F6]">
                        <MaterialIcons name="call" size={24} color="#229245" />
                        <View className="flex-col mr-8">
                          <Text className="text-sm font-Poppins_400 text-black">
                            Incoming Call
                          </Text>
                          <Text className="text-xs font-Poppins_400 text-[#ACACAC]">{`${message.time}, ${message.duration}`}</Text>
                        </View>
                      </View>
                      <Image
                        source={require("../../../assets/images/brandon_walls.png")}
                        className="w-[52px] h-[52px] rounded-full"
                      />
                    </View>
                  );
                case "outgoing":
                  return (
                    <View
                      className="flex-row justify-end mb-6 items-center"
                      key={message.id}
                    >
                      <View className="rounded-full border border-[#96B4D1] py-1 px-4 flex-row items-center justify-between -right-[36px] w-[220px] bg-[#F2F1F6]">
                        <MaterialIcons name="call" size={24} color="#229245" />
                        <View className="flex-col mr-8">
                          <Text className="text-sm font-Poppins_400 text-[#229245]">
                            Outgoing Call
                          </Text>
                          <Text className="text-xs font-Poppins_400 text-[#ACACAC]">{`${message.time}, ${message.duration}`}</Text>
                        </View>
                      </View>
                      <Image
                        source={require("../../../assets/images/brandon_walls.png")}
                        className="w-[52px] h-[52px] rounded-full"
                      />
                    </View>
                  );
                case "missed":
                  return (
                    <View
                      className="flex-row justify-start mb-6 items-center"
                      key={message.id}
                    >
                      <Image
                        source={require("../../../assets/images/brandon_walls.png")}
                        className="w-[52px] h-[52px] rounded-full z-10"
                      />
                      <View className="rounded-full border border-[#96B4D1] py-1 px-4 flex-row items-center justify-between -left-[36px] w-[220px] bg-white">
                        <View className="flex-col ml-8">
                          <Text className="text-sm font-Poppins_400 text-[#ED1F24]">
                            Missed Call
                          </Text>
                          <Text className="text-xs font-Poppins_400 text-[#ACACAC]">{message.time}</Text>
                        </View>
                        <View className="rotate-90">
                          <MaterialIcons name="phone-disabled" size={24} color="#ED1F24"/>
                        </View>
                      </View>
                    </View>
                  );
                case "cancelled":
                  return (
                    <View
                      className="flex-row justify-start mb-6 items-center"
                      key={message.id}
                    >
                      <Image
                        source={require("../../../assets/images/brandon_walls.png")}
                        className="w-[52px] h-[52px] rounded-full z-10"
                      />
                      <View className="rounded-full border border-[#96B4D1] py-1 px-4 flex-row items-center justify-between -left-[36px] w-[220px] bg-white">
                        <View className="flex-col ml-8">
                          <Text className="text-sm font-Poppins_400 text-black">
                            Cancelled Call
                          </Text>
                          <Text className="text-xs font-Poppins_400 text-[#ACACAC]">{message.time}</Text>
                        </View>
                        <View className="rotate-90">
                          <MaterialIcons name="phone-disabled" size={24} color="#ED1F24"/>
                        </View>
                      </View>
                    </View>
                  );
              }
            }
          })}
        </ScrollView>
        <View className="border-t border-t-[#E5E5E5] bg-white py-3 px-4 flex-row items-center">
          <TouchableOpacity className="rotate-[225deg]">
            <MaterialIcons name="attach-file" color="#9A9A9A" size={24} />
          </TouchableOpacity>
          <TouchableOpacity className="ml-1.5">
            <MaterialCommunityIcons
              name="camera-outline"
              color="#16406B"
              size={24}
            />
          </TouchableOpacity>
          <TextInput
            className="py-3.5 px-4 rounded-full border border-[#E8E8E8] bg-[#F6F6F6] grow font-Poppins_500 text-sm mx-2.5"
            placeholder="Enter a message"
            placeholderTextColor={"#BDBDBD"}
          />
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="microphone-outline"
              color="#16406B"
              size={24}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <AlbumModal
        isShow={isAlbumModalShow}
        onClose={() => setIsAlbumModalShow(false)}
      ></AlbumModal>
      <ZedpayModal
        isShow={isZedpayModalShow}
        onClose={() => setIsZedpayModalShow(false)}
        ></ZedpayModal>
    </View>
  );
};

export default ChatDetails;
