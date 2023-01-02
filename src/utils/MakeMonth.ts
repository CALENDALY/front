const makeMonth = (year: number, month: number) => {
  const monthList = [];
  const lastDate = new Date(year, month, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay();
  const week = Math.ceil((firstDay + lastDate) / 7);

  for (let i = 1; i <= week; i++) {
    const weekList = [];
    if (i === 1) {
      const prevLastDate = new Date(year, month - 1, 0).getDate();
      for (let j = 1; j <= 7; j++) {
        if (j <= firstDay) {
          const day = prevLastDate - firstDay + j;
          const date = {
            year: month - 1 === 0 ? year - 1 : year,
            month: month - 1 === 0 ? 12 : month - 1,
            day,
          };
          weekList.push(date);
        } else {
          const day = j - firstDay;
          const date = {year, month, day};
          weekList.push(date);
        }
      }
    } else {
      const startDate = (i - 1) * 7;
      for (let j = startDate; j <= i * 7 - 1; j++) {
        if (j - firstDay < lastDate) {
          const day = j - firstDay + 1;
          const date = {year, month, day};
          weekList.push(date);
        } else {
          const day = j - lastDate - firstDay + 1;
          const date = {
            year: month + 1 === 13 ? year + 1 : year,
            month: month + 1 === 13 ? 1 : month + 1,
            day,
          };
          weekList.push(date);
        }
      }
    }
    monthList.push(weekList);
  }
  return monthList;
};

export default makeMonth;
