import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import PantryIcon from '../../../assets/kitchen.svg';
import RecipeIcon from '../../../assets/recipes.svg';
import AddIcon from '../../../assets/add_circle.svg';
import ShoppingListIcon from '../../../assets/store.svg';
import SettingsIcon from '../../../assets/settings.svg';
import { theme } from '../../../theme/theme';

type IconsProps = {
  handleSelect: Function;
  selected: boolean;
};
const Pantry = ({ handleSelect, selected }: IconsProps) => {
  return (
    <Pressable onPress={() => handleSelect('pantry')}>
      <PantryIcon
        fill={
          selected
            ? theme.color_scheme.light.primary_highlight
            : theme.color_scheme.light.black
        }
        height={styles.icon.height}
        width={styles.icon.width}
      />
    </Pressable>
  );
};

const Recipes = ({ handleSelect, selected }: IconsProps) => {
  return (
    <Pressable onPress={() => handleSelect('recipes')}>
      <RecipeIcon
        fill={
          selected
            ? theme.color_scheme.light.primary_highlight
            : theme.color_scheme.light.black
        }
        height={styles.icon.height}
        width={styles.icon.width}
      />
    </Pressable>
  );
};
const Add = ({ handleSelect, selected }: IconsProps) => {
  return (
    <Pressable onPress={() => handleSelect('add')}>
      <AddIcon
        fill={
          selected
            ? theme.color_scheme.light.primary_highlight
            : theme.color_scheme.light.black
        }
        height={styles.icon.height}
        width={styles.icon.width}
      />
    </Pressable>
  );
};
const ShoppingList = ({ handleSelect, selected }: IconsProps) => {
  return (
    <Pressable onPress={() => handleSelect('shopping')}>
      <ShoppingListIcon
        fill={
          selected
            ? theme.color_scheme.light.primary_highlight
            : theme.color_scheme.light.black
        }
        height={styles.icon.height}
        width={styles.icon.width}
      />
    </Pressable>
  );
};
const Settings = ({ handleSelect, selected }: IconsProps) => {
  return (
    <Pressable onPress={() => handleSelect('settings')}>
      <SettingsIcon
        fill={
          selected
            ? theme.color_scheme.light.primary_highlight
            : theme.color_scheme.light.black
        }
        height={styles.icon.height}
        width={styles.icon.width}
      />
    </Pressable>
  );
};
export { Pantry, Recipes, Add, ShoppingList, Settings };

const styles = StyleSheet.create({
  icon: { height: 40, width: 40 },
});
