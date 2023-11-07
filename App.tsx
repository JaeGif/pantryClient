import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);
  const incrementCount = () => {
    setCounter(counter + 1);
  };
  return (
    <View style={styles.container}>
      <Text>This is the default Text component</Text>
      <Pressable onPress={incrementCount} style={styles.button}>
        <Text>This is a 'real' button with a random counter {counter}</Text>
      </Pressable>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'grey',
    height: 50,
    minWidth: 40,
  },
});
