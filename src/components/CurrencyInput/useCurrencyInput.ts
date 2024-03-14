import React from 'react';

const useCurrecyInput = () => {
  const [amount, setAmount] = React.useState<number | undefined>(undefined);
  const [formattedAmount, setFormattedAmount] = React.useState('');

  const handleAmountChange = (
    value: string | undefined,
    formattedValue: string = ''
  ) => {
    setAmount(Number(value) || undefined);
    setFormattedAmount(formattedValue);
  };

  return { amount, formattedAmount, handleAmountChange };
};

export default useCurrecyInput;
