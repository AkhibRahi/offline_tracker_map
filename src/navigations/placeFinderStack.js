// src/navigation/PlaceFinderStack.js
import React from 'react';
import RouteInputScreen from '../screens/place_finder/routeInput/RouteInputScreen';
import LocationSearchScreen from '../screens/place_finder/locationsearch/LocationSearchScreen';
import RouteMapScreen from '../screens/place_finder/routemap/RouteMapScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {Height, Width} from '../themes';

const Stack = createStackNavigator();

const PlaceFinderStack = () => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RouteInputScreen"
        component={RouteInputScreen}
        options={{
          title: 'Enter Location',
          headerTitleStyle: {
            fontSize: Width * 0.045,
          },
          headerStyle: {
            height: Height * 0.08,
          },
        }}
      />
      <Stack.Screen
        name="LocationSearchScreen"
        component={LocationSearchScreen}
        options={{
          title: 'Search Location',
          headerTitleStyle: {
            fontSize: Width * 0.045,
          },
          headerStyle: {
            height: Height * 0.08,
          },
        }}
      />
      <Stack.Screen
        name="RouteMapScreen"
        component={RouteMapScreen}
        options={{
          title: 'Route Map',
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

export default PlaceFinderStack;
