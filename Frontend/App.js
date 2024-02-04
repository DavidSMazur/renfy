import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import RequestScreen from './screens/RequestScreen';
import AccountScreen from './screens/AccountScreen';
import LoginScreen from './screens/LoginScreen';
import BluetoothScreen from './screens/BluetoothScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import MessageStack from './screens/MessageStack';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // Your validation logic
        if (email && password) { // Assuming login validation passed
            setIsLoggedIn(true);
        }
    };

    return (
        <NavigationContainer>
        {!isLoggedIn ? (<Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
                    name="Messages"
                    component={MessageStack}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="envelope" color={color} size={size} />
                        ),
                        headerShown: false, // Hide the header for the Messages tab
                    }}
                />
          {/* <Tab.Screen
              name="Bluetooth"
              component={BluetoothScreen}
              options={{
                  tabBarIcon: ({ color, size }) => (
                      <Icon name="bluetooth" color={color} size={size} />
                  ),
              }}
          /> */}
          <Tab.Screen
                    name="Requests"
                    component={RequestScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="user-plus" color={color} size={size} /> // Changed to 'user-plus' icon
                        ),
                    }}
                />
          <Tab.Screen 
            name="Account" 
            component={AccountScreen} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="user" color={color} size={size} />
                ),
            }}
          />
        </Tab.Navigator>) : (
                 <View style={styles.container}>
                 <TextInput
                     placeholder="Full Name"
                     value={fullName}
                     onChangeText={setFullName}
                     style={styles.input}
                 />
                 <TextInput
                     placeholder="Username"
                     value={username}
                     onChangeText={setUsername}
                     style={styles.input}
                 />
                 <TextInput
                     placeholder="Email"
                     value={email}
                     onChangeText={setEmail}
                     keyboardType="email-address"
                     style={styles.input}
                 />
                 <TextInput
                     placeholder="Password"
                     value={password}
                     onChangeText={setPassword}
                     secureTextEntry
                     style={styles.input}
                 />
                 <Button title="Log In" onPress={handleLogin} />
             </View>
             )}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
});
