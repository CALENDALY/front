import { Text, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GroupList from "./GroupList";
import GroupMaking from "./GroupMaking";
import GroupListDetail from "./GroupListDetail";
import GroupManage from "./GroupMange";
import GroupScheduleMaking from "./GroupScheduleMaking";
import GroupUserList from "./GroupUserList";

type GroupStackParamList = {
  GroupList: undefined;
  GroupMaking: undefined;
  GroupListDetail: undefined;
  GroupManage: undefined;
  GroupScheduleMaking: undefined;
  GroupUserList: undefined;
};

const Stack = createNativeStackNavigator<GroupStackParamList>()
function GroupMain() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="GroupList" component={GroupList} />
      <Stack.Screen name="GroupMaking" component={GroupMaking} />
      <Stack.Screen name="GroupManage" component={GroupManage} />
      <Stack.Screen name="GroupScheduleMaking" component={GroupScheduleMaking} />
      <Stack.Screen name="GroupUserList" component={GroupUserList} />
    </Stack.Navigator>
  )
}

export default GroupMain;
