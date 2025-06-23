import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const convertToDimension = size => {
  const baseFontSize = 16;
  const newSize = (width * size) / baseFontSize;
  return Math.round((newSize / baseFontSize) * baseFontSize);
};

const smallFont = width < 375 ? convertToDimension(14) : convertToDimension(16);
const mediumFont =
  width < 375 ? convertToDimension(16) : convertToDimension(18);
const largeFont = width < 375 ? convertToDimension(18) : convertToDimension(20);

export {smallFont, mediumFont, largeFont};
