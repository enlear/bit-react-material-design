import React from 'react';
import MUBox from '@material-ui/core/Box';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Set the background color of the box
   */
  bgColor: "blue" | "red" | "yellow" | "green" | "black" | "grey" | "white"
};

const bgColorMap = {
  blue: "primary.main",
  red: "secondary.main",
  yellow: "warning.main",
  green: "success.main",
  black: "text.primary",
  grey: "text.disabled",
  white: ""
};

export const Box = ({ bgColor, children, ...rest }: BoxProps) => {
  return (
    <MUBox bgcolor={bgColorMap[bgColor]} color="primary.contrastText" p={2} {...rest}>
      {children}
    </MUBox>
  )
};