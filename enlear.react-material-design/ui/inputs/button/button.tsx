import React from 'react';
import MButton from '@material-ui/core/Button';

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <MButton variant="contained" color="secondary">{children}</MButton>
  )
};