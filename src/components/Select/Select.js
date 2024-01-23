import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from '../VisuallyHidden';

const Select = ({ id, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect id={id} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Presentational>
        {displayedValue} 
        <IconWrapper style={{ '--size': 24 + 'px' }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </Presentational>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content; 
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const Presentational = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16/16}rem; /* Could have used 1rem, but this way you can be consistante and you dont have to do the math*/
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    /* Default browser outline */
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px; /* Icon wrapper has 24px of gutter so we subtract a little*/
  margin: auto;
  width: var(--size);
  height: var(--size);
  /* Makes the chevron icon 'transparent to clicks', so the layering of elements does not matter and clicking on it activates the select below the icon */
  pointer-events: none;
`;

export default Select;
