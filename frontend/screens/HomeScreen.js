import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, PermissionsAndroid, Platform } from 'react-native';
import BleManager from 'react-native-ble-manager';

const HomeScreen = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    BleManager.start({ showAlert: false });

    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
        if (result !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Permission denied');
        }
      });
    }

    const handleDiscoverPeripheral = (peripheral) => {
      console.log('Got ble peripheral', peripheral);
      if (!devices.some(device => device.id === peripheral.id)) {
        setDevices([...devices, peripheral]);
      }
    };

    BleManager.scan([], 5, true).then(() => {
      console.log('Scanning...');
    });

    BleManager.start({showAlert: false});

    BleManager.checkState();

    const subscription = BleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      handleDiscoverPeripheral
    );

    return () => {
      subscription.remove();
    };
  }, [devices]);

  return (
    <View>
      <FlatList
        data={devices}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>{item.name || 'Unnamed device'} - {item.id}</Text>
        )}
      />
    </View>
  );
};

export default HomeScreen;
