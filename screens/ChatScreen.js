
import React, {useContext,Component} from 'react';
import { Image,StyleSheet, Text, View } from 'react-native'
import FormButton from '../components/FormButton'
import { AuthContext } from '../navigation/AuthProvider';
//import { BlurView } from '@react-native-community/blur';
export default function ChatScreen () {
    return (
        <View style={styles.container}>
        <Text style={styles.absolute}>Hi, I am some blurred text</Text>
{/* in terms of positioning and zIndex-ing everything before the BlurView will be blurred */}   
            
        <Text>I'm the non blurred text because I got rendered on top of the BlurView</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        //backgroundColor: '#ffffff',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    text:{
        fontSize:20,
        color:'#000000'
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }
});

