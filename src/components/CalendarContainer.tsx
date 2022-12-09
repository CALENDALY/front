import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {MainPageParamList} from '../pages/MainPage';
import makeCalendar from '../utils/MakeCalendar';

type Props = {
  year: number;
  month: number;
};
type Date = {
  month: number;
  year: number;
  day: number;
};

function CalendarContainer({year, month}: Props) {
  const lastDate = new Date(year, month, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay();
  const navigation = useNavigation<NavigationProp<MainPageParamList>>();
  const week = Math.ceil((firstDay + lastDate) / 7);
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

  const monthList = makeCalendar(week, year, month, firstDay, lastDate);

  const goDetail = useCallback(
    (day: Date) => {
      navigation.navigate('ScheduleList', {date: day});
    },
    [navigation],
  );

  return (
    <View>
      {monthList.map((weeks, weekIdx) => (
        <View key={weekIdx} style={styles.container}>
          {weeks.map((day, dayIdx) => (
            <Pressable
              key={day.day}
              onPress={() => goDetail(day)}
              style={[styles.dayContainer]}>
              {correctToday(day) ? <View style={styles.today} /> : null}
              <Text
                style={[
                  styles.day,
                  dayIdx === 0 && styles.red,
                  (dayIdx < firstDay && weekIdx === 0) ||
                  (weekIdx === monthList.length - 1 && day.day < 7)
                    ? styles.opacity
                    : null,
                  correctToday(day) ? {color: 'white'} : null,
                ]}>
                {day.day}
              </Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 2,
    height: hp('12.3%'),
  },
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
  red: {
    color: 'red',
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

export default CalendarContainer;
