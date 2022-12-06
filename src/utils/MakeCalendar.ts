import React from 'react';

const makeCalendar = (
  week: number,
  year: number,
  month: number,
  firstDay: number,
  lastDate: number,
) => {
  const monthList = [];
  for (let i = 1; i <= week; i++) {
    const weekList = [];
    if (i === 1) {
      const prevLastDate = new Date(year, month - 1, 0).getDate();
      for (let j = 1; j <= 7; j++) {
        if (j <= firstDay) {
          const day = prevLastDate - firstDay + j;
          weekList.push(day);
        } else {
          const day = j - firstDay;
          weekList.push(day);
        }
      }
    } else {
      const startDate = (i - 1) * 7;
      for (let j = startDate; j <= i * 7 - 1; j++) {
        if (j - firstDay < lastDate) {
          const day = j - firstDay + 1;
          weekList.push(day);
        } else {
          const day = j - lastDate - firstDay + 1;
          weekList.push(day);
        }
      }
    }
    monthList.push(weekList);
  }
  return monthList;
};

export default makeCalendar;
