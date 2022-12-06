/* eslint-disable @typescript-eslint/no-unused-vars */
import {getDaysInMonth} from 'date-fns';
import React, {useCallback, useReducer} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Calendar from '../components/Calendar';

const TODAY = new Date();

const WEEK = ['일', '월', '화', '수', '목', '금', '토'];

type Action =
  | {
      type: 'INCREMENT';
    }
  | {type: 'DECREMENT'};

type State = {
  year: number;
  month: number;
};

const initialState = {
  year: TODAY.getFullYear(),
  month: TODAY.getMonth() + 1,
};

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (state.month < 12) {
        return {...state, month: state.month + 1};
      } else {
        return {...state, year: state.year + 1, month: 1};
      }
    case 'DECREMENT':
      if (state.month > 1) {
        return {...state, month: state.month - 1};
      } else {
        return {...state, year: state.year - 1, month: 12};
      }
  }
};

function Main() {
  const [state, disaptch] = useReducer(reducer, initialState);

  const {month, year} = state;
  console.log(state);

  const onIncrement = useCallback(() => {
    disaptch({type: 'INCREMENT'});
  }, []);

  const onDecrement = useCallback(() => {
    disaptch({type: 'DECREMENT'});
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
          {WEEK.map(day => (
            <Text key={day}>{day}</Text>
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
});
export default Main;
