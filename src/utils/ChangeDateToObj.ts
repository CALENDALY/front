const ChangeDateToObj = (pDay: string) => {
  const newDate = new Date(pDay);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return {year, month, day};
};

export default ChangeDateToObj;
