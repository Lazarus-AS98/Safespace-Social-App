import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { InputField, InputWrapper } from '../styles/NewPostElements'

export default function NewPostScreen() {
    return (
        <View style={styles.background_container}>
            <InputWrapper>
            <InputField
                placeholder="Whats on your mind?"
            />
            
            </InputWrapper>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
