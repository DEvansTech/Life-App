import { View, Text, Image } from "react-native";
import React from "react";

import styles from "./SentMessageBubble.style";
import MessageStatus from "../MessageStatus/MessageStatus";
import { MessageType } from "../../@types";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

const SentMessageBubble = ({ item }: { item: MessageType }) => {
  const {} = item;

  return (
    <View style={styles.container}>
      <View style={styles.avatarContianer}>
        <Image
          resizeMode="cover"
          style={styles.avatar}
          source={{
            uri: "https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1571607388263-1044f9ea01dd-1920w.jpg",
          }}
        />
      </View>
      {/* <View style={styles.sentImageContainer}>
        <Image 
            resizeMode="cover"
            style={styles.sentImage}
            source={{
              uri: "https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1571607388263-1044f9ea01dd-1920w.jpg",
            }}
        />
      </View> */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          This is some cool message that you can't even know about okay ?
        </Text>
      </View>
      {/* <AudioPlayer
        audio={
          "https://drive.google.com/file/d/1ADi-NZs0bhVYwo5tX5fe-3sHhzCgBtb3/view?usp=sharing"
        }
        type='sent'
      /> */}
      <View style={styles.messageStatusAndTime}>
        <Text style={styles.time}>00:12 AM</Text>
        <MessageStatus message_status="read" color="#F7FBFE" />
      </View>
    </View>
  );
};

export default SentMessageBubble;
