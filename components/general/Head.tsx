import { View, Text, Image, StyleSheet } from 'react-native';
import SearchIcon from './search.svg';

function Head() {
  return (
    <View>
      <Text>Head</Text>
      <SearchIcon
        height={style.icon.height}
        width={style.icon.width}
        opacity={style.icon.opacity}
      />
    </View>
  );
}

const style = StyleSheet.create({
  icon: { height: 40, width: 40, opacity: 0.3 },
});
export default Head;
