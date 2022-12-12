const ChangeDay = (dayNum: number) => {
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

export default ChangeDay;
