
import { Image, StyleSheet, Text, View,FlatList,TouchableOpacity, Platform } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function GroupManage() {
  
  const image = "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg"
  const test = [
    {
      id : 1,
      image : "http://s3-ap-northeast-2.amazonaws.com/images-kr.girlstyle.com/wp-content/uploads/2019/02/7e07c596e011bdc2b8b62489910de008.jpg"
    },
    {
      id : 2,
      image : "http://t1.daumcdn.net/news/201704/18/seoul/20170418175104713ogsj.jpg"
    },
    {
      id : 3,
      image : "https://blog.kakaocdn.net/dn/NUm3N/btqSdtJWnWl/AJWZ9VT3xR0TsQXHztmYek/img.jpg"
    },
    {
      id : 4,
      image : "http://s3-ap-northeast-2.amazonaws.com/images-kr.girlstyle.com/wp-content/uploads/2019/02/7e07c596e011bdc2b8b62489910de008.jpg"
    },
    {
      id : 5,
      image : "http://s3-ap-northeast-2.amazonaws.com/images-kr.girlstyle.com/wp-content/uploads/2019/02/7e07c596e011bdc2b8b62489910de008.jpg"
    },
    {
      id : 6,
      image : "https://blog.kakaocdn.net/dn/NUm3N/btqSdtJWnWl/AJWZ9VT3xR0TsQXHztmYek/img.jpg"
    },
    {
      id : 7,
      image : "http://t1.daumcdn.net/news/201704/18/seoul/20170418175104713ogsj.jpg"
    },
    {
      id : 8,
      image : "http://s3-ap-northeast-2.amazonaws.com/images-kr.girlstyle.com/wp-content/uploads/2019/02/7e07c596e011bdc2b8b62489910de008.jpg"
    },
    {
      id : 9,
      image : "https://blog.kakaocdn.net/dn/NUm3N/btqSdtJWnWl/AJWZ9VT3xR0TsQXHztmYek/img.jpg"
    },
    {
      id : 10,
      image : "http://t1.daumcdn.net/news/201704/18/seoul/20170418175104713ogsj.jpg"
    }
  ]
  const test2 = [
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
  const styles = StyleSheet.create({
    container: {
      height :1500,
      flrx: 1,
      flexDirection:'column',
      // justifyContent: "center",
      alignItems: "center"
    },

    nameBox: {
      // flex: 1,
      flexDirection:"row",
      justifyContent: 'space-between',
    },
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
    <View style={styles.container}>
      <View style={{width:'95%',height:100,flexDirection:'column'}}>
        <Image source={{uri:image}} style={{width:'100%',height:'100%',}}/>
        <View>
          <Text>현재 참여 인원</Text>
          <View style={styles.nameBox}>
            <Text>스케쥴러 개발 그룹</Text>
            <Icon name="home" size={24} color="#000" />
          </View>
          <View>
            {
              test.length > 6 ?
              <View style={{flexDirection:"row",}}>
                <FlatList
              
                  horizontal = {true}
                  data = {test.slice(0,5)}
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
                  data = {test}
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
          <View style={styles.nameBox}>
            <Text>오늘의 일정</Text>
            <Icon name="home" size={24} color="#000" />
          </View>
          <FlatList
            style={{height:1500}}
            data = {test2}
            renderItem = {({item,index}) => 
            <TouchableOpacity 
              style={{}}
              onPress={() => {}}  
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
    </View>
  )
}

export default GroupManage;
