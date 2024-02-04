import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { data, texts } from './Content'; // Import data and texts

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const generateRandomConversations = () => {
  const shuffledData = shuffleArray(data);
  const shuffledTexts = shuffleArray(texts);

  // Determine the shorter length to avoid running out of texts or users
  const count = Math.min(shuffledData.length, shuffledTexts.length);
  const uniqueConversations = [];

  for (let i = 0; i < count; i++) {
    uniqueConversations.push({
      id: i.toString(),
      name: shuffledData[i].username,
      image: shuffledData[i].image,
      texts: shuffledTexts[i] // Assuming each 'texts' item is a single conversation starter
    });
  }

  return uniqueConversations;
};

const getLastMessageInfo = (messages) => {
  if (messages && messages.length > 0) {
    const lastMessage = messages[messages.length - 1];
    return { text: lastMessage.text, datetime: lastMessage.datetime };
  }
  return { text: '', datetime: '' };
};

const MessagesScreen = () => {
  const [conversations, setConversations] = useState(generateRandomConversations());
  const navigation = useNavigation();

  const renderConversationItem = ({ item }) => {
    const { text, datetime } = getLastMessageInfo(item.texts.texts);

    return (
        <TouchableOpacity
            style={styles.conversationItem}
            onPress={() => navigation.navigate('MessageDetailScreen', { name: item.name, texts: item.texts.texts })}
        >
          <Image source={{ uri: item.image }} style={styles.avatar} />
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
          data={conversations}
          keyExtractor={(item) => item.id}
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
    backgroundColor: '#C4C4C4', // Placeholder color if no image is provided
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
