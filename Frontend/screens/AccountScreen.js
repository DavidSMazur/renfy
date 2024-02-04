import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DefaultProfilePic from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

function AccountScreen() {
  const [userInfo, setUserInfo] = useState({
    fullName: 'Shubh Thorat',
    username: '@itsjustshubh',
    profilePicture: Image.resolveAssetSource(DefaultProfilePic).uri,
    biography: 'Passionate about technology and innovation. Let’s connect and make something great together!',
    connections: 0,
  });

  const navigation = useNavigation();

  const increaseConnections = () => {
    setUserInfo(prevState => ({
      ...prevState,
      connections: prevState.connections + 1,
    }));
  };

  const goToRequestScreen = () => {
    navigation.navigate('RequestScreen', { onAccept: increaseConnections });
  };

  const uploadProfilePicture = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      updateField('profilePicture', pickerResult.uri);
    }
  };

  const updateField = (field, value) => {
    setUserInfo({ ...userInfo, [field]: value });
  };

  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={uploadProfilePicture}>
          <Image source={{ uri: userInfo.profilePicture }} style={styles.profilePic} />
        </TouchableOpacity>
        <TextInput
            style={styles.textInput}
            value={userInfo.fullName}
            onChangeText={(text) => updateField('fullName', text)}
        />
        <Text style={styles.usernameText}>{userInfo.username}</Text>
        <TextInput
            style={[styles.textInput, styles.biographyInput]}
            value={userInfo.biography}
            onChangeText={(text) => updateField('biography', text)}
            multiline
        />
        <Text style={styles.connectionsText}>Connections: {userInfo.connections}</Text>
        <TouchableOpacity onPress={goToRequestScreen} style={styles.button}>
          <Text style={styles.buttonText}>Go to Requests</Text>
        </TouchableOpacity>
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
    borderRadius: 60,
    marginBottom: 20,
  },
  textInput: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    width: '80%',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  biographyInput: {
    height: 100,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
    padding: 10,
    lineHeight: 24,
  },
  connectionsText: {
    fontSize: 16,
    color: '#007bff',
  },
  usernameText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default AccountScreen;
