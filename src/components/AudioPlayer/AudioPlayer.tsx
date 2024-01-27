import React, { useState } from "react";
import { View, Text, ColorValue } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";
import {Slider} from '@miblanchard/react-native-slider';

import styles from "./AudioPlayer.style";

type IProps = {
  audio: string;
  type: 'sent' | 'received'
};

const AudioPlayer: React.FC<IProps> = ({ audio, type }) => {
  const user: any = {};

  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const onPressResume = () => {};

  const onPressPause = () => {};

  const onPressPlay = () => {};

  const audio_duration = 10;
  
  let playIconColor = type == 'sent' ? '#F7FBFE' : '#96B4D1'

  return (
    <View style={[styles.container, { flexDirection: "row", backgroundColor: type == 'sent' ? '#96B4D1': '#FFFFFF' }]}>
      <View style={styles.playIconAndSlider}>
        {!playing && paused ? (
          <MaterialCommunityIcons
            name="play"
            size={35}
            color={playIconColor}
            onPress={onPressResume}
          />
        ) : playing && !paused ? (
          <MaterialCommunityIcons
            name="pause"
            size={35}
            color={playIconColor}
            onPress={onPressPause}
          />
        ) : (
          <MaterialCommunityIcons
            name="play"
            size={38}
            color={playIconColor}
            onPress={onPressPlay}
          />
        )}
        <Slider
          containerStyle={{ width: "95%", height: 20 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#00406E"
          maximumTrackTintColor={playIconColor}
          thumbTintColor="#00406E"
          value={sliderValue}
          thumbStyle={{ width: 10, height: 10 }}
        />
      </View>
      <Text
        style={{
          color: "#000",
          left: "14%",
          bottom: 8,
          position: "absolute",
          fontSize: 8,
        }}
      >
        {moment().startOf("day").seconds(audio_duration).format("mm:ss")}
      </Text>
    </View>
  );
};

export default AudioPlayer;
