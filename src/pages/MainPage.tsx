import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Calendar from './Calendar';
import ScheduleList from './ScheduleList';

export type MainPageParamList = {
  Calendar: undefined;
  ScheduleList: {
    date: {
      month: number;
      year: number;
      day: number;
    };
  };
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
        name="ScheduleList"
        component={ScheduleList}
        options={{title: '일정'}}
      />
    </Stack.Navigator>
  );
}

export default MainPage;
