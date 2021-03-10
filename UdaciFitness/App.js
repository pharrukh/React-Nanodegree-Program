import React from 'react';
import { ImageComponent, StyleSheet, Text, View } from 'react-native';
import AddEntry from './components/AddEntry'
import UdaciSlider from './components/UdaciSlider'
import UdaciSteppers from './components/UdaciSteppers'

export default function App() {
  return (
    <View>
      <AddEntry />
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
});
