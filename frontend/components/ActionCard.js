import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ActionCard = ({ username1, username2, location, timestamp, image1, image2 }) => {
  return (
      <View style={styles.card}>
        {/* User 1 Info */}
        <View style={styles.cardHeader}>
          {image1 ? (
              <Image source={{ uri: image1 }} style={styles.avatarImage} />
          ) : (
              <View style={[styles.avatar, styles.avatarPlaceholder]}>
                <Text style={styles.avatarText}>{username1 ? username1.substring(0, 1) : ''}</Text>
              </View>
          )}
          <Text style={styles.username}>{username1}</Text>
        </View>

        <Text style={styles.crossedText}>crossed with</Text>

        {/* User 2 Info */}
        <View style={styles.cardHeader}>
          {image2 ? (
              <Image source={{ uri: image2 }} style={styles.avatarImage} />
          ) : (
              <View style={[styles.avatar, styles.avatarPlaceholder]}>
                <Text style={styles.avatarText}>{username2 ? username2.substring(0, 1) : ''}</Text>
              </View>
          )}
          <Text style={styles.username}>{username2}</Text>
        </View>

        {/* Location and Timestamp */}
        <Text style={styles.locationText}>{location}</Text>
        <Text style={styles.timestampText}>{timestamp}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    backgroundColor: '#C4C4C4',
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  crossedText: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center', // Center-align the text
  },
  locationText: {
    fontSize: 14,
    color: '#646464', // Change the color as needed
    marginTop: 5,
  },
  timestampText: {
    fontSize: 12,
    color: '#A4A4A4', // Change the color as needed
    marginBottom: 5,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default ActionCard;
