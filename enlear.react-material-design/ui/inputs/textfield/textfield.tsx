import MTextField from '@material-ui/core/TextField';
import React from 'react';

export interface TextfieldProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
    * If true, the button will be disabled.
    */
  label: string,
  /**
   * Handler for mouse click event
   */
  onClick?: React.MouseEventHandler,
  /**
   * Handler for text change event
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>
};

export const Textfield = ({ label, onClick, onChange }: TextfieldProps) => {
  return (
    <MTextField label={label} variant="outlined" onClick={onClick} onChange={onChange} />
  )
};