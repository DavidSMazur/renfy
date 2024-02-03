import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from './MessagesScreen';
import MessageDetailScreen from './MessageDetailScreen';

const Stack = createStackNavigator();

const MessagesStack = () => {
  return (
    <Stack.Navigator initialRouteName="MessagesScreen">
      <Stack.Screen name="MessagesScreen" component={MessagesScreen} options={{ title: 'Messages' }} />
      <Stack.Screen name="MessageDetailScreen" component={MessageDetailScreen} options={({ route }) => ({ title: route.params.name })} />
    </Stack.Navigator>
  );
};

export default MessagesStack;
