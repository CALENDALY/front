import { StyleSheet, Text, TextInput, View } from "react-native";

function GroupScheduleMaking() {

  const styles = StyleSheet.create({
    titleBox: {

    },

    textInput: {
      marginTop: 20,
      marginBottom: 10,
      paddingHorizontal: 10,
      height: 40,
      borderTopWidth:0,
      borderLeftWidth:0,
      borderRightWidth:0,
      borderColor: 'gray',
      borderWidth: 1
    },

    eventBox: {

    }
  })

  return (
    <View>
      <View style={styles.titleBox}>
        <Text>safd</Text>
        <TextInput 
          style={styles.textInput}
          placeholder="제목"
          />
      </View>
      <View style={styles.eventBox}>
        
      </View>
    </View>
  )
}

export default GroupScheduleMaking;
