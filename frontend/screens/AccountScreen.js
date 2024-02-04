import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function AccountScreen() {
  // Placeholder data - replace with your data source
  const userInfo = {
    fullName: 'John Doe',
    username: '@johndoe',
    profilePicture: 'https://via.placeholder.com/150', // Use actual image URL
    biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    connections: 150, // Example number
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: userInfo.profilePicture }} style={styles.profilePic} />
      <Text style={styles.name}>{userInfo.fullName}</Text>
      <Text style={styles.username}>{userInfo.username}</Text>
      <Text style={styles.biography}>{userInfo.biography}</Text>
      <Text style={styles.connections}>Connections: {userInfo.connections}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60, // To make it circle
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  biography: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 20,
  },
  connections: {
    fontSize: 16,
    color: '#007bff', // Bootstrap primary blue for example
  },
});

export default AccountScreen;
