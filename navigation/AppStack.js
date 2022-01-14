import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
import {NavigationContainer,DefaultTheme,DarkTheme, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import { windowHeight } from '../utils/Dimentions';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyFeed = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="RN Social"
      component={HomeScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

const MessageStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={ChatScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

function AppStack ()
{
  const {colors} = useTheme();
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size}) => {
      let iconName;

      if(route.name ==='Home'){
        size = focused ? 35 : 25;
        iconName = focused ? 'home' : 'home-outline';
      }
      else if(route.name ==='Messages'){
        size = focused ? 35 : 25;
        iconName = focused ? 'message-text' : 'message-text-outline';
      }
      else if(route.name ==='Profile'){
        size = focused ? 35 : 25;
        iconName = focused ? 'account-details' : 'account-details-outline';
      }
      return <MaterialCommunityIcons name={iconName} color={color} size={size}/>
    },
      tabBarShowLabel:false,
      tabBarStyle: { 
        position: 'absolute',
        //paddingVertica:10,
        marginBottom:10,
        marginHorizontal:10,
        borderRadius:15, 
        backgroundColor:colors.surface,
        elevation:24,
        height:windowHeight/9.5,
      },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.on_surface,

    })}
    >
      <Tab.Screen
        name="Home"
        component={MyFeed}
        options={{
          headerShown:false,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageStack}
        options={{
          headerShown:false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown:false,
        }}
      />
    </Tab.Navigator>
  );
};
export default AppStack;

/*
<Tab.Screen
        name="Home"
        component={MyFeed}
        options={({route}) => ({
          tabBarLabel: 'Home',
          headerShown:false,
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({focused,color, size}) => (
            <MaterialCommunityIcons
              name={iconName}
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Messages"
        component={MessageStack}
        options={{
          //tabBarVisible: getTabBarVisibility(route),
          // Or Hide tabbar when push!
          // https://github.com/react-navigation/react-navigation/issues/7677
          // tabBarVisible: route.state && route.state.index === 0,
          // tabBarLabel: 'Home',
          headerShown:false,
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown:false,
          // tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />

*/