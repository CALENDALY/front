import {RouteProp, useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WEEK} from './Calendar';
import {MainPageParamList} from './MainPage';

type ScheduleScreenProps = NativeStackScreenProps<
  MainPageParamList,
  'ScheduleList'
>;
function ScheduleList() {
  const route = useRoute<RouteProp<MainPageParamList>>();
  const date = route.params?.date;
  const {year, month, day} = date!;
  const lastDate = new Date(year, month, 0).getDate();
  const prevLastDate = new Date(year, month - 1, 0).getDate();
  const today = new Date().getDay();
  console.log(lastDate, prevLastDate, today);

  return (
    <View>
      <Text>{day}</Text>
      <Text>{month}</Text>
      <Text>{year}</Text>
    </View>
  );
}

export default ScheduleList;
