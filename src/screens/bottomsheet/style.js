import { StyleSheet } from 'react-native';
import { COLORS, Width } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lowBack,
  },
  card: {
    width: Width * 0.92,
    borderRadius: Width * 0.03, 
    backgroundColor: COLORS.white,
    marginHorizontal: Width * 0.04,
    marginVertical: Width * 0.01,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Width * 0.05,
    marginVertical: Width * 0.03,
  },
  iconMainView: {
    flexDirection: 'row',
    gap: Width * 0.02,
  },
  IconContainer: {
    width: Width * 0.05,
    height: Width * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Width * 0.025, 
  },
  highText: {
    fontSize: Width * 0.035, 
    fontFamily: 'Poppins-Medium',
    marginTop: Width * 0.01,
  },
  productView: {
    marginLeft: Width * 0.05,
    marginBottom: Width * 0.04,
  },
  productName: {
    fontSize: Width * 0.04,
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.TextColor,
    marginBottom: Width * 0.01,
  },
  productId: {
    fontSize: Width * 0.035,
    fontFamily: 'Poppins-Regular',
    color: COLORS.textGrey2,
  },
  productDesc: {
    fontSize: Width * 0.035, 
    fontFamily: 'Poppins-Regular',
    color: COLORS.textGrey2,
    marginTop: Width * 0.015,
  },
});

export default styles;
