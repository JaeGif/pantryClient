import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ItemCard = () => {
  return (
    <View style={styles.container}>
      <Text>ItemCard</Text>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  cardContainer: { backgroundColor: '#111' },

  container: {
    height: 150,
    backgroundColor: '#fff',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 7,
    padding: 10,
  },
});
