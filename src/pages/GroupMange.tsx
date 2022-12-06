import { Image, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function GroupManage() {

  const image = "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg"

  const styles = StyleSheet.create({
    container: {
      height :500,
      flrx: 1,
      flexDirection:'column',
      // justifyContent: "center",
      alignItems: "center"
    }
  })

  return (
    <View style={styles.container}>
      <View style={{width:'95%',height:100,flexDirection:'column'}}>
        <Image source={{uri:image}} style={{width:'100%',height:'100%',}}/>
        <View>
          <Icon name="home" size={24} color="#000" />
        </View>
      </View>
    </View>
  )
}

export default GroupManage;
