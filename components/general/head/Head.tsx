import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Search } from './Icon';
import { Notification } from './Icon';

function Head() {
  return (
    <View style={styles.container}>
      <Search />
      <Notification />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'flex-start',
  },
});
export default Head;
