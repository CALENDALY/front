import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {add, sub} from 'date-fns';
import React, {useCallback} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {MainPageParamList} from './MainPage';

function ScheduleList() {
  const route = useRoute<RouteProp<MainPageParamList>>();
  const navigation = useNavigation<NavigationProp<MainPageParamList>>();
  const date = route.params?.date!;
  const {year, month, day} = date;

  const makeWeekArr = () => {
    let nDate = new Date(year, month, day);
    console.log(nDate);
    let week = [];
    for (let i = 1; i <= 5; i++) {
      let newDate;
      if (i < 3) {
        newDate = sub(nDate, {days: 3 - i});
      } else if (i === 3) {
        newDate = nDate;
      } else {
        newDate = add(nDate, {days: i - 3});
      }
      week.push(newDate);
    }
    return week;
  };

  const goNext = useCallback(
    (list: Date) => {
      const newDate = {
        year: list.getFullYear(),
        month: list.getMonth(),
        day: list.getDate(),
      };
      navigation.goBack();
      navigation.navigate('ScheduleList', {date: newDate});
    },
    [navigation],
  );
  const weekList = makeWeekArr();
  console.log(weekList);

  const changeDay = (dayNum: number) => {
    let dayString;
    if (dayNum === 0) {
      dayString = '일';
    } else if (dayNum === 1) {
      dayString = '월';
    } else if (dayNum === 2) {
      dayString = '화';
    } else if (dayNum === 3) {
      dayString = '수';
    } else if (dayNum === 4) {
      dayString = '목';
    } else if (dayNum === 5) {
      dayString = '금';
    } else if (dayNum === 6) {
      dayString = '토';
    }
    return dayString;
  };

  return (
    <View>
      <View style={styles.route}>
        {weekList.map(list => (
          <Pressable onPress={() => goNext(list)}>
            <Text>{changeDay(list.getDay())}</Text>
            <Text>{list.getDate()}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  route: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ScheduleList;
