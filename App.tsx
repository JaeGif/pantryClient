import { useState } from 'react';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Head from './components/general/head/Head';
import MenuBar from './components/general/menu/MenuBar';
import Storage from './pages/Storage';
import Recipe from './pages/Recipe';
import Add from './pages/Add';
import Shopping from './pages/Shopping';
import UserSettings from './pages/UserSettings';
import { RootStackParamList } from './types';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <NavigationContainer>
          <Head />
          <Stack.Navigator>
            <Stack.Screen name='pantry' component={Storage} />
            <Stack.Screen name='recipes' component={Recipe} />
            <Stack.Screen name='add' component={Add} />
            <Stack.Screen name='shopping' component={Shopping} />
            <Stack.Screen name='settings' component={UserSettings} />
          </Stack.Navigator>
          <MenuBar />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  button: {
    backgroundColor: 'grey',
    height: 50,
    minWidth: 40,
  },
});
