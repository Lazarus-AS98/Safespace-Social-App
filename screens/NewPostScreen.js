            import React, { useState } from 'react'
            import { StyleSheet, Text, View,Button,Alert } from 'react-native'
            import { AddImage, InputField, InputWrapper,SubmitBtn,
              SubmitBtnText, } from '../styles/AddPost'
            import ActionButton from 'react-native-action-button';
            import { FloatingAction } from "react-native-floating-action";
            import ImagePicker from 'react-native-image-crop-picker';
            //import Icon from 'react-native-vector-icons/MaterialIcons';
            import Ionicons from 'react-native-vector-icons/Ionicons';

            export default function NewPostScreen() {
              const [image, setImage] = useState(null);
              const [post, setPost] = useState(null);
              const takePhotoFromCamera = () => {
                ImagePicker.openCamera({
                  width: 1200,
                  height: 780,
                  cropping: true,
                }).then((image) => {
                  console.log(image);
                  const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
                  setImage(imageUri);
                });
              };
              const choosePhotoFromLibrary = () => {
                ImagePicker.openPicker({
                  width: 1200,
                  height: 780,
                  cropping: true,
                }).then((image) => {
                  console.log(image);
                  const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
                  setImage(imageUri);
                });
              };
              
                    
                  
                return (
            
                    <View style={styles.background_container}>
            
                        <InputWrapper>
                        {image != null ? <AddImage source={{uri: image}} /> : null}
                        <InputField
                            placeholder="Whats on your mind?"
                            multiline
                            numberOfLines={4} 
                            
                               
                        />
                        <SubmitBtn onPress={()=>{}}>
                        <SubmitBtnText>Post</SubmitBtnText>
                        </SubmitBtn>
                        </InputWrapper>
                        <ActionButton 
                        style={{marginBottom:50}}
                        buttonColor="rgba(231,76,60,1)">
                        <ActionButton.Item
                        buttonColor='#9b59b6' 
                        title="Take Photo" 
                        onPress={takePhotoFromCamera}>
                        <Ionicons name="camera-outline" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item 
                        buttonColor='#3498db' 
                        title="Select Photo" 
                        onPress={choosePhotoFromLibrary}>
                        <Ionicons name="md-images-outline" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        </ActionButton>
                    </View>
                );
                    }
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
