import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { texts } from "./Content"; // Import the texts data

const getLastMessageInfo = (messages) => {
  if (messages && messages.length > 0) {
    const lastMessage = messages[messages.length - 1];
    return { text: lastMessage.text, datetime: lastMessage.datetime };
  }
  return { text: '', datetime: '' };
};

const MessagesScreen = () => {
  const navigation = useNavigation();

  const renderConversationItem = ({ item }) => {
    const { text, datetime } = getLastMessageInfo(item.texts);

    return (
        <TouchableOpacity
            style={styles.conversationItem}
            onPress={() => navigation.navigate('MessageDetailScreen', { name: item.name, texts: item.texts })}
        >
          {/* Placeholder for Avatar */}
          <View style={styles.avatar} />
          <View style={styles.conversationInfo}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.lastMessage}>{text}</Text>
          </View>
          <Text style={styles.lastMessageTime}>{datetime}</Text>
        </TouchableOpacity>
    );
  };

  return (
      <FlatList
          data={texts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderConversationItem}
          style={styles.container}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conversationItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  conversationInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 14,
    color: '#6e6e6e',
  },
  lastMessageTime: {
    fontSize: 12,
    color: '#a0a0a0',
  },
});

export default MessagesScreen;
