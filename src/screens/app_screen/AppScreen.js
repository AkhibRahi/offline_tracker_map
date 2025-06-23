// src/screens/AppScreen/AppScreen.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import {COLORS, Width} from '../../themes';
import app_routes from '../../utils/constants/app_routes';

export default function AppScreen({navigation}) {
  const currentTime = new Date().getHours();
  let greeting = '';

  if (currentTime < 12) {
    greeting = 'Good Morning!';
  } else if (currentTime >= 12 && currentTime < 17) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.greetingText}>{greeting}</Text>
          <Text style={styles.nameText}>Welcome to Offline Tracker</Text>
        </View>
      </View>

      <View style={styles.appView}>
        <Text style={styles.appsText}>App Screen</Text>
      </View>

      <View style={styles.mainView}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(app_routes.BottomTabNavigator, {
              initialRoute: app_routes.LiveTrackingStack
            })
          }
          activeOpacity={0.9}>
          <View style={styles.cardContainer}>
            <View style={styles.cardContentContainer}>
              <View style={styles.cardIconBackground}>
                <Icon
                  name="map-pin"
                  color={COLORS.salesIcon}
                  size={Width * 0.057}
                />
              </View>
              <Text style={styles.cardIcon}>Live Tracking</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(app_routes.BottomTabNavigator, {
              initialRoute: app_routes.PlaceFinderStack
            })
          }
          activeOpacity={0.9}>
          <View style={styles.cardContainer}>
            <View style={styles.cardContentContainer}>
              <View style={styles.cardIconBackground}>
                <Icon name="map-marker" color={COLORS.CrmIcon} size={Width * 0.054} />
              </View>
              <Text style={styles.cardIcon}>Place Finder</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.serviceView}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(app_routes.BottomTabNavigator, {
              initialRoute: app_routes.BottomSheetStack
            })
          }
          activeOpacity={0.9}>
          <View style={styles.cardContainer}>
            <View style={styles.cardContentContainer}>
              <View style={styles.cardIconBackground}>
                <Icon
                  name="long-arrow-up"
                  color={COLORS.groupIcon}
                  size={Width * 0.054}
                />
              </View>
              <Text style={styles.cardIcon}>Bottom Sheet</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
