import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import makeCalendar from '../utils/MakeCalendar';

type Props = {
  year: number;
  month: number;
};

function Calendar({year, month}: Props) {
  const lastDate = new Date(year, month, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay();

  const week = Math.ceil((firstDay + lastDate) / 7);

  const monthList = makeCalendar(week, year, month, firstDay, lastDate);

  return (
    <View>
      {monthList.map((weeks, weekIdx) => (
        <View key={weekIdx} style={styles.container}>
          {weeks.map((day, dayIdx) => (
            <Pressable key={day}>
              <Text
                style={[
                  dayIdx === 0 && styles.red,
                  (dayIdx < firstDay && weekIdx === 0) ||
                  (weekIdx === monthList.length - 1 && day < 7)
                    ? styles.opacity
                    : null,
                ]}>
                {day}
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 2,
    height: hp('12.3%'),
  },
  day: {
    fontSize: 16,
    fontWeight: '600',
  },
  opacity: {
    opacity: 0.5,
  },
  red: {
    color: 'red',
  },
});

export default Calendar;
