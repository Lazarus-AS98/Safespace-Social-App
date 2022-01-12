import React,{useContext,useState,useEffect} from "react";
import { useColorScheme } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { AuthContext } from "./AuthProvider";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";


const MyTheme_dark = {
    dark: true,
    colors: {
      primary: '#BB86FC',
      //primary:'#85aef2',
      //primary:'#664ef5',
      primary_variant:'#4284f3',
      //background: '#0e1217',
      background:'#121212',
      card: '#03DAC6',
      text: '#000000',
      text_variant: '#FFFFFF',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
      surface: '#242424',
      //placeholder:'white',
      on_surface:'#5d5d5d',
      text_on_surface:"#CFD8DC",
      //text_on_surface:"#455a64"
    },
  };
  const MyTheme_light = {
    dark: false,
    colors: {
      //primary: '#6200EE',
      //primary: '#57c4f2',
      primary:"#4285f4",
      primary_variant:'#4284f3',
      background: '#FFFFFF',
      card: '#03DAC6',
      text: '#ffffff',
      text_variant: '#000000',
      border: '#18181c)',
      notification: 'rgb(255, 69, 58)',
      surface: '#eceff1',
      on_surface:'#455A64',
      text_on_surface:"#37474F",
    },
  };
function Routes(){
    const scheme = useColorScheme();
    const {user,setUser} = useContext(AuthContext);
    const [initializing, setInitializing] =useState(true);

    const onAuthStateChanged = (user) => {
      setUser(user);
      if(initializing) { setInitializing(false);}
    }

    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);

    if(initializing) return null;

    return(
        <NavigationContainer theme={scheme === 'dark' ? MyTheme_dark : MyTheme_light}>
           {user ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    );

};

export default Routes;