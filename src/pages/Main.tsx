import React, {useCallback, useReducer} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Calendar from '../components/Calendar';
import {reducer, initialState} from '../store/CalendarReducer';

const WEEK = ['일', '월', '화', '수', '목', '금', '토'];

function Main() {
  const [state, disaptch] = useReducer(reducer, initialState);

  const {month, year} = state;

  const onIncrement = useCallback(() => {
    disaptch({type: 'NEXTMONTH'});
  }, []);

  const onDecrement = useCallback(() => {
    disaptch({type: 'PREVMONTH'});
  }, []);

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <Pressable onPress={onDecrement}>
          <Text style={styles.headerText}>&lt;</Text>
        </Pressable>
        <Text style={styles.headerText}>
          {year}.{month}
        </Text>
        <Pressable onPress={onIncrement}>
          <Text style={styles.headerText}>&gt;</Text>
        </Pressable>
      </View>
      <View>
        <View style={styles.weeks}>
          {WEEK.map((day, idx) => (
            <Text key={day} style={idx === 0 && styles.red}>
              {day}
            </Text>
          ))}
        </View>
      </View>
      <Calendar year={year} month={month} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 15,
  },
  weeks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 2,
  },
  red: {
    color: 'red',
  },
});
export default Main;
