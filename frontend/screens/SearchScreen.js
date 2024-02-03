import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Search Page</Text>
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

export default SearchScreen;
