import React, { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import SearchIcon from '../../../assets/search.svg';
import NotificationIcon from '../../../assets/notification.svg';

function Search() {
  const handleClickSearch = () => {};
  return (
    <Pressable onPress={() => handleClickSearch()} style={{}}>
      <SearchIcon
        height={styles.icon.height}
        width={styles.icon.width}
        opacity={styles.icon.opacity}
      />
    </Pressable>
  );
}

function Notification() {
  const handleClickNotifications = () => {};
  return (
    <Pressable onPress={() => handleClickNotifications()}>
      <NotificationIcon
        height={styles.icon.height}
        width={styles.icon.width}
        opacity={styles.icon.opacity + 0.2}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: { height: 40, width: 40, opacity: 0.4 },
});
export { Search, Notification };
