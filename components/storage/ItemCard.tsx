import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { FoodCategories } from '../../types';
import CategoryIcon from './CategoryIcon';

type ItemCardProps = {
  foodType: FoodCategories;
};
const ItemCard = ({ foodType = 'dessert' }: ItemCardProps) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>Kouign-Amann</Text>
      <View style={styles.container}>
        <CategoryIcon foodType={foodType} />
        <View style={styles.column}>
          <Text style={styles.quantity}>
            <Text style={styles.infoHighlight}>Quantity: </Text>8
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.age}>
            <Text style={styles.infoHighlight}>Age: </Text>3 days
          </Text>
          <Text style={styles.location}>
            <Text style={styles.infoHighlight}>Location: </Text>Fridge
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 7,
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
    gap: 5,

    justifyContent: 'space-evenly',
  },
  name: { fontSize: 24 },
  age: { fontSize: 14 },
  quantity: { fontSize: 14 },
  location: { fontSize: 14 },
  infoHighlight: { color: 'black', fontSize: 14 },
});
