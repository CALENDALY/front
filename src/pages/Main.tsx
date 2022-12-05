/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useReducer} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const today = new Date();

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
  year: today.getFullYear(),
  month: today.getMonth(),
};

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (state.month < 11) {
        return {...state, month: state.month + 1};
      } else {
        return {...state, year: state.year + 1, month: 0};
      }
    case 'DECREMENT':
      if (state.month > 0) {
        return {...state, month: state.month - 1};
      } else {
        return {...state, year: state.year - 1, month: 11};
      }
  }
};

function Main() {
  const [state, disaptch] = useReducer(reducer, initialState);

  const lastDate = new Date(state.year, state.month + 1, 0).getDate();
  const firstDay = new Date(state.year, state.month, 1).getDay();

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
          {state.year}.{state.month + 1}
        </Text>
        <Pressable onPress={onIncrement}>
          <Text style={styles.headerText}>&gt;</Text>
        </Pressable>
      </View>
      <View>
        <View style={styles.weeks}>
          <Text>일</Text>
          <Text>월</Text>
          <Text>화</Text>
          <Text>수</Text>
          <Text>목</Text>
          <Text>금</Text>
          <Text>토</Text>
        </View>
      </View>
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
