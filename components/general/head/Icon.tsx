import React, { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import SearchIcon from '../../../assets/search.svg';
import NotificationIcon from '../../../assets/notification.svg';

function Search() {
  const [color, setColor] = useState('blue');
  const handleClickSearch = () => {
    color === 'blue' ? setColor('red') : setColor('blue');
  };
  return (
    <Pressable
      onPress={() => handleClickSearch()}
      style={{
        backgroundColor: color,
        borderWidth: 2,
        borderColor: 'red',
        borderStyle: 'solid',
      }}
    >
      <SearchIcon
        height={styles.icon.height}
        width={styles.icon.width}
        opacity={styles.icon.opacity}
      />
    </Pressable>
  );
}

function Notification() {
  return (
    <Pressable>
      <NotificationIcon
        height={styles.icon.height}
        width={styles.icon.width}
        opacity={styles.icon.opacity}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: { height: 40, width: 40, opacity: 0.4 },
});
export { Search, Notification };
