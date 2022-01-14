import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import FormButton from '../components/FormButton'
import { AuthContext } from '../navigation/AuthProvider';

export default function SettingScreen({ navigation }) {
    const {user,logout} = useContext(AuthContext);
    return (
        <View style = {styles.container}>
            <Text style={styles.text}>SettingScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    text:{
        fontSize:20,
        color:'#000000'
    }
});
