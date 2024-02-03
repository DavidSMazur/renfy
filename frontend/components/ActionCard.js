import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ActionCard = ({ username1, username2 }) => {
    return (
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={[styles.avatar, styles.avatarPlaceholder]}>
              <Text style={styles.avatarText}>{username1.substring(0, 1)}</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.username}>{username1}</Text>
              <Text style={styles.crossedText}>crossed with</Text>
              <Text style={styles.username}>{username2}</Text>
            </View>
            <View style={[styles.avatar, styles.avatarPlaceholder]}>
              <Text style={styles.avatarText}>{username2.substring(0, 1)}</Text>
            </View>
          </View>
          {/* <View style={styles.cardFooter}>
            <Text style={styles.dateText}>Jan 30, 2024</Text>
          </View> */}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  titleContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 5,
  },
  crossedText: {
    fontSize: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 14,
    color: '#A4A4A4',
  },
});

export default ActionCard;
