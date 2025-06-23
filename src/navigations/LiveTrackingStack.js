// src/navigation/LiveTrackingStack.js
import React from 'react';
import LiveTrackingScreen from '../screens/live_tracking/LiveTrackingScreen';
import app_routes from '../utils/constants/app_routes';
import {createStackNavigator} from '@react-navigation/stack';
import { Height, Width } from '../themes';

const Stack = createStackNavigator();

const LiveTrackingStack = () => {
  return (
    <Stack.Navigator initialRouteName={app_routes.LiveTrackingStack}>
      <Stack.Screen
        name={app_routes.LiveTrackingStack}
        component={LiveTrackingScreen}
        options={{
          title: 'Live Tracking',
          headerTitleStyle: {
            fontSize: Width * 0.045,
          },
          headerStyle: {
            height: Height * 0.08,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default LiveTrackingStack;
