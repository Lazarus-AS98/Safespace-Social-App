import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
import {NavigationContainer,DefaultTheme,DarkTheme, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/.bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import NewPostScreen from '../screens/NewPostScreen';
import MessageScreen from '../screens/MessageScreen';
import { windowHeight } from '../utils/Dimentions';
import EditProfileScreen from '../screens/EditProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const MyFeed = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Safespace"
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
    <Stack.Screen name="Message" component={MessageScreen} options={{
        headerShown: false,
      }}/>
    <Stack.Screen name="Chat" component={ChatScreen} />
  </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profil"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
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
      else if(route.name ==='NewPost'){
        size = focused ? 35 : 25;
        iconName = focused ? 'card-plus' : 'card-plus-outline';
      }
      return <MaterialCommunityIcons name={iconName} color={color} size={size}/>
    },
      tabBarShowLabel:false,
      tabBarStyle: { 
        position: "absolute",
        
        paddingVertica:10,
        marginBottom:10,
        marginHorizontal:10,
        borderRadius:15, 
        backgroundColor:colors.surface,
        elevation:24,
        height:windowHeight/15,
      },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.on_surface,
      tabBarHideOnKeyboard:true,
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
      <Tab.Screen
        name="NewPost"
        component={NewPostScreen}
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