import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();

function AppStack ()
 {
    return (
        <Stack.Navigator>
            <Stack.Screen name = 'Home' component={HomeScreen} />
        </Stack.Navigator>
    );

 }

export default AppStack;
