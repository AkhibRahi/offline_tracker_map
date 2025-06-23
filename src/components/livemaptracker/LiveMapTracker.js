import React, { useEffect, useRef, useState, useCallback } from 'react';
import { PermissionsAndroid, Platform, Alert } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'saved_route';

const LiveMapTracker = () => {
  const [routeCoords, setRouteCoords] = useState([]);
  const mapRef = useRef(null);
  const watchId = useRef(null);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs location access to track your path.',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const saveRoute = useCallback(async (coords) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(coords));
    } catch (err) {
      console.error('Error saving route', err);
    }
  }, []);

  const loadRoute = useCallback(async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) {
        setRouteCoords(JSON.parse(data));
      }
    } catch (err) {
      console.error('Error loading route', err);
    }
  }, []);

  useEffect(() => {
    loadRoute();

    requestLocationPermission().then((granted) => {
      if (!granted) {
        Alert.alert('Location permission denied');
        return;
      }

      watchId.current = Geolocation.watchPosition(
        ({ coords }) => {
          const { latitude, longitude } = coords;
          const newCoord = { latitude, longitude };

          setRouteCoords((prev) => {
            const last = prev[prev.length - 1];
            if (
              last &&
              last.latitude === newCoord.latitude &&
              last.longitude === newCoord.longitude
            ) {
              return prev; 
            }

            const updated = [...prev, newCoord];
            saveRoute(updated);

            if (mapRef.current) {
              mapRef.current.animateToRegion({
                latitude,
                longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              });
            }

            return updated;
          });
        },
        (error) => console.warn('Geolocation error:', error),
        {
          enableHighAccuracy: true,
          distanceFilter: 10,
          interval: 5000,
          fastestInterval: 4000,
        }
      );
    });

    return () => {
      if (watchId.current) {
        Geolocation.clearWatch(watchId.current);
      }
    };
  }, [loadRoute, saveRoute]);

  return (
    <MapView ref={mapRef} style={{ flex: 1 }} showsUserLocation>
      {routeCoords.length > 0 && (
        <Polyline coordinates={routeCoords} strokeColor="blue" strokeWidth={4} />
      )}
    </MapView>
  );
};

export default LiveMapTracker;
