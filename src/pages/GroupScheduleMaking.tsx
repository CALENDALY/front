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
  })

  return (
    <View>
      <View style={{}}>
        <Text>safd</Text>
        <TextInput 
          style={styles.textInput}
          placeholder="제목"
          />
      </View>
      <View>

      </View>
    </View>
  )
}

export default GroupScheduleMaking;
