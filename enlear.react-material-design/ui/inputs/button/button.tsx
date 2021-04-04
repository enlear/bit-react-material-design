import MUButton from '@material-ui/core/Button';
import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
    * If true, the button will be disabled.
   */
  disabled?: boolean,
  /**
   * Handler for mouse click event
   */
  onClick?: React.MouseEventHandler
};

export const Button = ({ onClick, disabled, children }: ButtonProps) => {
  return (
    <MUButton variant="outlined" color="primary" disabled={disabled} onClick={onClick}>{children}</MUButton>
  )
};