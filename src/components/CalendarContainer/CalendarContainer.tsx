import React from 'react';
import {StyleSheet, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import makeCalendar from '../../utils/MakeCalendar';
import DateCell from '../DateCell/DateCell';

type Props = {
  year: number;
  month: number;
};

function CalendarContainer({year, month}: Props) {
  const monthList = makeCalendar(year, month);
  const firstDay = new Date(year, month - 1, 1).getDay();

  return (
    <View>
      {monthList.map((weeks, weekIdx) => (
        <View key={weekIdx} style={styles.container}>
          {weeks.map((day, dayIdx) => (
            <DateCell
              day={day}
              dayIdx={dayIdx}
              isCurrentMonth={
                (dayIdx < firstDay && weekIdx === 0) ||
                (weekIdx === monthList.length - 1 && day.day < 7)
              }
            />
          ))}
        </View>
      ))}
    </View>
  );
}

export default CalendarContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 2,
    height: hp('12.3%'),
  },
});
