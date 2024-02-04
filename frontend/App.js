import React, { useState, useEffect } from 'react';
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

const MainApp = () => {

};

const Stack = createStackNavigator();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // useEffect(() => {
    //     const checkLoginStatus = async () => {
    //         const isLoggedInValue = await AsyncStorage.getItem('isLoggedIn');
    //         setIsLoggedIn(isLoggedInValue === 'true');
    //     };

    //     checkLoginStatus();
    // }, []);

    return (
        <NavigationContainer>
        <Tab.Navigator>
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
          <Tab.Screen
              name="Bluetooth"
              component={BluetoothScreen}
              options={{
                  tabBarIcon: ({ color, size }) => (
                      <Icon name="bluetooth" color={color} size={size} />
                  ),
              }}
          />
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
        </Tab.Navigator>
        </NavigationContainer>
        // <NavigationContainer>
        //     {/* {isLoggedIn ? (
        //         <MainApp />
        //     ) : (
        //         <Stack.Navigator screenOptions={{ headerShown: false }}>
        //             <Stack.Screen name="Login" component={LoginScreen} />
        //         </Stack.Navigator>
        //     )} */}
        // {/* </NavigationContainer> */}
    );
}
