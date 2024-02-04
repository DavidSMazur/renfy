import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { data, requests } from './Content';
import { useRoute } from '@react-navigation/native';

const generateRandomRequests = () => {
  const numberOfRequests = Math.floor(Math.random() * (10 - 3 + 1)) + 3; // Random number between 3 and 10
  return Array.from({ length: numberOfRequests }).map(() => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomName = data[randomIndex].username; // Assuming data array has username field
    const randomRequest = requests[Math.floor(Math.random() * requests.length)];
    const profileImage = data[randomIndex].image; // Assuming data array has image field
    return { id: Math.random().toString(), name: randomName, requestDetails: randomRequest, profileImage: profileImage };
  });
};

const RequestScreen = () => {
  const [requestList, setRequestList] = useState(generateRandomRequests());
  const route = useRoute();
  const onAccept = route.params?.onAccept;

  useEffect(() => {
    if (requestList.length === 0) {
      setRequestList(generateRandomRequests());
    }
  }, [requestList]);

  const handleAccept = (id) => {
    if (onAccept) {
      onAccept();
    }
    setRequestList(prevRequests => prevRequests.filter(request => request.id !== id));
  };

  const handleDecline = (id) => {
    setRequestList(prevRequests => prevRequests.filter(request => request.id !== id));
  };

  const renderRequestItem = ({ item }) => (
      <View style={styles.requestItem}>
        <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
        <View style={styles.requestInfo}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>{item.requestDetails}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={() => handleAccept(item.id)}>
              <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.declineButton]} onPress={() => handleDecline(item.id)}>
              <Text style={styles.buttonText}>Decline</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );

  return (
      <SafeAreaView style={styles.container}>
        <FlatList
            data={requestList}
            keyExtractor={item => item.id}
            renderItem={renderRequestItem}
        />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  requestItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  requestInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
  },
  acceptButton: {
    backgroundColor: '#28A745',
  },
  declineButton: {
    backgroundColor: '#DC3545',
  },
});

export default RequestScreen;