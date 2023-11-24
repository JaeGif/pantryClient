import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CafeIcon from '../../assets/cafe.svg';
import DessertIcon from '../../assets/croissant.svg';
import FruitIcon from '../../assets/apple.svg';
import GeneralIcon from '../../assets/pizza.svg';
import { FoodCategories } from '../../types';

type CategoryIconProps = {
  foodType: FoodCategories;
};

const CategoryIcon = ({ foodType }: CategoryIconProps) => {
  switch (foodType) {
    case 'dessert':
      return (
        <DessertIcon height={styles.icon.height} width={styles.icon.width} />
      );
    case 'fruit':
      return (
        <FruitIcon height={styles.icon.height} width={styles.icon.width} />
      );
    case 'general':
      return (
        <GeneralIcon height={styles.icon.height} width={styles.icon.width} />
      );
    default:
      return (
        <GeneralIcon height={styles.icon.height} width={styles.icon.width} />
      );
  }
};

export default CategoryIcon;

const styles = StyleSheet.create({ icon: { height: 40, width: 40 } });
