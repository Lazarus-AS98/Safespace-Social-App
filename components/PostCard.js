import React, {useContext, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Surface } from "@react-native-material/core";
import { StyleSheet } from 'react-native';
import {useTheme } from '@react-navigation/native';
import { windowHeight, windowWidth } from '../utils/Dimentions';
import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../styles/FeedStyles';
//import { styles } from 'reinput/src/Input';

const PostCard = ({item}) => {
  const {colors} =useTheme();
  return(
    <Surface style={{
      backgroundColor: colors.surface,
      elevation:14,
    width:'100%',

    marginBottom: 20,
    borderRadius: 20,
    }}>

      <UserInfo>
        <UserImg source={item.userImg} />
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {item.postImage != 'none' ? <PostImg source= {item.postImage}/> : <Divider />}
      
      <InteractionWrapper>
        <Interaction active>
          <Ionicons name="heart" size={25} color="#2e64e5" />
          <InteractionText active>12 Likes</InteractionText>
        </Interaction>
        <Interaction>
          <Ionicons name="md-chatbubble-outline" size={25} />
          <InteractionText>Comment</InteractionText>
        </Interaction>
      </InteractionWrapper>
      </Surface>
    
  );
};
export default PostCard;

  //<PostImg source= {require('../assets/posts/post-img-2.jpg')}/>