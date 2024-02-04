import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MessageDetailScreen = ({ route }) => {
  const { name } = route.params;
  const [texts, setTexts] = useState(route.params.texts);
  const [newMessage, setNewMessage] = useState('');
  const flatListRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom whenever texts update
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [texts]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = { from: true, text: newMessage, datetime: new Date().toLocaleString() };
      setTexts([newMsg, ...texts]);
      setNewMessage('');
      Keyboard.dismiss(); // Dismiss the keyboard after sending a message
    }
  };

  const renderMessageItem = ({ item }) => (
      <View style={item.from ? styles.sentMessage : styles.receivedMessage}>
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.messageDateTime}>{item.datetime}</Text>
      </View>
  );

  return (
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <View style={styles.container}>
          {/*<Text style={styles.header}>Message history with {name}</Text>*/}
          <FlatList
              ref={flatListRef}
              data={texts}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderMessageItem}
              inverted
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
              style={styles.input}
              value={newMessage}
              onChangeText={setNewMessage}
              placeholder="Type a message..."
              placeholderTextColor="#666"
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <Text>
              <Icon name="paper-plane" size={20} color="#FFF" /> {/* FontAwesome paper-plane icon */}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  // Existing styles
  messageText: {
    color: '#000',
    marginVertical: 2,
  },
  sentMessage: {
    backgroundColor: '#DCF8C5', // Light green for sent messages
    alignSelf: 'flex-end',
    // Other existing styles for sentMessage
    color: '#fff',
    padding: 10,
    borderRadius: 18,
    maxWidth: '70%',
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  receivedMessage: {
    backgroundColor: '#FFF',
    alignSelf: 'flex-start',
    // Other existing styles for receivedMessage
    color: '#000',
    padding: 10,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#e5e5ea', // Light grey border
    maxWidth: '70%',
    marginLeft: 10,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'flex-end', // Align items to the bottom of the container
  },
  input: {
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    paddingLeft: 15,
    flex: 1,
    padding: 10,
    borderWidth: 0.9,
    borderColor: '#e5e5ea',
    maxHeight: 100, // Limit the max height of the input
  },
  sendButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#007AFF',
    borderRadius: 20,
    marginLeft: 10,
  },
  sendButtonText: {
    color: '#fff',
  },
  messageItem: {
    padding: 5,
    marginVertical: 10, // Increased vertical gap
    borderRadius: 18,
  },
  messageDateTime: {
    fontSize: 12,
    color: '#a0a0a0',
    textAlign: 'right',
    marginTop: 2,
  },
});


export default MessageDetailScreen;
