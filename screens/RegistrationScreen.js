import  React, {useContext, useState}  from 'react';
import { ScrollView,TouchableOpacity, Text,StyleSheet,Image, useColorScheme,Alert,View, Linking } from 'react-native';
import { Button, TextInput,IconButton,Surface,HStack} from '@react-native-material/core';
import { NavigationContainer,DefaultTheme,DarkTheme, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { Input, Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { windowHeight,windowWidth } from '../utils/Dimentions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import FormButton from '../components/FormButton';
import { Divider } from 'react-native-elements';
import { AuthContext } from '../navigation/AuthProvider';
//import FormInput from '../components/FormInput'


function RegistrationScreen({ navigation }) {
  const { colors } = useTheme();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);
    return (
      <ScrollView contentContainerStyle={styles.container}>
    <Surface 
      elevation={24}
      style={{
        width:'95%',
        height: windowHeight/2.3,
        borderRadius:15,
        alignItems:'center',
        marginBottom:10,
        backgroundColor:colors.surface
      }}
      >
        <View style={{width:'95%',textAlign:'left'}}>
        <Text style={{color:colors.on_surface, margin:10 ,textAlign:'left'}}> Sign up now </Text>
        </View>     
   <FormInput
      labelName="Enter Username/Email"
      labelValue={email}
      onChangeText={(userEmail) => setEmail(userEmail)}
      placeholderText="Email"
      iconType="account-box"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
       // labelName={"Enter Name"}
        //iconName={"people"}
      />
      <FormInput
      labelName="Enter Password"
      labelValue={password}
      onChangeText={(userPassword) => setPassword(userPassword)}
     // placeholderText="Password"
      iconType="lock"
      secureTextEntry={true}
       // labelName={"Enter Name"}
        //iconName={"people"}
      />
      <FormInput
        labelName="Confirm Password"
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
       // placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />
     <Button 
        title="Sign Up" 
        contentContainerStyle={styles.ButtonStyle}
        marginVertical={5}
        titleStyle={{color: colors.text , fontSize: 20, fontWeight: 'bold',}}
        color= {colors.primary}
        onPress={() => register(email, password)}
     />
     </Surface>
       <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>
      <View style={{marginBottom:20,width:'90%', textAlign:"center"}}>
        <HStack spacing={2} >
        <Divider  color={colors.on_surface} style={{marginVertical:10, width:'45%'}} />
        <Text style={{color:colors.on_surface}} >or</Text>
        <Divider  color={colors.on_surface} style={{width:'45%',marginVertical:10}} />  
        </HStack>
      </View>
      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign Up with Facebook"
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
            buttonTitle="Sign Up with Google"
            btnType="sc-google-plus"
            iconsize={42}
            //iconPack={"evilIcons"}
            color="#ffffff"
            backgroundColor="#3283fc"
            //onPress={() => googleLogin()}
          />
          </View>
      ) : null}

          <Divider
            inset={true} 
            insetType="middle" 
            width={0}
            color={colors.on_surface}
            style={{marginVertical:20,width:"90%"}}
            //subHeader="Divider"
            //subHeaderStyle={{textAlign:'center', color:colors.on_surface }}
          />
          
          <SocialButton
            buttonTitle="Check us out on GitHub"
            iconPack={"evilIcons"}
            btnType="sc-github"
            iconsize={37}
            color="#ffffff"
            backgroundColor="#010409"
            onPress={() => Linking.openURL("https://github.com/Lazarus-AS98/Safespace-Social-App.git")}
          />
                  
    <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text 
        style={{
          fontSize: 17,
          fontWeight: '500',
          fontFamily: 'Lato-Regular',
          color:colors.on_surface}}
          >
            Have an account? Sign In
        </Text>
      </TouchableOpacity>
    </ScrollView>

    );
  }

  export default RegistrationScreen;
  const styles = StyleSheet.create({

    logo: {
      height:windowHeight/4,
      width: '100%',
      resizeMode: 'cover',
      margin:20,
    },

    container: {
      justifyContent: 'center',
      alignItems: 'center',
      //padding: 20,
      paddingTop: 50,
      width:windowWidth,
    height:windowHeight,
    },
    InputStyle: {
     color: '#e4e6eb',
     },
     registerTextStyle: {
     color: '#72deff',
     textAlign: 'center',
     fontWeight: 'bold',
     fontSize: 14,
     alignSelf: 'center',
     padding: 10,
     },
     ButtonStyle: {
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center',
      height: windowHeight/17,
      width: windowWidth/2,
      },
     errorTextStyle: {
     color: 'red',
     textAlign: 'center',
     fontSize: 14,
     },
     LabelStyle: {
     color: '#c495fd',
     fontSize: 13,
     },
     textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 5,
      marginBottom: 25,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      fontFamily: 'Lato-Regular',
      color: 'grey',
    },
     
     navButton: {
      marginTop:5,
      marginBottom:40
    },
    forgotButton: {
      marginTop:5,
    },
    navButtonText: {
     // color:'red',
      fontSize: 18,
      fontWeight: '500',
      fontFamily: 'Lato-Regular',
    },

    });