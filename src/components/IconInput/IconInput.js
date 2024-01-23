import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const inputHeights = {
  small: 24,
  large: 36,
};

const inputPadding = {
  small: 24,
  large: 36,
};

const inputFontSize = {
  small: 14,
  large: 18,
};

const Wrapper = styled.div`
  position: relative;

  &:hover > * {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  border: 2px solid transparent;
  border-bottom: 2px solid ${COLORS.black};
  border-radius: 2px;
  outline-offset: 4px;
  height: ${(props) => inputHeights[props.size]}px;
  width: ${(props) => props.$width}px;
  padding-left: ${(props) => inputPadding[props.size]}px; // 24px + 12px or 16px + 8px; The first one is icon width, the second is margin
  font-family: Roboto;
  font-size: ${(props) => inputFontSize[props.size]}px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${COLORS.gray500};

  &::placeholder {
    font-weight: 400;
  }
`;

const iconSizes = {
  small: 16,
  large: 24,
};

const iconStroke = {
  small: 1,
  large: 2,
};


const InputIcon = styled(Icon)`
  position: absolute;
  bottom: ${(props) => props.size === 24 ? 7 : 5}px; // Add 1 px of border
  color: ${COLORS.gray700};
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper>
      <VisuallyHidden><label htmlFor="searchInput">{label}</label></VisuallyHidden>
      <InputIcon id={icon} size={iconSizes[size]} strokeWidth={iconStroke[size]} />
      <Input $width={width} placeholder={placeholder} aria-label={label} name="searchInput" size={size} />
    </Wrapper>
  );
};

export default IconInput;
