import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'ROUTE_COORDINATES';

export const saveToStorage = async (routeArray) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(routeArray));
  } catch (error) {
    console.log('Error saving route:', error);
  }
};

export const loadFromStorage = async () => {
  try {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.log('Error loading route:', error);
    return [];
  }
};
