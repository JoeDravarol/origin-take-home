export const incrementMonthBy = (number: number, date: Date) => {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() + number);

  return newDate;
};

export const decrementMonthBy = (number: number, date: Date) => {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() - number);

  return newDate;
};
