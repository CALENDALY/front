import { Image, StyleSheet, Text, View } from "react-native";

function GroupManage() {

  const image = "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg"

  const styles = StyleSheet.create({
    container: {
      height :500,
      width : 500,
      flexDirection:'column',
      ustifyContent: "center"
    }
  })

  return (
    <View style={styles.container}>
      <View style={{width:100,height:100,flexDirection:'column',justifyContent: "center", alignItems: "center"}}>
        <Image source={{uri:image}} style={{width:'100%',height:'100%',}}/>
      </View>
    </View>
  )
}

export default GroupManage;
