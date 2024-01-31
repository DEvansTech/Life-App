import { StyleSheet } from "react-native";

const styles = (bgColor: string, color: string) => {
  return StyleSheet.create({
    title: {
      textAlign: "center",
      fontFamily: "Poppins",
      fontSize: 17,
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: 26,
      letterSpacing: -0.41,
      color: color
    }
  });
}

export default styles;