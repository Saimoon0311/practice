/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  onPress,
  Linking,
  Button,
  Text,
  StatusBar,
} from 'react-native';
// import Navigation from "./assets/config/navigation"
// import StackNavigation from '@react-navigation/stack';
import{
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function Home({navigation}) {
  return (
  <View>
<Text>Hello </Text>
<Button title='about' onPress={()=>navigation.navigate('bout')} />
          </View>
  );
};

const styles = StyleSheet.create({
 });

export default Home;
