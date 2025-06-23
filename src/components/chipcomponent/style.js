import { StyleSheet } from 'react-native';
import { COLORS, Width } from '../../themes';

export default StyleSheet.create({
  smallCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: Width * 0.037,
    paddingHorizontal: Width * 0.032,
    paddingVertical: Width * 0.02,
    marginRight: Width * 0.01,
    alignItems: 'center',
    marginLeft: Width * 0.04
  },
  smallCardSelected: {
    backgroundColor: COLORS.primary,
    borderRadius: Width * 0.05,
  },
  smallCardText: {
    color: COLORS.black,
    fontSize: Width * 0.03,
  },
  smallCardTextSelected: {
    color: COLORS.white,
    fontSize: Width * 0.03,
    fontWeight: '600',
  },
  numberView: {
    backgroundColor: COLORS.white,
    marginLeft: Width * 0.02,
    paddingHorizontal: Width * 0.015,
    paddingVertical: Width * 0.005,
    borderRadius: Width * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: COLORS.primary,
    fontSize: Width * 0.03,
    fontWeight: 'bold',
  },
  numberTextSelected: {
    color: COLORS.primary,
    fontSize: Width * 0.027, // slightly smaller
    fontWeight: 'bold',
  },
});
