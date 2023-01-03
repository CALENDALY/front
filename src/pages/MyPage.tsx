import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function MyPage({navigation}:any) {
  const styles = StyleSheet.create({
    infoBox: {
      // flex:1,
      flexDirection: "row",
      height:150,
      borderBottomWidth : 5,
      justifyContent : "center",
    
    }
  })
  const myInfo = {nickname: "nickname1",image:"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",email:"myemail@naver.com"}
  const alarmDummy = [
    {
      image:"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      title : "OOOO 개발 그룹 알람"
    },
    {
      image:"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      title : "OOOO 개발 그룹 알람"
    },
    {
      image:"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      title : "OOOO 개발 그룹 알람"
    },
    {
      image:"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      title : "OOOO 개발 그룹 알람"
    },
    {
      image:"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      title : "OOOO 개발 그룹 알람"
    },
    {
      image:"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      title : "OOOO 개발 그룹 알람"
    },
    {
      image:"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
      title : "OOOO 개발 그룹 알람"
    },
  ]
  const scheduleDummy = [
    {
      title : "속초 여행",
      startTime : "12:00",
      endTime : "13:00"
    },
    {
      title : "속초 여행2",
      startTime : "12:00",
      endTime : "13:00"
    },
    {
      title : "속초 여행3",
      startTime : "12:00",
      endTime : "13:00"
    },
    {
      title : "속초 여행4",
      startTime : "12:00",
      endTime : "13:00"
    },
    {
      title : "속초 여행5",
      startTime : "12:00",
      endTime : "13:00"
    },
  ]
  return (
    <View>
      <View style={styles.infoBox}>
        <View style={{width:"30%"}}>
          <Image style={{height:100,width:100,borderRadius:50}}source={{uri:myInfo.image}} />
        </View>
        <View style={{width:"70%",alignItems:'center',alignContent:'center',justifyContent:"center"}}>
          <Text>{myInfo.nickname}</Text>
          <Text>{myInfo.email}</Text>
        </View>
        <Icon name="home" size={24} color="#000"/>
      </View>

      <View>
        <Text>알람 목록</Text>
        <FlatList
          data = {alarmDummy.slice(0,5)}
          renderItem = {({item,index}) => 
            <TouchableOpacity 
              // style={styles.button}
              onPress={() => {}}  
              style = {{flexDirection:"row",}}
            >
              <Image source={{uri:item.image}} style={{width:50,height:50,borderRadius:50}}/>
              <View style={{justifyContent:"center"}}>
                <Text style={{fontSize:20}}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          }
        >

        </FlatList>

        <View style={{flexDirection:"row",justifyContent:'space-between'}}>
          <Text>오늘의 일정</Text>
          <Icon name="home" size={24} color="#000" />
        </View>

        <FlatList
            style={{height:1500}}
            data = {scheduleDummy}
            renderItem = {({item,index}) => 
            <TouchableOpacity 
              style={{}}
              onPress={() => navigation.navigate('GroupScheduleDetail')}
            >
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text>{item.title}</Text>
                <View>
                  <Text>{item.startTime}</Text>
                  <Text>{item.endTime}</Text>
                </View>
              </View>
            </TouchableOpacity>
          }
                />
        
      </View>
    </View>
  );
}

export default MyPage;
