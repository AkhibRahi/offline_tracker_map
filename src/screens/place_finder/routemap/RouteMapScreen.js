// src/screens/RouteMapScreen.js
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';

export default function RouteMapScreen({ route }) {
  const { startCoords, endCoords, osrmUrl } = route.params;
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoute();
  }, []);

  const fetchRoute = async () => {
    try {
      const res = await axios.get(osrmUrl);
      const coords = res.data.routes[0].geometry.coordinates.map(coord => ({
        latitude: coord[1],
        longitude: coord[0],
      }));
      setRouteCoordinates(coords);
    } catch (err) {
      console.error('Failed to load route', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !startCoords || !endCoords) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  const region = {
    latitude: (startCoords.lat + endCoords.lat) / 2,
    longitude: (startCoords.lng + endCoords.lng) / 2,
    latitudeDelta: Math.abs(startCoords.lat - endCoords.lat) + 0.05,
    longitudeDelta: Math.abs(startCoords.lng - endCoords.lng) + 0.05,
  };

  return (
    <MapView style={styles.map} initialRegion={region}>
      <Marker coordinate={{ latitude: startCoords.lat, longitude: startCoords.lng }} title="Start" />
      <Marker coordinate={{ latitude: endCoords.lat, longitude: endCoords.lng }} title="End" />
      {routeCoordinates.length > 0 && (
        <Polyline
          coordinates={routeCoordinates}
          strokeWidth={4}
          strokeColor="#007bff"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
