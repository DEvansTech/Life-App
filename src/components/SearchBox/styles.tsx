import { StyleSheet } from "react-native";

const styles = (color: string) => {
  return StyleSheet.create({
    input: {
      fontFamily: "Poppins",
      fontSize: 15,
      fontStyle: "normal",
      fontWeight: "300",
      lineHeight: 22,
      color: color
    }
  });
}

export default styles;