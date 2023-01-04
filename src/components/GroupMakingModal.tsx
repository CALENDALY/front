import React, { useState } from "react";
import {  Dimensions, FlatList, Image, Modal, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";



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
  
  const screenWidth = Dimensions.get('window').width;
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
      margin: 5,
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 15,

      alignItems:"center",
      // alignItems: 'center',
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
      height:50,
      backgroundColor: 'gray',
      borderRadius: 10,
      // padding: 10,
      // marginTop: 70,
      marginTop : 15,
      width:screenWidth - 10,
      borderColor : "gray",
      justifyContent:"center"
    },
    closeButton : {
      height: 50,
      backgroundColor: "gray",
      borderRadius: 10,
      width:"80%",
      borderColor : "gray",
      justifyContent:"center",
      alignItems:"center",
      marginTop : 15,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign:"center",
      textAlignVertical:"center",
    },
    modalText: {
      marginBottom: 15,
      fontWeight:"600",
      fontSize:18
    },
    
    container_active: {
      flexDirection : "row",
      height:100,
      backgroundColor : "black",
    
    },
    leftBox: {
      width : "30%",
      justifyContent: "center",
      alignItems: "center",
    },
    rightBox: {
      width : "70%",
      justifyContent: "space-between",
      flexDirection:"row",
      alignItems: "center",

      // alignItems: "center",
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
            <Text style={styles.modalText}>그룹멤버 초대</Text>
            <FlatList
              data = {userList}
              style = {{height:500,width:"100%"}}
              renderItem = {({item,index}) => 
              <TouchableOpacity style={{flexDirection : "row", height:60,  }} onPress={() => {handleClick(index)}} >
                <View style={styles.leftBox}>
                  <Image 
                    style={{height:40,width:40,borderRadius:50,}}
                    source={{uri:item.image}} 
                  />
                </View>
                <View style={styles.rightBox}>
                  <Text>{item.name}</Text>
                  { isChecked.includes(index) ?
                  <Icon name='check-circle' size={24} color="gray"/> :
                  <Icon name='circle-o' size={24} color="gray"/>
                  }
                </View>
              </TouchableOpacity>
            } />
   
            <TouchableHighlight
              //styles.openButton을 복사한뒤 새로운 값 backgroundColor 추가
              style={styles.closeButton}
              onPress={()=>{
                setModalVisible(!modalVisible)
              }}
            >
              <Text style={styles.textStyle}>확인</Text>
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
        <Text style={styles.textStyle}>초대하기</Text>
      </TouchableHighlight>
    </View>
  )
}

export default GroupMakingModal;
