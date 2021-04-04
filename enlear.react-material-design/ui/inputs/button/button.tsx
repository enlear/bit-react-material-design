import React from 'react';
import MButton from '@material-ui/core/Button';

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
    * If true, the button will be disabled.
   */
  disabled?: boolean,
  /**
   * The URL to link to when the button is clicked. If defined, an a element will be used as the root node.
   */
  href?: string,
  /**
   * Handler for OnClick event
   */
  onClick?: React.MouseEventHandler
};

export const Button = ({ href, onClick, disabled, children }: ButtonProps) => {
  return (
    <MButton variant="outlined" color="primary" disabled={disabled} href={href} onClick={onClick}>{children}</MButton>
  )
};