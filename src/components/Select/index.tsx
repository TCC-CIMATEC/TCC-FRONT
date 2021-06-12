import React, { ChangeEvent } from 'react';

import { BiChevronDown } from 'react-icons/bi';
import { Container, SelectBox } from './styles';

interface SelectProps {
  options: string[];
  defaultValue?: number;
  className?: string;
  setSelectValue: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  defaultValue,
  className,
  setSelectValue,
}) => {
  const handleGetSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.currentTarget.value);
  };
  return (
    <Container className="select-container">
      <SelectBox
        value={defaultValue}
        className={className}
        onChange={handleGetSelect}
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </SelectBox>
      <BiChevronDown className="arrow" />
    </Container>
  );
};

export default Select;
