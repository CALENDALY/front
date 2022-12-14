import React from 'react';
import {FlatList, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function GroupList({navigation}:any) {
  const test = [
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test1"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test2"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test3"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test4"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test5"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test6"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test7"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test8"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test9"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test10"
    },
            
  ]
  
  const styles = StyleSheet.create({
    container: {
     flex: 1,
     flexDirection : 'row',
     width:320,
     marginBottom: 15
    },
    leftBox: {
      height:120,
      width:'30%',
      padding:5
    },
    rightBox: {
      width: '70%',
      height: 120, 
      backgroundColor: '#f5a941',
      padding:5
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    rightBoxContent: {
      backgroundColor: '#4ebd7a', 
      width:'100%',
      height:'100%'
    },
    button: {
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      width: 70,
      height: 70,
      marginBottom: 30,
      borderRadius: 35,
      position: 'absolute',
      right : 5,
      bottom : 5,
      ...Platform.select({
          ios: {
              shadowColor: 'rgba(0,0,0,0.2)',
              shadowOpacity: 1,
              shadowOffset: {height: 2, width: 2},
              shadowRadius: 2,
          },

          android: {
              elevation: 0,
              marginHorizontal: 30,
          },
      })
    },

    text: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    }
  });
  
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('GroupScheduleMaking')}>
        <Text>dsfa</Text></TouchableOpacity>
       {/* onPress={() => navigation.navigate('GroupListDetail')} */}
      <FlatList
        data = {test}
        renderItem = {({item,index}) => 
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('GroupManage')} >
          <View style={styles.leftBox}>
            <Image 
              style={{height:'100%',width:'100%'}}
              source={{uri:item.image}} 
            />
          </View>
          <View style={styles.rightBox}>
            <View style={styles.rightBoxContent}>
              <Text>{item.groupName}</Text>
            </View>
          </View>
        </TouchableOpacity>
      }
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('GroupMaking')}  
      >
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>

  );
}

export default GroupList;
