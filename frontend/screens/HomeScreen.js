import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ActionCard from "../components/ActionCard";


const HomeScreen = () => {
    const username1 = 'Alice';
    const username2 = 'Bob';

    return (
        <View style={styles.container}>
        <ActionCard username1={username1} username2={username2} />
        {/* You can include more ActionCards with different usernames */}
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
  });
  
  export default HomeScreen;