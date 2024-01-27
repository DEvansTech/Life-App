import { StyleSheet } from "react-native";
import { DEVICE_WIDTH } from "../../constants/sizes";

const styles = StyleSheet.create({
  container: {
    width: '70%',
    flexDirection: 'row-reverse',
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
  avatarContianer: {
    width: 40,
    height: 40,
    borderRadius: 23,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#00406E'
  },
  messageStatusAndTime: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    left: '25%'
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
    backgroundColor: '#96B4D1',
    borderWidth: 1,
    borderRadius: 16,
    borderBottomRightRadius: 0,
    borderColor: '#E4E4E4',
    maxWidth: '85%',
    minWidth: '40%'
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#F7FBFE'
  },
  time: {
    fontSize: 10,
    color: '#F7FBFE'
  }
});

export default styles;
