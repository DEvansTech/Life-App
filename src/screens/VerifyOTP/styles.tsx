import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 57,
    height: 64,
    lineHeight: 64,
    fontSize: 17,
    borderWidth: 1,
    borderColor: '#C9C9C9',
    textAlign: 'center',
    borderRadius: 8,
    fontWeight: 400
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default styles;