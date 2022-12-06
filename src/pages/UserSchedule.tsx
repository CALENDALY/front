import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MainPageParamList} from './MainPage';

type UserScheduleScreenProps = NativeStackScreenProps<
  MainPageParamList,
  'UserSchedule'
>;
function UserSchedule({navigation}: UserScheduleScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Text>hi</Text>
      </View>
    </SafeAreaView>
  );
}

export default UserSchedule;
