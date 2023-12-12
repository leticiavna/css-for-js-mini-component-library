/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';


const SIZES = {
  small: '8px',
  medium: '12px',
  large: '24px',
}

const Wrapper = styled.div`
  height: ${(props) => SIZES[props.$size]};
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px 0px rgba(128, 128, 128, 0.35) inset;
  padding: ${(props) => props.$size === 'large' ? '4px' : 0};
`;

const Bar = styled.div`
  height: 100%;
  background-color: ${COLORS.primary};
  width: ${(props) => props.$width}%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${(props) => props.$width === 100 ? '4px' : 0};
  border-bottom-right-radius: ${(props) => props.$width === 100 ? '4px' : 0};
`;

/**
 * This is a custom progress bar bc the native progress html element is kind of annoying to work with
 * With this is easier to maintain styles to all browsers and using aria props maintains accessibility
 */
const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      aria-valuenow={value}
      aria-label="Progress bar"
      $size={size}
    >
      <Bar $width={value} $size={size} role="progressbar" />
    </Wrapper>
  );
};

export default ProgressBar;
