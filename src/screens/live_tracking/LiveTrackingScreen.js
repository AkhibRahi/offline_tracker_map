import React from 'react';
import { View, } from 'react-native';
import LiveMapTracker from '../../components/livemaptracker/LiveMapTracker';
import styles from './style';


const LiveTrackingScreen = () => {
  return (
    <View style={styles.container}>
      <LiveMapTracker />
    </View>
  );
};

export default LiveTrackingScreen;

