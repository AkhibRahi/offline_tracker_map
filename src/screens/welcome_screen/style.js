// src/screens/Welcome/styles.js
import { StyleSheet } from 'react-native';
import { Width } from '../../themes/Dimension';
import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: Width * 0.05,
  },
  logo: {
    width: Width * 0.4,
    height: Width * 0.4,
    resizeMode: 'contain',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: Width * 0.15,
  },
  welcomeImage: {
    width: Width * 0.8,
    height: Width * 0.6,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: Width * 0.055, 
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.white,
  },
  subText: {
    fontSize: Width * 0.035, 
    color: COLORS.subText,
    marginTop: Width * 0.025, 
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.button,
    paddingVertical: Width * 0.03,      
    paddingHorizontal: Width * 0.075,   
    borderRadius: Width * 0.0625,       
    marginTop: Width * 0.05,            
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
