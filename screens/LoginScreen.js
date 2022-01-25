import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  ImageBackground,
  } from 'react-native'; 
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { windowHeight, windowWidth } from '../utils/Dimentions';
import {  Input } from 'react-native-elements';
//import TextInput from 'react-native-material-textinput';
import {TextInput, IconButton,Button,Surface, HStack} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer,DefaultTheme,DarkTheme, useTheme } from '@react-navigation/native';
import { color, renderNode } from 'react-native-elements/dist/helpers';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//import { colors } from 'react-native-elements';
//import { TextInput } from 'react-native-paper';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Reinput from 'reinput';
import { AuthContext } from '../navigation/AuthProvider';
//import { ReinputButton } from "reinput";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword,value, setValue] = useState();
  const { colors } = useTheme();
 
  const {login} = useContext(AuthContext);

  return ( 
    <ScrollView contentContainerStyle={styles.background_container}>
      <ImageBackground 
        source={require('../images/6.png')} 
        resizeMode="repeat"
        style={styles.ImageBackground}
      >
      <Surface
      elevation={24}
      style={{justifyContent: "center",
      alignItems: "center",
      height:windowHeight/4,
      width:windowWidth/2,
      marginHorizontal:10,
      marginTop:35,
      marginBottom:5,
      borderRadius:40,
      backgroundColor:colors.surface}}
      >
        <Image
        source={require('../images/login7.png')}
        style={styles.logo}
      />
      </Surface>
      
      <Text 
      style={{
        fontFamily:'QwitcherGrypen-Bold',
        fontSize: 70,
        //fontWeight:'900',
        marginBottom: 10,
        color:colors.primary
        }}>
          Safespace
      </Text>
      
      <Surface 
      elevation={24}
      style={{
        width:'95%',
        height: windowHeight/2.55,
        borderRadius:15,
        alignItems:'center',
        marginBottom:20,
        backgroundColor:colors.surface
      }}
      >
        <View style={{width:'95%',textAlign:'left'}}>
        <Text style={{color:colors.on_surface, margin:10 ,textAlign:'left'}}> Log into you account </Text>
        </View>
        
      <FormInput
      labelName="Enter Username/Email"
      labelValue={email}
      onChangeText={(userEmail) => setEmail(userEmail)}
      placeholderText="abc@email.com"
      iconType="account-box"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      />
  
      
      <FormInput
      labelName="Enter Password"
      labelValue={password}
      onChangeText={(userPassword) => setPassword(userPassword)}
      iconType="lock"
      secureTextEntry={true}
      />
   <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Registration')}>
      <Text style={{textAlign:'center',marginBottom:10, color:colors.text_on_surface, fontSize: 15, fontWeight:'400'}} >
          Forgot Password?
        </Text>
      </TouchableOpacity>
  <HStack spacing={10} style={{ justifyContent:'center', alignItems:'center', width:'100%'}}>
  <Surface
      elevation={20}
      category="medium"
      margin={15}
    >
   <Button 
   title="Signup" 
   titleStyle={{padding:5,color: colors.text , fontSize: 20, fontWeight: 'bold',}}
   contentContainerStyle={styles.ButtonStyle} 
   color= {colors.primary}
   leading={props => <Icon style={{color:colors.text}} name="person-add" {...props} />} 
   onPress={() => navigation.navigate('Registration')}
   />
   </Surface>
   
   <Surface
      elevation={20}
      category="medium"
      margin={15}
    >
   <Button 
   title="Login" 
   titleStyle={{padding:5,color: colors.text , fontSize: 20, fontWeight: 'bold',}}
   contentContainerStyle={styles.ButtonStyle} 
   color= {colors.primary}
   trailing={props => <Icon style={{color:colors.text}} name="send" {...props} />} 
   onPress={() => login(email,password)} 
   />
   </Surface>
  </HStack>
   
      </Surface>
      
   <View style={{marginBottom:30}}>
   <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="sc-facebook"
            iconPack={"evilIcons"}
            iconsize={37}
            //color="#4867aa"
            color={"#ffffff"}
            //backgroundColor="#e6eaf4"
            backgroundColor={"#4267b2"}
            //onPress={() => fbLogin()}
          />
          <SocialButton
            buttonTitle="Sign In with Google +"
            btnType="sc-google-plus"
            iconsize={42}
            //iconPack={"evilIcons"}
            color='#ffffff'
            backgroundColor="#dd4e42"
            //onPress={() => googleLogin()}
          />
        </View>
      
    </ImageBackground>
  </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:windowWidth,
    height:windowHeight,
  },
  ImageBackground:{
    flex:1,
    justifyContent:"center",
    alignItems: 'center',
    width:windowWidth,
    height:windowHeight,
  },
  input_surface:{
        marginVertical:10,
        justifyContent: "center",
        alignItems: "center",
        //marginLeft:30,
        width: windowWidth/1.20,
        height: windowHeight/17,
        fontFamily:'Roboto',
        //borderRadius:50,
        backgroundColor:"red"   
  },
  ButtonStyle: {
    alignItems:'center',
    justifyContent:'center',
    height: windowHeight/17,
    },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height:"100%",
    width:"100%",
  },
  navButton: {
    marginTop: 5,
    marginBottom:25
  },
  forgotButton: {
    marginTop:2
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Lato-Regular',
  },
});
/*
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />


 <ScrollView contentContainerStyle={styles.background_container}>
      /////////////////////////////
     <Surface
      elevation={24}
      //category="large"
      style={styles.image_surface}
      >
      <Image
        source={require('../images/login2.gif')}
        style={styles.logo}
      />
      </Surface>
      <Surface
      elevation={24}
      category="medium"
      style={styles.input_surface}
      >
      <TextInput
      label="Enter Username"
      inputContainerStyle={{ height:"100%",width:'100%',backgroundColor:colors.surface}}
      //style={{ height:"100%",width:'100%',backgroundColor:colors.surface}}
      inputStyle={{color:colors.text_variant}}
      color={colors.primary}
      leading={(props) => <Icon name="person" {...props} />}
      />
      </Surface>
    <Surface
      elevation={24}
      category="medium"
      style={styles.input_surface}
    >
   <TextInput
      label="Enter Password"
      inputContainerStyle={{ height:'100%',width:'100%',backgroundColor:colors.surface}}
      inputStyle={{color:colors.text_variant}}
      trailing={props => (
        <IconButton icon={props => <Icon name="visibility" {...props} />} {...props} />
      )}
      color={colors.primary}
      leading={(props) => <Icon name="lock" {...props} />}
      secureTextEntry={true}
      labelStyle={colors.text}
   />
   </Surface>
   <Surface
      elevation={10}
      category="medium"
      margin={30}
    >
   <Button 
   title="Login" 
   titleStyle={{padding:5,color: colors.text , fontSize: 20, fontWeight: 'bold',}}
   contentContainerStyle={styles.ButtonStyle} 
   color= {colors.primary}
   trailing={props => <Icon style={{color:colors.text}} name="send" {...props} />} 
   onPress={() => navigation.navigate('Login')} 
   />
   </Surface>
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Registration')}>
      <Text style={{color:colors.primary_variant, fontSize: 18, fontWeight:'700'}} >
          "Don't have an acount? Create here"
        </Text>
      </TouchableOpacity>
*/