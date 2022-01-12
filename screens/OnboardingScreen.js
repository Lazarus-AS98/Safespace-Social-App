import * as React from 'react';
import { View,TouchableOpacity, Text, useColorScheme , Image,StyleSheet} from 'react-native';
import { NavigationContainer,DefaultTheme,DarkTheme, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Onboarding from 'react-native-onboarding-swiper';

const iDots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? '#B0B3B8' : '#2e2e2e';
    return (
    <View
    style={{
    width: 5,
    height: 5,
    borderRadius: 2,
    marginHorizontal: 3,
    backgroundColor
    }}
    />
    )
   }
   const iSkip = ({ ...props }) => (
    <Button
    title="Skip"
    buttonStyle={{ paddingHorizontal: 20, margin: 10 }}
    containerStyle={{ paddingRight: 10 }}
    type="clear"
    titleStyle={{ padding: 0, fontSize: 17, fontWeight: "bold", color: "#c495fd", 
   fontFamily: 'Roboto' }}
    {...props}
    />
   );
   const iNext = ({ ...props }) => (
    <Button
    icon={
    <Icon
    name="arrow-forward-ios"
    size={25}
    color="black"
    />
    }
    iconRight
    title='Next'
    buttonStyle={{ flex: 0, backgroundColor: '#02dac5', margin: 10, 
   borderRadius: 30 }}//1eb980
    titleStyle={{ flex: 0, padding: 10, fontSize: 20, fontWeight: "700", color: 
   "black", fontFamily: 'Roboto' }}
    {...props}
    />
   );
   const iDone = ({ ...props }) => (
    <Button
    icon={
    <Icon
    name="check-circle"
    size={25}
    color="black"
    />
    }
    iconRight
    title='Done'
    buttonStyle={{ flex: 0, backgroundColor: '#02dac5', margin: 5, 
   borderRadius: 30 }}//1eb980
    titleStyle={{ flex: 0, padding: 10, fontSize: 20, fontWeight: "700", color: 
   "black", fontFamily: 'Roboto' }}
    {...props}
    />
   );

function OnboardingScreen({ navigation }) { 
//no
    return (
        <Onboarding
        SkipButtonComponent={iSkip}
        NextButtonComponent={iNext}
        DoneButtonComponent={iDone}
        DotComponent={iDots}
        onSkip={() => navigation.navigate("Login")}// for the final build replace "navigation.navigate" with "navigation.replace"
        onDone={() => navigation.navigate('Login')}
        bottomBarHeight={80}
 pages={[
 {
 backgroundColor: '#fcfdfd',
 image: <Image source={require('../images/1.gif')} style={{ width: 
350, height: 350 }} />,
title: 'Move on',
subtitle: 'From all the apps that steal your data for thier profit',
 },
 {
 backgroundColor: '#fcfdfd',
 image: <Image source={require('../images/2.gif')} 
style={styles.image} />,
 title: 'Move on',
 subtitle: 'From all the apps that steal your data for thier profit',
 },
 {
 backgroundColor: '#fcfdfd',
 image: <Image source={require('../images/3.gif')} 
style={{ width: 350, height: 370 }} />,
 title: 'Aloha... !',
 subtitle: 'To a place where you can share, your most precious memories, without any fear',
 },
 {
 backgroundColor: '#fcfdfd',
 image: <Image source={require('../images/5.webp')} style={{ width: 
250, height: 250, marginBottom: 70 }} />,
 title: 'Chat, Share, Hangout',
 subtitle: 'A place just for you and your friends ',
 },
 {
 backgroundColor: '#2c2c2c',
 image: <Image source={require('../images/4.gif')} 
style={styles.image} />,
 title: 'An app that cares for your eyes',
 subtitle: 'Designed to help you text at night',
 },
 {
 backgroundColor: '#0e1217',
 image: <Image source={require('../images/6.gif')} style={{ width: 
400, height: 351, marginBottom: 55 }} />,
 title: "Create your avatar",
 subtitle: "Click on done... , login or register if you haven't before",
 },
 ]}
 />
 );
};
const styles = StyleSheet.create({
 image: {
 width: 400,
 height: 400,
 margin: 0,
 padding: 0
 },
});
  export default OnboardingScreen;

