import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function BluetoothScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Account Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default BluetoothScreen;
