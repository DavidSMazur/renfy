import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// Example conversation data
const conversations = [
  {
    id: '1',
    name: 'Advait [Warp]',
    avatarUri: 'https://cdn.discordapp.com/avatars/331559213551714308/e860cd0ff20111b8034e9640c39aa30b.webp?size=160',
    // avatarUri: 'https://via.placeholder.com/50',
    lastMessage: 'Tell me about Warp.',
    lastMessageTime: '5m',
  },
  {
    id: '2',
    name: 'Daniel Ma',
    avatarUri: 'https://cdn.discordapp.com/avatars/112728896868204544/292fa7337b050e390daabeffafee3a4d.webp?size=240',
    lastMessage: 'Are we still on for tomorrow?',
    lastMessageTime: '1h',
  },
  {
    id: '3',
    name: 'Spandan Goel',
    avatarUri: 'https://cdn.discordapp.com/avatars/495397436278177822/1773893b508015227d9e57cfeefcd060.webp?size=240',
    lastMessage: 'Can you send me the Deep Learning homework answers?',
    lastMessageTime: '4h',
  }
];


const MessagesScreen = () => {
  const navigation = useNavigation();
  const renderConversationItem = ({ item }) => (
    <TouchableOpacity style={styles.conversationItem} onPress={() => navigation.navigate('MessageDetailScreen', { name: item.name })}>
      <Image source={{ uri: item.avatarUri }} style={styles.avatar} />
      <View style={styles.conversationInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.lastMessageTime}>{item.lastMessageTime}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={conversations}
      keyExtractor={item => item.id}
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
