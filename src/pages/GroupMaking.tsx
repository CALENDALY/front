import { useState } from "react";
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import GroupMakingModal from "../components/GroupMakingModal";
import MultipleSelectList from "../components/MultipleSelectedList";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function GroupMaking() {
  const mainImage = "https://img.icons8.com/pastel-glyph/2x/image-file.png"
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

  const imagePickerOption:any = {
    mediaType: "photo",
    maxWidth: 768,
    maxHeight: 768,
    includeBase64: Platform.OS === "android",
  };
  const onPickImage = (res:any) => { 
    if (res.didCancel || !res) {
      return;
    }
    console.log("PickImage", res);
  }

  const ShowPicker = () => {
    launchImageLibrary(imagePickerOption, onPickImage);
      
  }

  const styles = StyleSheet.create({
    imageBox : {
      height : 200,
      alignItems:'center',
      justifyContent:"center",
      borderColor: "#dbdbdb",
      borderStyle: "dashed",
      borderWidth : 3,
      margin:5
      
    },
    


  })
  return (
    <View>
      <View style={styles.imageBox}>
        <Image 
          resizeMode="contain"
          style={{height:'30%',width:'30%'}}
          source={{uri:mainImage}} 
        />
        <Text onPress={ShowPicker}>Drag files to upload</Text>
      </View>
      <View style={{marginTop:30  }}>
        <TextInput placeholder="제목을 입력해주세요" style={{borderWidth:1,margin:5,borderRadius:10,paddingLeft:10}}/>
        <TextInput placeholder="소개를 입력해주세요" style={{borderWidth:1,margin:5,borderRadius:10,paddingLeft:10,paddingTop:15,height:150,textAlignVertical:"top"}}/>
      </View>
      <View style={{}}>
        <View style={{}}>
          {GroupMakingModal()}
        </View>
      </View>
      
    </View>
  )
}

export default GroupMaking;
