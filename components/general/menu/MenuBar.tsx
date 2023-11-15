import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Add, Pantry, Recipes, Settings, ShoppingList } from './Icon';
type MenuOptions = 'pantry' | 'recipes' | 'add' | 'shopping' | 'settings';
const MenuBar = () => {
  const [selected, setSelected] = useState<MenuOptions>('pantry');

  return (
    <View style={styles.container}>
      <Pantry handleSelect={setSelected} selected={selected === 'pantry'} />
      <Recipes handleSelect={setSelected} selected={selected === 'recipes'} />
      <Add handleSelect={setSelected} selected={selected === 'add'} />
      <ShoppingList
        handleSelect={setSelected}
        selected={selected === 'shopping'}
      />
      <Settings handleSelect={setSelected} selected={selected === 'settings'} />
    </View>
  );
};

export default MenuBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'flex-start',
  },
});
