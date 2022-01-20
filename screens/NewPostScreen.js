import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { InputField, InputWrapper } from '../styles/AddPost'
//import ActionButton from 'react-native-action-button';
import { FloatingAction } from "react-native-floating-action";
//import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function NewPostScreen() {
    const actions = [
        {
          text: "TakePhoto",
          color:'#4285f4',
          icon: require("../images/TakePhoto.png"),
          name: "bt_accessibility",
          position: 1
        },
        {
          text: "ChoosePhoto",
          color:'#4285f4',
          icon: require("../images/AddPhoto.png"),
          name: "bt_language",
          position: 2
        },
        
      ];
    return (
        <View style={styles.background_container}>
            <InputWrapper>
            <InputField
                placeholder="Whats on your mind?"
                multiline
                numberOfLines={4}            
            />
            </InputWrapper>
            <FloatingAction
             color='#4285f4'
            distanceToEdge={{vertical:100,horizontal:20}}
        actions={actions}
        onPressItem={name => {
         console.log(`selected button: ${name}`);
         }}
        />

           
        </View>
    );
};

const styles = StyleSheet.create({
    background_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
})
/*<ActionButton 
            style={{marginBottom:50}}
            buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item
            buttonColor='#9b59b6' 
            title="New Post" 
            onPress={() => console.log("notes tapped!")}>
            <Ionicons name="camera-outline" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item 
            buttonColor='#3498db' 
            title="Notifications" 
            onPress={() => {}}>
            <Ionicons name="md-notifications-off" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            
            </ActionButton>*/