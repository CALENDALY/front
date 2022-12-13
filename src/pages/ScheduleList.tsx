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

type ItemProps = {
  item: Date;
};

function ScheduleList() {
  const route = useRoute<RouteProp<MainPageParamList>>();
  const navigation = useNavigation<NavigationProp<MainPageParamList>>();
  const date = route.params?.date!;
  const {year, month, day} = date;
  const length = 29;

  const getItemLayout = (_: any, index: number) => ({
    length: length,
    offset: length * index,
    index,
  });

  const makeWeekArr = () => {
    let nDate = new Date(year, month, day);
    let week = [];

    for (let i = 1; i <= length; i++) {
      let newDate;
      if (i < length + 1) {
        newDate = sub(nDate, {days: (length + 1) / 2 - i});
      } else if (i === length + 1) {
        newDate = nDate;
      } else {
        newDate = add(nDate, {days: i - (length + 1) / 2});
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

  const renderItem = useCallback(
    ({item}: ItemProps) => {
      return (
        <View>
          <Pressable style={styles.route} onPress={() => goNext(item)}>
            <Text>{ChangeDay(item.getDay())}</Text>
            <View
              style={[styles.round, item.getDate() === day && styles.today]}>
              <Text>{item.getDate()}</Text>
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
        getItemLayout={getItemLayout}
        removeClippedSubviews={true}
        initialScrollIndex={Math.round(length / 2) + 6}
        keyExtractor={(item, idx) => idx.toString()}
      />
      <View>
        <Text>+</Text>
      </View>
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
