const TODAY = new Date();

type Action =
  | {
      type: 'NEXTMONTH';
    }
  | {type: 'PREVMONTH'};

type State = {
  year: number;
  month: number;
};

export const initialState = {
  year: TODAY.getFullYear(),
  month: TODAY.getMonth() + 1,
};

export const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'NEXTMONTH':
      if (state.month < 12) {
        return {...state, month: state.month + 1};
      } else {
        return {...state, year: state.year + 1, month: 1};
      }
    case 'PREVMONTH':
      if (state.month > 1) {
        return {...state, month: state.month - 1};
      } else {
        return {...state, year: state.year - 1, month: 12};
      }
  }
};
