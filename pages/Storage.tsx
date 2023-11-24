import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../theme/theme';
import ItemCard from '../components/storage/ItemCard';
function Storage() {
  // items get mapped to their cards
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.container}
    >
      <ItemCard foodType='dessert' />
      <ItemCard foodType='vegetable' />
      <ItemCard foodType='fruit' />
      <ItemCard foodType='meat' />
      <ItemCard foodType='carbohydrate' />
      <ItemCard foodType='spice' />
      <ItemCard foodType='hot drink' />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: theme.pageContainer.padding,
    paddingBottom: theme.pageContainer.padding + 15,
  },
});
export default Storage;

/*     borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1, */
