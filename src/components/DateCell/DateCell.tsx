/* eslint-disable @typescript-eslint/no-shadow */
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {MainPageParamList} from '../../pages/MainPage';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

type Props = {
  day: Date;
  dayIdx: number;
  isCurrentMonth: boolean;
};

type Date = {
  month: number;
  year: number;
  day: number;
};

function DateCell({day, dayIdx, isCurrentMonth}: Props) {
  const navigation = useNavigation<NavigationProp<MainPageParamList>>();

  const newDate = new Date();
  const today = newDate.getDate();
  const currentYear = newDate.getFullYear();
  const currentMonth = newDate.getMonth() + 1;

  const correctToday = useCallback(
    (date: Date) => {
      return (
        currentMonth === date.month &&
        currentYear === date.year &&
        date.day === today
      );
    },
    [currentMonth, currentYear, today],
  );

  const goDetail = useCallback(
    (day: Date) => {
      navigation.navigate('ScheduleList', {date: day});
    },
    [navigation],
  );

  return (
    <Pressable
      key={day.day}
      onPress={() => goDetail(day)}
      style={[styles.dayContainer]}>
      {correctToday(day) ? <View style={styles.today} /> : null}
      <Text
        style={[
          styles.day,
          dayIdx === 0 && styles.fontRed,
          isCurrentMonth ? styles.opacity : null,
          correctToday(day) ? styles.fontWhite : null,
        ]}>
        {day.day}
      </Text>
      <View style={styles.itemWithBackground}>
        <Text style={styles.fontWhite}>요기</Text>
      </View>
    </Pressable>
  );
}

export default DateCell;

const styles = StyleSheet.create({
  dayContainer: {
    width: wp('14.4%'),
    alignItems: 'center',
  },
  day: {
    fontSize: 16,
    fontWeight: '400',
  },
  opacity: {
    opacity: 0.5,
  },
  fontRed: {
    color: 'red',
  },
  fontWhite: {
    color: 'white',
  },
  today: {
    position: 'absolute',
    width: 35,
    height: 35,
    top: -7,
    backgroundColor: '#46E469',
    borderRadius: 20,
  },
  itemWithBackground: {
    position: 'absolute',
    top: '30%',
    backgroundColor: 'green',
  },
});
