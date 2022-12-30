import { useState } from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GroupMakingModal from "../components/GroupMakingModal";
import MultipleSelectList from "../components/MultipleSelectedList";

function GroupMaking() {
  const mainImage = "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg"
  const title = "그룹이름 이에요!"
  const user = "참석 회원"
  const [selected, setSelected] = useState([]);
  const data = [
    {value : "nickname1",email: "email1"},
    {value : "nickname2",email: "email2"},
    {value : "nickname3",email: "email3"},
    {value : "nickname4",email: "email4"},
    {value : "nickname5",email: "email5"},
    {value : "nickname6",email: "email6"},
    {value : "nickname7",email: "email7"},
    {value : "nickname8",email: "email8"},
    {value : "nickname9",email: "email9"},
  ]
  const styles = StyleSheet.create({
    imageBox : {
      height : 200,
    },
    userBox : {
      flexDirection : "row",
      height : 150,
    },
    button: {
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      width: 30,
      height: 30,
      marginBottom: 30,
      borderRadius: 35,
      // position: 'absolute',
      // right : 5,
      // bottom : 5,
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
    },

    leftBox: {
      width: "30%",
      height : "100%",
    },
    rightBox: {
      width: "70%",
      height : "100%",
    }
  })
  return (
    <View>
      <View style={styles.imageBox}>
        <Image 
          style={{height:'100%',width:'100%'}}
          source={{uri:mainImage}} 
        />
      </View>
      <View>
        <Text>
          {title}
        </Text>
      </View>
      <View style={styles.userBox}>
        <View style={styles.leftBox}>
          <Text>
            {user}
          </Text>
        </View>
        <View style={styles.rightBox}>
          {GroupMakingModal()}
        </View>
      </View>
      
    </View>
  )
}

export default GroupMaking;
