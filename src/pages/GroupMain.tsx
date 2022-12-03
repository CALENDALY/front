import { Text, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GroupList from "./GroupList";
import GroupMaking from "./GroupMaking";
import GroupListDetail from "./GroupListDetail";
import GroupManage from "./GroupMange";

type GroupStackParamList = {
  GroupList: undefined;
  GroupMaking: undefined;
  GroupListDetail: undefined;
  GroupManage: undefined;
};

const Stack = createNativeStackNavigator<GroupStackParamList>()
function GroupMain() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="GroupList" component={GroupList} />
      <Stack.Screen name="GroupMaking" component={GroupMaking} />
      <Stack.Screen name="GroupManage" component={GroupManage} />
    </Stack.Navigator>
  )
}

export default GroupMain;
