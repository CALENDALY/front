import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Calendar from './Calendar';
import UserSchedule from './UserSchedule';

export type MainPageParamList = {
  Calendar: undefined;
  UserSchedule: undefined;
};

const Stack = createNativeStackNavigator<MainPageParamList>();
function MainPage() {
  return (
    <Stack.Navigator initialRouteName="Calendar">
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserSchedule"
        component={UserSchedule}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MainPage;
