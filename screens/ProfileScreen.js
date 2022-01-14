import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from '@react-navigation/native';
import FormButton from '../components/FormButton'
import { AuthContext } from '../navigation/AuthProvider';

export default function HomeScreen({ navigation }) {
    const {user,logout} = useContext(AuthContext);
    const colors = useTheme();
    return (
        <View style = {styles.container}>
            <Text style ={{fontSize:25, color:colors.text_variant}} > ProfileScreen {user.uid}</Text>
            <FormButton buttonTitle={'Logout'} onPress={() => logout()}/>
        </View>
    );
}
//const {colors} = useTheme();
const styles = StyleSheet.create({
    
    container:{
        //backgroundColor: colors.background,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
});
