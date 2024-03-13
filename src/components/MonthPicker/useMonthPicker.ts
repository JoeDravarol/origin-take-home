import React from 'react';
import { addMonths } from 'date-fns/addMonths';
import { isFuture } from 'date-fns/isFuture';
import { isSameMonth } from 'date-fns/isSameMonth';

const useMonthPicker = (initialDate = new Date()) => {
  const [reachDate, setReachDate] = React.useState(initialDate);

  // Typing left arrow
  React.useEffect(() => {}, []);

  // Typing right arrow
  React.useEffect(() => {}, []);

  const getPrevMonth = () => {
    const newDate = addMonths(reachDate, -1);

    if (isSameMonth(initialDate, newDate) || isFuture(newDate)) {
      setReachDate(newDate);
    }
  };

  const getNextMonth = () => {
    const newDate = addMonths(reachDate, 1);
    setReachDate(newDate);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        getPrevMonth();
        break;
      case 'ArrowRight':
        getNextMonth();
        break;
      default:
        return;
    }
  };

  return {
    reachDate,
    getPrevMonth,
    getNextMonth,
    handleKeyDown,
  };
};

export default useMonthPicker;
