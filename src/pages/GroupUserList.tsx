import { FlatList, Image, StyleSheet, Text, View } from "react-native";

function GroupUserList({navigation}:any) {

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "blue",
      
      
    },
    listContainer: {
      // backgroundColor : "orange",
      // flexGrow: 1, 
      // justifyContent: 'center',
     
    },
    listBox: {
      // flex:1,
      // height : 150, 
      
      // justifyContent:"center",
      // backgroundColor:"red",
      // textAlign:"center"
    }
  })
  const data = [
    {name : "nickname1",image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname2",image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname3",image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname4",image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname5",image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname6",image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname7",image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname8",image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname9",image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname10",image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname11",image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname12",image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname13",image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname14",image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
    {name : "nickname15",image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg", },
  ]
  return (
    <View style={styles.container}>
      <FlatList
        key={"."}
        contentContainerStyle={{backgroundColor : "orange", justifyContent: 'center',flex:1}}
        // style={styles.listContainer}
        data = {data}
        numColumns={2}
        renderItem = {({item,index}) => 

        <View style={styles.listBox}>
          <Image style={{height : 100, width: 100,borderRadius:50}}source={{uri:item.image}}></Image>
          <Text>{item.name}</Text>
        </View>
        
      }
      />
    </View>
  )
}

export default GroupUserList;
