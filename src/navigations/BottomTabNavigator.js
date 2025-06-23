// src/navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LiveTrackingStack from './LiveTrackingStack';
import app_routes from '../utils/constants/app_routes';
import PlaceFinderStack from './placeFinderStack';
import BottomSheetStack from './BottomSheetStack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, Width } from '../themes';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const BottomTab = createBottomTabNavigator();

const baseTabBarStyle = {
  height: Width * 0.18,
  paddingBottom: Width * 0.03,
};

const tabBarOptions = {
  tabBarLabelStyle: { fontSize: Width * 0.03 },
  tabBarInactiveTintColor: COLORS.black,
};

const BottomTabNavigator = ({ route }) => {
  const { initialRoute } = route.params;

  const activeTintColor = COLORS.logoColor;

  const getTabBarStyle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    if (routeName === 'LocationSearchScreen' || routeName === 'CustomBottomSheet') {
      return { display: 'none' };
    }
    return {
      display: 'flex',
      height: Width * 0.18,
      paddingBottom: Width * 0.03,
    };
  };

  return (
    <BottomTab.Navigator
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false }}
    >
      {/* Live Tracking (no dynamic tab hiding needed) */}
      <BottomTab.Screen
        name={app_routes.LiveTrackingStack}
        component={LiveTrackingStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="map-pin" size={Width * 0.053} color={color} />
          ),
          tabBarActiveTintColor: activeTintColor,
          tabBarStyle: baseTabBarStyle,
          ...tabBarOptions,
        }}
      />

      {/* Place Finder (hide tab on LocationSearchScreen) */}
      <BottomTab.Screen
        name={app_routes.PlaceFinderStack}
        component={PlaceFinderStack}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <Icon name="map-marker" size={Width * 0.06} color={color} />
          ),
          tabBarActiveTintColor: activeTintColor,
          tabBarStyle: getTabBarStyle(route),
          ...tabBarOptions,
        })}
      />

      {/* Bottom Sheet (hide tab on CustomBottomSheet) */}
      <BottomTab.Screen
        name={app_routes.BottomSheetStack}
        component={BottomSheetStack}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <Icon name="long-arrow-up" size={Width * 0.052} color={color} />
          ),
          tabBarActiveTintColor: activeTintColor,
          tabBarStyle: getTabBarStyle(route),
          ...tabBarOptions,
        })}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
