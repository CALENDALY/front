import React from "react";
import { Text, View } from "react-native";

function GroupListDetail({ navigation, route }:any) {
  return (
    <View>
      <Text>{route.params.idx}</Text>
    </View>
  )
}

export default GroupListDetail;
