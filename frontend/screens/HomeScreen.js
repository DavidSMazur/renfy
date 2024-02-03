import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Animated } from 'react-native';
import { data, locationData } from "./Content"; // Assuming locationData is also imported from Content.js
import ActionCard from "../components/ActionCard";

const HomeScreen = () => {
    const [usernamePairs, setUsernamePairs] = useState([]);
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
        let mounted = true;

        const addCardWithDelay = () => {
            if (!mounted) return;

            let index1 = Math.floor(Math.random() * data.length);
            let index2;
            do {
                index2 = Math.floor(Math.random() * data.length);
            } while (index1 === index2);

            const locationIndex = Math.floor(Math.random() * locationData.length);
            const newPair = {
                username1: data[index1],
                username2: data[index2],
                location: locationData[locationIndex], // Random location
                timestamp: new Date().toLocaleString() // Current timestamp
            };

            setUsernamePairs(currentPairs => [newPair, ...currentPairs]); // Prepend new pair

            // Reset animation value
            fadeAnim.setValue(0);

            // Start the animation
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start();

            // Calculate a random delay
            const nextDelay = Math.random() * 3000 + 1000; // Random delay between 1s and 4s
            setTimeout(addCardWithDelay, nextDelay);
        };

        addCardWithDelay();

        return () => { mounted = false; };
    }, []);

    return (
        <ScrollView style={styles.container}>
            {usernamePairs.map((pair, index) => (
                <Animated.View
                    key={index}
                    style={[
                        styles.fadeIn,
                        {
                            transform: [{
                                translateY: fadeAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-10, 0]
                                })
                            }]
                        }
                    ]}
                >
                    <ActionCard
                        username1={pair.username1}
                        username2={pair.username2}
                        location={pair.location}
                        timestamp={pair.timestamp}
                    />
                </Animated.View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    fadeIn: {
        // Additional styling for animated component
    },
});

export default HomeScreen;
