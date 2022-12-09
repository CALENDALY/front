import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {View, Text, Pressable} from 'react-native';
import {MainPageParamList} from './MainPage';

type ScheduleScreenProps = NativeStackScreenProps<
  MainPageParamList,
  'ScheduleList'
>;
function ScheduleList() {
  const route = useRoute<RouteProp<MainPageParamList>>();
  const navigation = useNavigation<NavigationProp<MainPageParamList>>();
  const date = route.params?.date!;
  const {year, month, day} = date;

  return (
    <View>
      <Text>{day}</Text>
      <Text>{month}</Text>
      <Text>{year}</Text>
    </View>
  );
}

export default ScheduleList;
