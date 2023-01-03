import React from 'react';
import {FlatList, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

function GroupList({navigation}:any) {
  const test = [
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test1",
      Description : "이것 저것 하는 그룹"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test2",
      Description : "이것 저것 요곳조곳 이런거 저런거 세줄짜리로 채워버리고 싶은데 쓸 말 이 없에 어떡하지 하는 그룹"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test3",
      Description : "이것 저것 하는 그룹"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test4",
      Description : "이것 저것 하는 그룹"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test5",
      Description : "이것 저것 하는 그룹"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test6",
      Description : "이것 저것 하는 그룹"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test7",
      Description : "이것 저것 하는 그룹"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test8",
      Description : "이것 저것 하는 그룹"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test9",
      Description : "이것 저것 하는 그룹"
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      groupName : "test10",
      Description : "이것 저것 하는 그룹"
    },
            
  ]
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection : 'row',
    //  width:320,
      margin: 15,
      marginBottom : 7.5,
      // borderColor : "red",
      borderWidth:1,
      borderRadius : 30,
      backgroundColor: "#ffffff",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      elevation: 14,
      borderColor:"white"
     
    },
    leftBox: {
      height:120,
      width:'30%',
      padding:5,
      borderRadius : 30,
      justifyContent:"center",
      alignItems:'center',
      
    },
    rightBox: {
      width: '70%',
      height: 120, 
      // backgroundColor: '#f5a941',
      padding:5,
      borderRadius : 30
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    rightBoxContent: {
      // backgroundColor: '#4ebd7a', 
      width:'100%',
      height:'100%',
      borderRadius : 30,
      padding:5,
      paddingRight:15,
      paddingTop:17,
  
      // justifyContent:"center"
    },
    button: {
      // backgroundColor: 'green',
      // alignItems: 'center',
      // justifyContent: 'center',
      // width: 70,
      // height: 70,
      marginBottom: 30,
      borderRadius: 35,
      position: 'absolute',
      right : 0,
      bottom : 0,
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
    <View style={{backgroundColor:"white"}}>
      <TouchableOpacity onPress={() => navigation.navigate('GroupScheduleMaking')}>
        <Text>dsfa</Text></TouchableOpacity>
       {/* onPress={() => navigation.navigate('GroupListDetail')} */}
      <FlatList
        data = {test}
        renderItem = {({item,index}) => 
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('GroupManage')} >
          <View style={styles.leftBox}>
            <Image 
              style={{height:80,width:80,borderRadius:30,}}
              source={{uri:item.image}} 
            />
          </View>
          <View style={styles.rightBox}>
            <View style={styles.rightBoxContent}>
              <Text style={{fontSize:24,fontWeight:'700'}}>{item.groupName}</Text>
              <Text numberOfLines={2} style={{fontSize:16,color:"gray"}}>{item.Description}</Text>
            </View>
          </View>
          
        </TouchableOpacity>
      }
      />
      
      <TouchableOpacity 
        onPress={() => navigation.navigate('GroupMaking')}  
      >
        <Icon name='plus-circle' size={56} color="gray" style={styles.button}/>
      </TouchableOpacity>
      
    </View>

  );
}

export default GroupList;
