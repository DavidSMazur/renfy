import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import RequestsScreen from './screens/RequestScreen';
import MessagesScreen from './screens/MessagesScreen';
import AccountScreen from './screens/AccountScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import MessageStack from './screens/MessageStack';

const Tab = createBottomTabNavigator();

export default function App() {
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
                    name="Requests"
                    component={RequestsScreen}
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
    );
}
