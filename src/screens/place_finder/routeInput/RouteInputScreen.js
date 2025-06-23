import React, {useState, useEffect, useMemo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';

const buildOSRMUrl = (startCoords, endCoords) => {
  return `http://router.project-osrm.org/route/v1/driving/${startCoords.lng},${startCoords.lat};${endCoords.lng},${endCoords.lat}?overview=full&geometries=geojson`;
};

export default function RouteInputScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [startCoords, setStartCoords] = useState(null);
  const [endCoords, setEndCoords] = useState(null);

  useEffect(() => {
    if (route.params) {
      if (route.params.start) {
        setStartPoint(route.params.start);
        setStartCoords(route.params.startCoords);
      }
      if (route.params.end) {
        setEndPoint(route.params.end);
        setEndCoords(route.params.endCoords);
      }
    }
  }, [route.params]);

  const handleLocationPress = (type) => {
    navigation.navigate('LocationSearchScreen', {
      type,
      start: startPoint,
      startCoords,
      end: endPoint,
      endCoords,
    });
  };

  const handleConfirm = () => {
    if (!startCoords || !endCoords) {
      Alert.alert('Missing Information', 'Please select both locations.');
      return;
    }

    const osrmUrl = buildOSRMUrl(startCoords, endCoords);

    navigation.navigate('RouteMapScreen', {
      startCoords,
      endCoords,
      startPoint,
      endPoint,
      osrmUrl,
    });
  };

  const isReady = useMemo(() => startCoords && endCoords, [startCoords, endCoords]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Route</Text>

      <TouchableOpacity
        onPress={() => handleLocationPress('start')}
        style={styles.inputWrapper}>
        <Text style={styles.label}>Start Point</Text>
        <Text style={styles.input}>
          {startPoint || 'Choose start location'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleLocationPress('end')}
        style={styles.inputWrapper}>
        <Text style={styles.label}>End Point</Text>
        <Text style={styles.input}>
          {endPoint || 'Choose end location'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, !isReady && {backgroundColor: '#ccc'}]}
        onPress={handleConfirm}
        disabled={!isReady}>
        <Text style={styles.buttonText}>Show Route</Text>
      </TouchableOpacity>
    </View>
  );
}
