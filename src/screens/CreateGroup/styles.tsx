import { Platform } from "react-native";
import { Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  modalsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  bottomSheet: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  centerModal: {
    justifyContent: 'center',
    marginHorizontal: "15%"
  },
  contentSheet: {
    backgroundColor: "white",
    // paddingHorizontal: 22,
    // paddingTop: 22,
    // paddingBottom: 11,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    maxHeight: '90%'
  },
  contentModal: {
    backgroundColor: "white",
    // paddingHorizontal: 22,
    // paddingTop: 22,
    // paddingBottom: 11,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 20,
    maxHeight: '90%'
  }
});

export default styles;