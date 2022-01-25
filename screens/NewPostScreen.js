            import React, { useState } from 'react'
            import { StyleSheet, Text, View,Button,Alert } from 'react-native'
            import { AddImage, InputField, InputWrapper,SubmitBtn,
              SubmitBtnText,StatusWrapper } from '../styles/AddPost'
              import { ActivityIndicator } from '@react-native-material/core';
            import ActionButton from 'react-native-action-button';
            import { FloatingAction } from "react-native-floating-action";
            import ImagePicker from 'react-native-image-crop-picker';
            //import Icon from 'react-native-vector-icons/MaterialIcons';
            import Ionicons from 'react-native-vector-icons/Ionicons';
            import storage from '@react-native-firebase/storage';

            export default function NewPostScreen() {
              const [image, setImage] = useState(null);
              const [uploading, setUploading] = useState(false);
              const [transferred, setTransferred] = useState(0);
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
              
                const submitPost = async () =>  
                {
                  const uploadUri = image;
                  let filename = uploadUri.substring(uploadUri.lastIndexOf('/')+1);
                  setUploading(true);
                  setTransferred(0);

    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);

    // Set transferred state
    task.on('state_changed', (taskSnapshot) => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });


                  try {
                    await storage().ref(filename).putFile(uploadUri);
                    setUploading(false);
                    Alert.alert(
                      'Image uploaded!',
                      'Your image has been uploaded to Firebase Cloud Storage Successfully!'  
                    );
                  } catch(e){
                    console.log(e);
                  }   
                  setImage(null);
              }
                return (
            
                    <View style={styles.background_container}>
            
                        <InputWrapper>
                        {image != null ? <AddImage source={{uri: image}} /> : null}
                        <InputField
                            placeholder="Whats on your mind?"
                            multiline
                            numberOfLines={4} 
                            
                               
                        />
                         {uploading ? (
          <StatusWrapper>
            <Text>{transferred} % Completed!</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </StatusWrapper>
        ) : (
          <SubmitBtn onPress={submitPost}>
            <SubmitBtnText>Post</SubmitBtnText>
          </SubmitBtn>
        )}
                        
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
