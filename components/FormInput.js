import React from 'react';
import {View, TextInput, StyleSheet,ScrollView} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import Reinput from 'reinput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Surface from '@react-native-material/core';
import {useTheme} from '@react-navigation/native';

const FormInput = ({labelName,labelValue, placeholderText, iconType,errormsg, ...rest}) => {
  const { colors } = useTheme();
  return (
    <View style={styles.inputContainer}>
      <Reinput
        icon={<Icon  color={colors.on_surface} style={{margin:-2 }} size={27} name={iconType}/>}
        label={labelName}
        labelColor={colors.on_surface}
        value={labelValue}
        style={{  borderRadius:4, height:'100%', width:'100%', backgroundColor: colors.surface}}
        labelColor={colors.on_surface}
        fontSize={15}
        labelActiveTop={-25}
        underlineActiveHeight={2}
        underlineHeight={1}
        color={colors.text_variant}
        marginTop={7}
        fontWeight={"400"}
        underlineColor={colors.on_surface}
        underlineActiveColor={colors.primary}
        labelActiveColor={colors.primary}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        error={errormsg}
        {...rest}
      />
   </View>
      
  );
};

export default FormInput;

const styles = StyleSheet.create({
  input_surface:{
    marginVertical:10,
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height: windowHeight/16,
    fontFamily:'Roboto',
   // borderRadius:20,
    //backgroundColor:"red"   
},
inputContainer: {
  width: '95%',
  height: windowHeight / 10,
  borderRadius: 10,
  flexDirection: 'row',
  alignItems: 'center',
},
 
});

/*const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <MaterialIcons name={iconType} size={25} color="#666" />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};


.....
 inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
*/