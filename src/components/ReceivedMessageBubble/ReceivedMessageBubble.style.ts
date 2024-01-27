import { StyleSheet } from "react-native";
import { DEVICE_WIDTH } from "../../constants/sizes";

const styles = StyleSheet.create({
  container: {
    width: '70%',
    flexDirection: 'row',
    marginVertical: 10,
    alignSelf: 'flex-start'
  },
  avatarContianer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    alignSelf: 'flex-end'
  },
  messageStatusAndTime: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    right: '3%'
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  sentImageContainer: {
    height: 165,
    width: '60%',
    overflow: 'hidden',
    borderRadius: 10,
  },
  sentImage: {
    height: '100%',
    width: '100%'
  },
  textContainer: {
    paddingBottom: 30,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 16,
    borderBottomLeftRadius: 0,
    borderColor: '#E4E4E4',
    maxWidth: '85%',
    minWidth: '40%'
  },
  text: {
    fontSize: 14,
    fontWeight: '400'
  },
  time: {
    fontSize: 10,
    color: '#58575D'
  }
});

export default styles;
