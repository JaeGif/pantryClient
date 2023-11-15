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
import Head from './components/general/head/Head';
import MenuBar from './components/general/menu/MenuBar';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Head />
        <MenuBar />
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
