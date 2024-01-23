/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

/* Create a single styles dict */
const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    /* Concentric corners: tweak the outer element to be more curved than the inner one */
    radius: 8,
  },
}

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;

  /* Trim off corners when progress bar is near-full. */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  /* Set the corners clockwise */  
  border-radius: 4px 0 0 4px;
`;

/**
 * This is a custom progress bar bc the native progress html element is kind of annoying to work with
 * With this is easier to maintain styles to all browsers and using aria props maintains accessibility
 */
const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  /* Nice way to make sure we pass valid prop values (although Typescript can take care of this too) */
  if (!styles) throw new Error('size not mapped')
  
  return (
    <Wrapper
      aria-valuenow={value}
      /* Accessibility props */
      aria-valuemin="0"
      aria-valuemax="100"
      role="progressbar" 
      /* Add styles input here as css variables */
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px',
      }}
    >
      {/* I forgot to add the accessibility in my og solution */}
      <VisuallyHidden>{value}%</VisuallyHidden>
      {/**
        * This needs to exist so we can make sure that the corners are rounding in large size.
        * Without it, the large size gets funky when near full
        */}
      <BarWrapper>
        <Bar 
          style={{
            '--width': value + '%',
            '--height': styles.height + 'px',
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
