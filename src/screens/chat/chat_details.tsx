import React, { useMemo, useRef, useState } from "react";
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  TextInput,
  Platform,
  StyleSheet,
  FlatList
} from "react-native";
import Sound from 'react-native-sound';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BasicHeader } from "../../components/basic-header";
import { SvgXml } from "react-native-svg";
import AlbumModal from "../../components/modals/chat/album-modal";
import CustomTextInput from "../../components/text-input";
import ZedpayModal from "../../components/modals/zedpay/zedpay-modal";
import * as DocumentPicker from 'expo-document-picker';
import ImageCropPicker from "react-native-image-crop-picker";
import * as RNFS from 'react-native-fs';
import { Entypo, Ionicons } from '@expo/vector-icons';

import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
  OutputFormatAndroidType,
 } from 'react-native-audio-recorder-player';
import { useKeyboardVisible } from "../../hooks/useKeyboardVisible";
import { DEVICE_HEIGHT } from "../../constants/sizes";
import { formatAudioDuration, requestAudioRecordPermission } from "../../utils/helpers";
import { PRIMARY_COLOR } from "../../constants/colors";
import { MessageType, UserType } from "../../@types";
import SentMessageBubble from "../../components/SentMessageBubble/SentMessageBubble";
import ReceivedMessageBubble from "../../components/ReceivedMessageBubble/ReceivedMessageBubble";

interface Props {
  navigation: any;
}

Sound.setCategory('Playback', true);
const audioRecorderPlayer = new AudioRecorderPlayer();

