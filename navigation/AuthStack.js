import  React, {useEffect, useState} from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer,DefaultTheme,DarkTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen'
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

function AuthStack() {
  
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => 
      {
      if(value == null)
       {
        AsyncStorage.setItem('alreadyLaunched' , 'true');
        setIsFirstLaunch(true);
      } 
      else
       {
        setIsFirstLaunch(false);
      }
    }
    );
  }, []);

  if( isFirstLaunch == null){
    return null;
  } else if ( isFirstLaunch == true) {
      routeName = 'Onboarding';
  
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
    <Stack.Screen 
    name="Onboarding" 
    component={OnboardingScreen} 
    options={{
      headerShown: false
    }}/>
    <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
    <Stack.Screen options={{headerShown: false}} name="Registration" component={RegistrationScreen} />
    
    </Stack.Navigator>
  );


}
export default AuthStack;