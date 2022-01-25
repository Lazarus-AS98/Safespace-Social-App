import { StyleSheet, Text, View,Button,FlatList } from 'react-native';
import React from 'react';
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
  } from '../styles/MessageStyles';
  
  
const Messages = [
    {
      id: '1',
      userName: 'Abhishek Shrestha',
      userImg: require('../assets/users/abhishek1.jpeg'),
      messageTime: '4 mins ago',
      messageText:
        'Hey there, heard your getting a car',
    },
    {
      id: '2',
      userName: 'Divyanshu',
      userImg: require('../assets/users/div1.jpeg'),
      messageTime: '2 hours ago',
      messageText:
        'okh..',
    },
    {
      id: '3',
      userName: 'Ujani Gupta',
      userImg: require('../assets/users/ujani1.jpeg'),
      messageTime: '1 hours ago',
      messageText:
        'got to submit it now... ',
    },
    {
      id: '4',
      userName: 'Mayank Kumar',
      userImg: require('../assets/users/mayank1.jpeg'),
      messageTime: '1 day ago',
      messageText:
        'it was awesome',
    },
    {
      id: '5',
      userName: 'Abhijeet Kumar',
      userImg: require('../assets/users/abhi1.jpg'),
      messageTime: '4 mins ago',
      messageText:
        "happy b'day",
    },
    {
      id: '6',
      userName: 'John Doe',
      userImg: require('../assets/users/user-1.jpg'),
      messageTime: '2 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '7',
      userName: 'Ken William',
      userImg: require('../assets/users/user-4.jpg'),
      messageTime: '1 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '8',
      userName: 'Selina Paul',
      userImg: require('../assets/users/user-6.jpg'),
      messageTime: '1 day ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '9',
      userName: 'Christy Alex',
      userImg: require('../assets/users/user-7.jpg'),
      messageTime: '2 days ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
  ];
  
export default function MessageScreen({navigation}) {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
      <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({});
/*
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
*/