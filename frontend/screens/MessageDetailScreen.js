import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageDetailScreen = ({ route }) => {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Message history with {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default MessageDetailScreen;
