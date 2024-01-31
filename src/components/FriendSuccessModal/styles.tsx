import { StyleSheet } from "react-native";

const styles = () => {
  return StyleSheet.create({
    modalBox: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    modalContent: {
      backgroundColor: "white",
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      maxHeight: '90%',
      padding: 25,
    },
  });
}
export default styles;