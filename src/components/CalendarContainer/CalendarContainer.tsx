import React from 'react';
import {StyleSheet, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ChangeDateToObj from '../../utils/ChangeDateToObj';

import makeMonth from '../../utils/MakeMonth';
import DateCell, {IDate} from '../DateCell/DateCell';

type Props = {
  year: number;
  month: number;
};

const res = [
  {
    id: 1,
    subject: '제목1',
    contents: '컨텐츠',
    startDt: '2023-01-15',
    endDt: '2023-01-18',
    priority: 1,
    groupId: 1,
  },
  {
    id: 2,
    subject: '제목2',
    contents: '컨텐츠',
    startDt: '2023-01-20',
    endDt: '2023-01-30',
    priority: 3,
    groupId: 1,
  },
  {
    id: 3,
    subject: '제목3',
    contents: '컨텐츠',
    startDt: '2023-01-01',
    endDt: '2023-01-05',
    priority: 2,
    groupId: 1,
  },
];

function CalendarContainer({year, month}: Props) {
  const monthList = makeMonth(year, month);
  const firstDay = new Date(year, month - 1, 1).getDay();

  const distributeSchedule = (day: IDate) => {
    return res.filter(schedule => {
      return (
        ChangeDateToObj(schedule.startDt).day === day.day &&
        ChangeDateToObj(schedule.startDt).month === day.month
      );
    });
  };

  return (
    <View>
      {monthList.map((weeks, weekIdx) => (
        <View key={weekIdx} style={styles.container}>
          {weeks.map((day, dayIdx) => (
            <DateCell
              day={day}
              dayIdx={dayIdx}
              schedule={distributeSchedule(day)}
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
