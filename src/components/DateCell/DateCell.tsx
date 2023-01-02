/* eslint-disable @typescript-eslint/no-shadow */
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {MainPageParamList} from '../../pages/MainPage';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

type Props = {
  day: IDate;
  dayIdx: number;
  isCurrentMonth: boolean;
  schedule: ISchedule[];
};

export type ISchedule = {
  id: number;
  subject: string;
  contents: string;
  startDt: string;
  endDt: string;
  priority: number;
  groupId: number;
};

export type IDate = {
  month: number;
  year: number;
  day: number;
};

function DateCell({day, dayIdx, isCurrentMonth, schedule}: Props) {
  const navigation = useNavigation<NavigationProp<MainPageParamList>>();

  const correctToday = useCallback((date: IDate) => {
    const newDate = new Date();
    const today = newDate.getDate();
    const currentYear = newDate.getFullYear();
    const currentMonth = newDate.getMonth() + 1;
    return (
      currentMonth === date.month &&
      currentYear === date.year &&
      date.day === today
    );
  }, []);

  console.log(schedule);

  const goDetail = useCallback(
    (day: IDate) => {
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
      {schedule.map(list => (
        <View style={propStyle(false, list.priority).itemWithBackground}>
          <Text style={styles.fontWhite}>{list.subject}</Text>
        </View>
      ))}
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
});

const propStyle = (isEnd: boolean, priority: number) =>
  StyleSheet.create({
    itemWithBackground: {
      position: 'absolute',
      width: '100%',
      height: '25%',
      top: `${priority * 30}%`,
      backgroundColor: 'green',
      borderBottomRightRadius: isEnd ? 50 : undefined,
      borderTopRightRadius: isEnd ? 50 : undefined,
    },
  });
