import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Messages Page</Text>
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

export default MessagesScreen;