const ChatDetails: React.FC<Props> = ({ navigation }) => {
  const [isAlbumModalShow, setIsAlbumModalShow] = useState<boolean>(false);
  const [isZedpayModalShow, setIsZedpayModalShow] = useState<boolean>(false);
  const [isToolbarShow, setIsToolbarShow] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView>(null);

  // Audio record states
  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('00:00:00');
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [recording, setRecording] = useState(false);
  const [recordingPaused, setRecordingPaused] = useState(false);
  const [recordingStopped, setRecordingStopped] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<any>({uri: ''});
  const [audio, setAudio] = useState<any>(undefined);
  const [playing, setPlaying] = useState(false);

  const [message, setMessage] = useState('');

  const [image, setImage] = useState<any>();
  const [file, setFile] = useState<DocumentPicker.DocumentPickerResult>();

  const { isKeyboardVisible, keyboardHeight } = useKeyboardVisible()

  // const messages = useMemo(
  //   () => [
  //     {
  //       id: 8,
  //       sender: "Brandon Walls",
  //       senderAvatar: "brandon_walls.png",
  //       message: "This space is for options",
  //       time: "00:32 AM",
  //       receiver: "Anna Marie",
  //       type: "message",
  //       isRead: true,
  //     },
  //     {
  //       id: 7,
  //       sender: "Anna Marie",
  //       senderAvatar: "anna_marie.png",
  //       photo: "anna_marie.png",
  //       time: "00:32 AM",
  //       receiver: "Brandon Walls",
  //       type: "photo",
  //       isRead: true,
  //     },
  //     {
  //       id: 6,
  //       sender: "Anna Marie",
  //       senderAvatar: "anna_marie.png",
  //       message: "And remove this backend color, not so nice.",
  //       time: "00:32 AM",
  //       receiver: "Brandon Walls",
  //       type: "message",
  //       isRead: true,
  //     },
  //     {
  //       id: 5,
  //       sender: "Brandon Walls",
  //       senderAvatar: "brandon_walls.png",
  //       time: "00:32 AM",
  //       receiver: "Anna Marie",
  //       type: "zedpay",
  //       amount: "5.01",
  //       currency: "ZSD",
  //       isRead: true,
  //     },
  //     {
  //       id: 4,
  //       sender: "Brandon Walls",
  //       senderAvatar: "brandon_walls.png",
  //       message: "This space is for options",
  //       time: "00:32 AM",
  //       receiver: "Anna Marie",
  //       type: "message",
  //       isRead: true,
  //     },
  //     {
  //       id: 3,
  //       sender: "Anna Marie",
  //       senderAvatar: "anna_marie.png",
  //       photo: "anna_marie.png",
  //       time: "00:32 AM",
  //       receiver: "Brandon Walls",
  //       type: "photo",
  //       isRead: true,
  //     },
  //     {
  //       id: 2,
  //       sender: "Anna Marie",
  //       senderAvatar: "anna_marie.png",
  //       message: "And remove this backend color, not so nice.",
  //       time: "00:32 AM",
  //       receiver: "Brandon Walls",
  //       type: "message",
  //       isRead: true,
  //     },
  //     {
  //       id: 1,
  //       sender: "Brandon Walls",
  //       senderAvatar: "brandon_walls.png",
  //       time: "00:32 AM",
  //       receiver: "Anna Marie",
  //       type: "zedpay",
  //       amount: "5.01",
  //       currency: "ZSD",
  //       isRead: true,
  //     },
  //     {
  //       id: 10,
  //       caller: "Anna Marie",
  //       callerAvatar: "anna_marie.png",
  //       receiver: "Brandon Walls",
  //       time: "00:27 AM",
  //       duration: "27 sec",
  //       type: "call",
  //       status: "incoming",
  //     },
  //     {
  //       id: 11,
  //       caller: "Anna Marie",
  //       callerAvatar: "anna_marie.png",
  //       receiver: "Brandon Walls",
  //       time: "00:27 AM",
  //       type: "call",
  //       status: "cancelled",
  //     },
  //     {
  //       id: 12,
  //       caller: "Anna Marie",
  //       callerAvatar: "anna_marie.png",
  //       receiver: "Brandon Walls",
  //       time: "00:27 AM",
  //       duration: "27 sec",
  //       type: "call",
  //       status: "outgoing",
  //     },
  //     {
  //       id: 13,
  //       caller: "Anna Marie",
  //       callerAvatar: "anna_marie.png",
  //       receiver: "Brandon Walls",
  //       time: "00:27 AM",
  //       type: "call",
  //       status: "missed",
  //     },
  //   ],
  //   []
  // );

  const [messages, setMessages] = useState<(MessageType | any)[]>([]);

  const pickDocument = async () => {
    try {
      await DocumentPicker.getDocumentAsync({ })
      .then((file)=>{
        console.log(file);
        setFile(file)
      })
    } catch (error: unknown) {
      console.log(error);
    }
  }

  const openCamera = () => {
    try {
      ImageCropPicker.openCamera({
        width: 300,
        height: 400,
        // cropping: true,
      }).then(image => {
        console.log(image);
        setImage(image)
      })
      .catch((error)=>{
        console.log(error);
      })
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  //   These deal with recording of audio.
  //  ======== Starts here =========

  const setStatesToRecording = () => {
    setRecording(true);
    setRecordingPaused(false);
    setRecordingStopped(false);
  };

  const setStatesToRecordingPaused = () => {
    setRecording(true);
    setRecordingPaused(true);
  };

  const setStatesToRecordingResume = () => {
    setRecording(true);
    setRecordingPaused(false);
    setRecordingStopped(false);
  };

  const setStatesToRecordingStopped = () => {
    setRecording(false);
    setRecordingPaused(false);
    setRecordingStopped(true);
  };

  const onStartRecord =  React.useCallback(async () => {
    requestAudioRecordPermission();
    const path = Platform.select({
      ios: undefined,
      android: undefined,
    });

    const audioSet: AudioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
      OutputFormatAndroid: OutputFormatAndroidType.AAC_ADTS,
    };

    const result = await audioRecorderPlayer.startRecorder(path, audioSet);
    setStatesToRecording();
    audioRecorderPlayer.addRecordBackListener(e => {      
      setRecordSecs(e.currentPosition);
      setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      setCurrentDurationSec(e.currentPosition)
      return;
    });
  }, []);

  const onPauseRecord = async (): Promise<void> => {
    try {
      setStatesToRecordingPaused();
      const r = await audioRecorderPlayer.pauseRecorder();
      //console.log(r);
    } catch (err) {
      //console.log('pauseRecord', err);
    }
  };

  const onResumeRecord = async (): Promise<void> => {
    setStatesToRecordingResume();
    await audioRecorderPlayer.resumeRecorder();
  };

  const onStopRecord = React.useCallback(async () => {
    setStatesToRecordingStopped();
    const result = await audioRecorderPlayer.stopRecorder();
    setRecordedAudio({uri: result});
    audioRecorderPlayer.removeRecordBackListener();
    RNFS.stat(result)
      .then(audioData => {
        RNFS.readFile(audioData.path, 'base64')
          .then(base64String => {
            let audio = {
              name: audioData.path.split('/').pop(),
              size: audioData.size,
              type: 'audio/' + audioData.path.split('/').pop()!.split('.').pop(),
              data: base64String,
            };
            setAudio(audio);
          })
          .catch(err => {
            //console.log(err.message);
          });
      })
      .catch(err => {
        //console.log(err.message);
      });
  }, []);

  const onStartPlay = React.useCallback(async () => {
    const msg = await audioRecorderPlayer.startPlayer();
    setPlaying(true);
    audioRecorderPlayer.addPlayBackListener(e => {
      if (e.currentPosition === e.duration) {
          audioRecorderPlayer.stopPlayer();
          setPlaying(false)
          setCurrentPositionSec(0)
      }
      setCurrentPositionSec(e.currentPosition);
      setCurrentDurationSec(e.duration);
      setPlayTime(
      parseInt(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition))),
      );
      setDuration(parseInt(audioRecorderPlayer.mmssss(Math.floor(e.duration))));
      return;
    });
  }, []);

  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
    setPlaying(false)
  };

  const onStopPlay = async () => {
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };
  //  ======== Ends here =========
  

  const sendMessage = () => {
    console.log(message);
    let newMessage = {
      id: message.length,
      sender: "Brandon Walls",
      senderAvatar: "brandon_walls.png",
      message,
      time: new Date(Date.now()).toLocaleTimeString(),
      receiver: "Anna Marie",
      type: "message",
      isRead: false,
    }

    let newMessages = [...messages, newMessage]
    setMessages(newMessages)
    setMessage('')
  }

  const renderItem = ({ item }: { item: any | MessageType }) => {
    return <SentMessageBubble item={item} />
  }

  return (
    <View style={{ flex: 1 }}>
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
          <TouchableOpacity
            onPress={() => {
              setIsZedpayModalShow(true);
            }}
          >
            <Image source={require("../../../assets/images/zedpay_gray.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push("On-Call-Video")}
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
          <TouchableOpacity onPress={() => navigation.push("On-Call-Audio")}>
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
      <View style={{ height: DEVICE_HEIGHT * 0.65 }}>
        <FlatList
          style={{ paddingHorizontal: 20, width: "100%" }}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item)=>item.id.toString()}
        />
      </View>
      {!recording && (
        <View
          className={`border-t border-t-[#E5E5E5] bg-white py-3 px-4 flex-row items-center`}
          style={{
            bottom: isKeyboardVisible ? keyboardHeight : 0,
            position: "absolute",
          }}
        >
          <TouchableOpacity className="rotate-[225deg]" onPress={pickDocument}>
            <MaterialIcons name="attach-file" color="#9A9A9A" size={24} />
          </TouchableOpacity>
          <TouchableOpacity className="ml-1.5" onPress={openCamera}>
            <MaterialCommunityIcons
              name="camera-outline"
              color="#16406B"
              size={24}
            />
          </TouchableOpacity>
          <TextInput
            className="h-10 px-4 rounded-full border border-[#E8E8E8] bg-[#F6F6F6] grow font-Poppins_500 text-sm mx-2.5"
            placeholder="Enter a message"
            placeholderTextColor={"#BDBDBD"}
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <TouchableOpacity
            onPress={message.length > 0 ? sendMessage : onStartRecord}
          >
            <MaterialCommunityIcons
              name={message.length > 0 ? "send" : "microphone-outline"}
              color="#16406B"
              size={24}
            />
          </TouchableOpacity>
        </View>
      )}
      {recording && (
        <View style={styles.recording}>
          <>
            {recordingPaused && (
              <View style={styles.iconAndText}>
                <Entypo
                  name="controller-record"
                  size={24}
                  color={PRIMARY_COLOR}
                  onPress={onResumeRecord}
                />
                <Text style={styles.text}>Resume record</Text>
              </View>
            )}
            {!recordingPaused && (
              <View style={styles.iconAndText}>
                <Ionicons
                  name="pause"
                  size={24}
                  color={PRIMARY_COLOR}
                  onPress={onPauseRecord}
                />
                <Text style={styles.text}>Pause record</Text>
              </View>
            )}
            <Text>{formatAudioDuration(recordSecs / 1000)}</Text>
            <View style={styles.iconAndText}>
              <Ionicons
                name="stop"
                size={24}
                color={PRIMARY_COLOR}
                onPress={onStopRecord}
              />
              <Text style={styles.text}>Stop Record</Text>
            </View>
          </>
        </View>
      )}
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

const styles = StyleSheet.create({
  recording: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: "95%",
    borderRadius: 5,
    justifyContent: "space-around",
    alignSelf: 'center',
  },
  iconAndText: {
    width: "25%",
    alignItems: "center",
  },
  text: {
    fontSize: 10,
  },
});
