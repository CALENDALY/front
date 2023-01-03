import { useState } from "react";
import { Button, FlatList, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function GroupScheduleDetail({ route, navigation }:any) {
  const { idx } = route.params;
  const scheduleTitle = "김장하러가기"
  const writer = {image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg"}
  const member = [
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
    },
    {
      image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg",
    },
  ]
  const [comments,setComments] = useState<any>([
    {
      content: "this is a content of group member",
      writer: "nickname1"
    },
    {
      content: "this is a content of group member",
      writer: "nickname1"
    },{
      content: "this is a content of group member",
      writer: "nickname1"
    },{
      content: "this is a content of group member",
      writer: "nickname1"
    },{
      content: "this is a content of group member",
      writer: "nickname1"
    },{
      content: "this is a content of group member",
      writer: "nickname1"
    },{
      content: "this is a content of group member",
      writer: "nickname1"
    },{
      content: "this is a content of group member",
      writer: "nickname1"
    },{
      content: "this is a content of group member",
      writer: "nickname1"
    },
  ])
  const [comment,setComment] = useState<any>("")
  const sendComment = () => {
    setComments([...comments,{content:comment,writer:"myNickname"}])
    setComment("")
    
  }
  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      marginBottom: 30,
      borderRadius:50,
      marginLeft: 5,
      marginRight: 5,
     
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

    image: {
      borderRadius:50,
      width:'100%',
      height:'100%',
      
    }
  })
  return (
    <View>
      
      <View>
        <Text>{scheduleTitle}</Text>
      </View>
      <View>
        <Text>작성자</Text>
        <Image source={{uri:writer.image}} style={{width:50,height:50,borderRadius:50}}/>
      </View>
      <View>
        <Text>참여자</Text>
        {
          member.length > 6 ?
          <View style={{flexDirection:"row",}}>
            <FlatList
          
              horizontal = {true}
              data = {member.slice(0,5)}
              renderItem = {({item,index}) => 
              <TouchableOpacity 
                style={styles.button}
                onPress={() => {}}  
              >
                <Image source={{uri:item.image}} style={styles.image}/>
              </TouchableOpacity>
            }
            />
            <TouchableOpacity 
              style={styles.button}
              onPress={() => {}}  
            >
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
              : <FlatList
            
              horizontal = {true}
              data = {member}
              renderItem = {({item,index}) => 
              <TouchableOpacity 
                style={styles.button}
                onPress={() => {}}  
              > 
                <Image source={{uri:item.image}} style={styles.image}/>
              </TouchableOpacity>
            }
            />
        }
      </View>
      {/* <View>
        <Text>상세 내용</Text>

      </View> */}
      <View>
        <Text>댓글들</Text>
        <FlatList
          data = {comments}
          renderItem = {({item,index}) => 
          <TouchableOpacity 
            onPress={() => {}}  
          >
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <Text>{item.content}</Text>
              <Text>{item.writer}</Text>
            </View>
          </TouchableOpacity>
        }
        />
        <TextInput 
          multiline
          placeholder='John'
          onChangeText={ (val) => setComment(val)}
          style={{borderBottomColor:"red",borderWidth:5}}
        />
        <View>
          <TouchableOpacity
            onPress={() => sendComment()}
          >
            <Text>버튼</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default GroupScheduleDetail;


