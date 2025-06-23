import { StyleSheet } from "react-native";
import { COLORS, Width, Height } from "../../../themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Width * 0.05,
    justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
  title: {
    fontSize: Width * 0.055, 
    fontWeight: '700',
    marginBottom: Height * 0.04, 
    textAlign: 'center',
    color: COLORS.button,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: Width * 0.04, 
    marginBottom: Height * 0.02, 
    borderRadius: Width * 0.025, 
  },
  label: {
    fontSize: Width * 0.035, 
    color: '#777',
  },
  input: {
    fontSize: Width * 0.04, 
    color: COLORS.white,
    marginTop: Height * 0.01, 
  },
  button: {
    marginTop: Height * 0.03, 
    paddingVertical: Height * 0.018, 
    borderRadius: Width * 0.025, 
    backgroundColor: COLORS.button,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: Width * 0.04, 
    fontWeight: '600',
  },
});

export default styles;
