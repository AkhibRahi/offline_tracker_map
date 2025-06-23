import { StyleSheet } from 'react-native';
import { COLORS, Width, Height } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Width * 0.04, 
    backgroundColor: COLORS.white,
  },
  input: {
    height: Height * 0.065, 
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: Width * 0.02, 
    paddingHorizontal: Width * 0.037, 
    marginBottom: Height * 0.013, 
  },
  item: {
    paddingVertical: Height * 0.015, 
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  itemText: {
    fontSize: Width * 0.04, 
  },
  loader: {
    marginTop: Height * 0.026, 
  },
  noResults: {
    marginTop: Height * 0.026, 
    textAlign: 'center',
    color: '#888',
  },
});

export default styles;
