import { StyleSheet } from 'react-native';
import { COLORS, Height, Width } from '../../themes'; // Add Width for better scaling

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheetContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: Height * 0.75,
    backgroundColor: '#fff',
    borderTopLeftRadius: Width * 0.05, 
    borderTopRightRadius: Width * 0.05,
    paddingHorizontal: Width * 0.05, 
    paddingTop: Height * 0.012, 
  },
  dragHandle: {
    width: Width * 0.15, 
    height: Height * 0.0065, 
    backgroundColor: '#ccc',
    borderRadius: Width * 0.008, 
    alignSelf: 'center',
    marginBottom: Height * 0.013, 
  },
  content: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: Width * 0.045, 
    flex: 1,
    marginRight: Width * 0.025, 
  },
  description: {
    fontSize: Width * 0.035, 
    color: COLORS.textGrey2,
    marginVertical: Height * 0.013, 
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: Width * 0.04, 
    marginVertical: Height * 0.013, 
  },
  horizontalList: {
    paddingBottom: Height * 0.026, 
  },
  relatedCard: {
    width: Width * 0.26, 
    height: Width * 0.26,
    backgroundColor: '#eee',
    marginRight: Width * 0.025, 
    borderRadius: Width * 0.02, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  relatedImage: {
    width: Width * 0.16, 
    height: Width * 0.16,
    borderRadius: Width * 0.015, 
    marginBottom: Height * 0.0065, 
  },
  relatedName: {
    fontSize: Width * 0.026, 
    textAlign: 'center',
  },
});

export default styles;
