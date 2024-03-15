import { format } from 'date-fns/format';

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

// Note: False positive if date format changes
export const getFormattedDate = (date: Date) => {
  return `${format(date, 'LLLL')} ${format(date, 'yyyy')}`;
};
