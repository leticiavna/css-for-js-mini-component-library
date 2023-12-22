import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const iconSizes = {
  small: 16,
  large: 24,
};

const inputHeights = {
  small: 24,
  large: 36,
}


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
  padding-left: ${(props) => props.size === 'large' ? 36 : 24}px; // 24px + 12px or 16px + 8px; The first one is icon width, the second is margin
  font-family: Roboto;
  font-size: ${(props) => props.size === 'large' ? 18 : 14}px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${COLORS.gray500};
`;

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
      <InputIcon id={icon} size={iconSizes[size]} s />
      <VisuallyHidden><label htmlFor="searchInput">{label}</label></VisuallyHidden>
      <Input $width={width} placeholder={placeholder} aria-label={label} name="searchInput" size={size}>

      </Input>
    </Wrapper>
  );
};

export default IconInput;
