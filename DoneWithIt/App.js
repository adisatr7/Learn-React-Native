import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, Image, StatusBar, Platform, Dimensions, ImageBackground } from 'react-native'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {

  return (
    <ViewImageScreen />
  );
}
