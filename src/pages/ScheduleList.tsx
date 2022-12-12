import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {add, sub} from 'date-fns';
import React, {useCallback} from 'react';
import {View, Text, Pressable, StyleSheet, FlatList} from 'react-native';
import {MainPageParamList} from './MainPage';
import ChangeDay from '../utils/ChangeDay';

function ScheduleList() {
  const route = useRoute<RouteProp<MainPageParamList>>();
  const navigation = useNavigation<NavigationProp<MainPageParamList>>();
  const date = route.params?.date!;
  const {year, month, day} = date;
  const makeWeekArr = () => {
    let nDate = new Date(year, month, day);
    let lenght = 15;
    let week = [];

    for (let i = 1; i <= lenght; i++) {
      let newDate;
      if (i < lenght + 1) {
        newDate = sub(nDate, {days: (lenght + 1) / 2 - i});
      } else if (i === lenght + 1) {
        newDate = nDate;
      } else {
        newDate = add(nDate, {days: i - (lenght + 1) / 2});
      }
      week.push([newDate.getDate(), newDate]);
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

  const renderItem = useCallback(
    ({item}) => {
      console.log(item);
      return (
        <View>
          <Pressable style={styles.route} onPress={() => goNext(item[1])}>
            <Text>{ChangeDay(item[1].getDay())}</Text>
            <View style={[styles.round, item[0] === day && styles.today]}>
              <Text>{item[1].getDate()}</Text>
            </View>
          </Pressable>
        </View>
      );
    },
    [day, goNext],
  );

  return (
    <View>
      <FlatList
        renderItem={renderItem}
        data={weekList}
        horizontal={true}
        initialScrollIndex={7}
        keyExtractor={(item, idx) => idx.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  route: {
    paddingVertical: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 7.5,
  },
  round: {
    marginTop: 5,
    backgroundColor: '#46E469',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  today: {
    backgroundColor: '#FF7A00',
  },
});

export default ScheduleList;
