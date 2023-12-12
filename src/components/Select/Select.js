import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';


const Wrapper = styled.div`
  width: fit-content;
  position: relative;

  &:hover > * {
    color: ${COLORS.black};
  }
`;

const SelectArrow = styled(Icon)`
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 1;
  color: ${COLORS.gray700};
`;

const SelectBox = styled.select`
  /* Remove default select arrow */
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance:none;

  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  outline-color: ${COLORS.primary};
  // to check: make this width fluid accordingly to the option selected
  width: 200px;
`;


const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectBox value={value} onChange={onChange}>
      {children}

      </SelectBox>
      <SelectArrow id="chevron-down" size="12" strokeWidth="2" />
    </Wrapper>
  );
};

export default Select;
