import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/welcome_screen/WelcomeScreen';
import AppScreen from '../screens/app_screen/AppScreen';
import app_routes from '../utils/constants/app_routes';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome Screen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppScreen"
        component={AppScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={app_routes.BottomTabNavigator}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
