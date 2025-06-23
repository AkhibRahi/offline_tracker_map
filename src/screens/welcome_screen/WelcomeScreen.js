// src/screens/Welcome/WelcomeScreen.js
import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assests/logo.png')} // Replace with your logo path
          style={styles.logo}
        />
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../assests/map-tracking-image-1.jpg')} 
          style={styles.welcomeImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome to Offline Tracker</Text>
        <Text style={styles.subText}>Your smart place finder and route tracker app.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AppScreen')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
