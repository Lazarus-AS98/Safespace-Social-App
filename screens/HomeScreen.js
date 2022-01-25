import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native'
import { useTheme } from '@react-navigation/native';
import FormButton from '../components/FormButton'
import { AuthContext } from '../navigation/AuthProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Container} from '../styles/FeedStyles';
import PostCard from '../components/PostCard';

const Posts = [
    {
      id: '1',
      userName: 'Abhijeet Kumar',
      userImg: require('../assets/users/abhi1.jpg'),
      postTime: '4 mins ago',
      post:
        'Hey , this is my test for a post of my social app in React Native.',
      //postImg: require('../assets/posts/post-img-3.jpg'),
      postImage: 'none',
      //postImg: require('../assets/users/abhi1'),
      liked: true,
      likes: '14',
      comments: '5',
    },
    {
      id: '2',
      userName: 'Divyanshu',
      userImg: require('../assets/users/div1.jpeg'),
      postTime: '2 hours ago',
      post:
        'A much needed vacation ...!!! ',
      //postImg: 'none',
      postImage: require('../assets/posts/post2.jpeg'),
      liked: false,
      likes: '8',
      comments: '0',
    },
    {
      id: '3',
      userName: 'Ujani Gupta',
      userImg: require('../assets/users/ujani1.jpeg'),
      postTime: '1 hours ago',
      post:
        "thank you for my b'day gifts",
        postImage: require('../assets/posts/ug_post.jpeg'),
      liked: true,
      likes: '1',
      comments: '0',
    },
    {
      id: '4',
      userName: 'Abhishek Shrestha',
      userImg: require('../assets/users/abhishek1.jpeg'),
      postTime: '1 day ago',
      post:
        'Hey there, this is my test for a post of my social app in React Native.',
      postImage: require('../assets/posts/post-img-4.jpg'),
      liked: true,
      likes: '22',
      comments: '4',
    },
    {
      id: '5',
      userName: 'Mayank Kumar',
      userImg: require('../assets/users/mayank1.jpeg'),
      postTime: '2 days ago',
      post:
        'Hey there, this is my test for a post of my social app in React Native.',
      postImage: 'none',
      
      liked: false,
      likes: '0',
      comments: '0',
    },
  ];
  
export default function HomeScreen({ navigation }) {
    const {user,logout} = useContext(AuthContext);
    const colors = useTheme();
    return (
       <View style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:2,
        paddingTop:10,
        paddingBottom:20,
        }}>
         <FlatList
         data={Posts}
         renderItem={({item}) => <PostCard item ={item} />}
         keyExtractor={item=>item.id}
         /> 
       </View>
    );
}


    
