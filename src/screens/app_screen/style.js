// src/screens/YourScreen/styles.js
import { StyleSheet } from 'react-native';
import { COLORS, Width } from '../../themes';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  contentContainer: {
    marginTop: Width * 0.1,
    marginBottom: Width * 0.2,
    marginHorizontal: Width * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appView: {
    marginLeft: Width * 0.04,
    marginBottom: Width * 0.07,
  },
  greetingText: {
    color: COLORS.white,
    fontSize: Width * 0.044,
    fontFamily: 'Poppins-Regular',
  },
  nameText: {
    color: COLORS.button,
    fontSize: Width * 0.053,
    fontFamily: 'Poppins-SemiBold',
  },
  checkInButton: {
    marginTop: Width * 0.025, 
    backgroundColor: COLORS.primary,
    paddingVertical: Width * 0.025,  
    paddingHorizontal: Width * 0.05, 
    borderRadius: Width * 0.0125,    
    alignItems: 'center',
  },
  checkInButtonText: {
    color: COLORS.logoColor,
    fontSize: Width * 0.04, 
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  appsText: {
    color: COLORS.white,
    fontSize: Width * 0.048,
    fontFamily: 'Poppins-Medium',
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  serviceView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: Width * 0.032,
  },
  cardContainer: {
    width: Width * 0.46,
    height: Width * 0.29,
    borderRadius: Width * 0.03, 
    backgroundColor: COLORS.button,
  },
  cardContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  cardIconBackground: {
    width: Width * 0.12,
    height: Width * 0.12,
    backgroundColor: COLORS.arrowBack,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Width * 0.125, 
  },
  cardIcon: {
    marginTop: Width * 0.025,
    fontSize: Width * 0.035,
    fontFamily: 'Poppins-Medium',
    color: COLORS.white,
    fontWeight: '500',
  },
  checkInTimeText: {
    marginTop: Width * 0.025, 
    color: COLORS.white,
    fontSize: Width * 0.04, 
    fontFamily: 'Poppins-Regular',
  },
  checkOutButton: {
    marginTop: Width * 0.025, 
    backgroundColor: COLORS.secondary,
    paddingVertical: Width * 0.025, 
    paddingHorizontal: Width * 0.05, 
    borderRadius: Width * 0.0125, 
    alignItems: 'center',
  },
  checkOutButtonText: {
    color: COLORS.logoColor,
    fontSize: Width * 0.04, 
    fontFamily: 'Poppins-Medium',
  },
});

export default style;
