import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import axios from 'axios';
import app_routes from '../../../utils/constants/app_routes';
import styles from './styles';

export default function LocationSearchScreen({ route, navigation }) {
  const { type, start, startCoords, end, endCoords } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (searchQuery.length > 2) {
      if (debounceRef.current) clearTimeout(debounceRef.current);

      debounceRef.current = setTimeout(() => {
        fetchLocations(searchQuery);
      }, 400);
    } else {
      setResults([]);
    }

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [searchQuery]);

  const fetchLocations = async (query) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://www.onemap.gov.sg/api/common/elastic/search?searchVal=${query}&returnGeom=Y&getAddrDetails=Y&pageNum=1`
      );
      setResults(res.data.results || []);
    } catch (error) {
      console.error('Location fetch error:', error);
      Alert.alert('Error', 'Unable to fetch locations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (location) => {
    const selected = {
      lat: parseFloat(location.LATITUDE),
      lng: parseFloat(location.LONGITUDE),
      label: location.SEARCHVAL,
    };

    const updatedParams = {
      start: type === 'start' ? selected.label : start,
      startCoords: type === 'start' ? { lat: selected.lat, lng: selected.lng } : startCoords,
      end: type === 'end' ? selected.label : end,
      endCoords: type === 'end' ? { lat: selected.lat, lng: selected.lng } : endCoords,
    };

    navigation.navigate(app_routes.RouteInputScreen, updatedParams);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for a location..."
        style={styles.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoFocus
        autoCorrect={false}
        autoCapitalize="none"
      />

      {loading ? (
        <ActivityIndicator size="large" color="black" style={styles.loader} />
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item, index) => `${item.SEARCHVAL}_${index}`}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
              <Text style={styles.itemText}>{item.SEARCHVAL}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            searchQuery.length > 2 && !loading ? (
              <Text style={styles.noResults}>No results found.</Text>
            ) : null
          }
          keyboardShouldPersistTaps="handled"
        />
      )}
    </View>
  );
}


