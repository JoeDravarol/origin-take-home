import styled from 'styled-components';
import ReactCurrencyInput from 'react-currency-input-field';

import DollarSignIcon from '../../assets/icons/dollar-sign.svg?react';
import { QUERIES } from '../../constants';

type CurrencyInputProps = {
  label: string;
  value?: number;
  handleOnChange: (
    value: string | undefined,
    formattedValue: string | undefined
  ) => void;
};

const CurrencyInput = ({
  label,
  value,
  handleOnChange,
}: CurrencyInputProps) => {
  return (
    <>
      <Label htmlFor="saving-amount">{label}</Label>
      <Container>
        <DollarSignIcon />
        <Input
          id="saving-amount"
          value={value}
          placeholder="Please enter a number"
          decimalsLimit={2}
          allowNegativeValue={false}
          onValueChange={(value, _, values) =>
            handleOnChange(value, values?.formatted)
          }
        />
      </Container>
    </>
  );
};

export default CurrencyInput;

const Label = styled.label`
  font-size: 0.75rem;
  color: var(--color-secondary);

  @media ${QUERIES.tabletAndUp} {
    font-size: 0.875rem;
  }
`;

const Container = styled.div`
  --spacing: 16px;
  margin-top: 6px;
  padding: var(--spacing);
  padding-right: 4px;

  border: 1px solid var(--color-gray-700);

  display: flex;
  align-items: center;

  & svg {
    min-width: 24px;
    margin-left: calc((var(--spacing) - 12px) * -1);
    margin-right: 8px;
  }

  @media ${QUERIES.tabletAndUp} {
    padding-block: 12px;
  }
`;

const Input = styled(ReactCurrencyInput)`
  font-family: var(--font-family-sans-serif-header);
  font-size: 1.25rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-200);

  border: transparent;
  max-width: 88%;
`;
