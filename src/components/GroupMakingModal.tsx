import React, { useState } from "react";
import {  FlatList, Image, Modal, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";


function GroupMakingModal() {
  const [modalVisible, setModalVisible] =useState(false);
  const [isChecked, setIsChecked] = useState<number[]>([]);
  const [userList,setUserList] = useState([
    {name : "nickname1", email : "rhkrehd619@naver.com",image :"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname2", email : "rhkrehd619@naver.com",image :"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname3", email : "rhkrehd619@naver.com",image :"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname4", email : "rhkrehd619@naver.com",image :"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname5", email : "rhkrehd619@naver.com",image :"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname6", email : "rhkrehd619@naver.com",image :"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname7", email : "rhkrehd619@naver.com",image :"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname8", email : "rhkrehd619@naver.com",image :"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname9", email : "rhkrehd619@naver.com",image :"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname10", email : "rhkrehd619@naver.com",image :"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname11", email : "rhkrehd619@naver.com",image :"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname12", email : "rhkrehd619@naver.com",image :"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname13", email : "rhkrehd619@naver.com",image :"https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg" ,},
  ])

  const handleClick = (idx: number) => {
    if (isChecked.includes(idx)) {
      setIsChecked(isChecked.filter((e) => e != idx))
    }
    else {
      setIsChecked(prev => [...prev,idx]);
    }
    
    // 가입 로직 실행
};

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      height: "80%",
      width : "80%",
      //그림자의 영역 지정
      shadowOffset: {
        width: 0,
        height:2
      },
      //불투명도 지정
      shadowOpacity: 0.25,
      //반경 지정
      shadowRadius: 3.84,
    },
    openButton: {
      width:50,
      height:50,
      backgroundColor: '#f194ff',
      borderRadius: 35,
      padding: 10,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
    
    },
    modalText: {
      marginBottom: 15,
    
    },
    
    container_active: {
      flexDirection : "row",
      height:100,
      backgroundColor : "black",
    
    },
    leftBox: {
      width : "30%",
    },
    rightBox: {
      width : "70%",
    },
  })
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>초대할 사람들</Text>
            <FlatList
              data = {userList}
              style = {{height:500,width:"100%"}}
              renderItem = {({item,index}) => 
              <TouchableOpacity style={{flexDirection : "row", height:100, backgroundColor : isChecked.includes(index) ? "blue" : "red"  }} onPress={() => {handleClick(index)}} >
                <View style={styles.leftBox}>
                  <Image 
                    style={{height:50,width:50,borderRadius:50,}}
                    source={{uri:item.image}} 
                  />
                </View>
                <View style={styles.rightBox}>
                  <View style={{}}>
                    <Text>{item.name}</Text>
                  </View>
                  <View style={{}}>
                    <Text>{item.email}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            } />
            <TouchableHighlight
              //styles.openButton을 복사한뒤 새로운 값 backgroundColor 추가
              style={{ ...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={()=>{
                setModalVisible(!modalVisible)
              }}
            >
              <Text style={styles.textStyle}>Hidddfe Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      
      <TouchableHighlight 
        style={styles.openButton}
        onPress={()=> {
          setModalVisible(true)
        }}
      >
        <Text style={styles.textStyle}>+</Text>
      </TouchableHighlight>
    </View>
  )
}

export default GroupMakingModal;
