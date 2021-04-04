import React from 'react';
import MFormControl from '@material-ui/core/FormControl';
import MMenuItem from '@material-ui/core/MenuItem';
import MInputLabel from '@material-ui/core/InputLabel';
import MSelect from '@material-ui/core/Select';
import { v4 as uuidv4 } from 'uuid';

export interface SelectItem {
  value: string,
  text: string
}

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string,
  items: SelectItem[]
}

export const Select = ({ label, items, ...rest }: SelectProps) => {
  const id = uuidv4();
  return (
    <MFormControl>
      <MInputLabel id={`label {id}`}>{label}</MInputLabel>
      <MSelect labelId={`label {id}`} id={id}>
        {items.map((item) => (
          <MMenuItem value={item.value}>{item.text}</MMenuItem>
        ))}
      </MSelect>
    </MFormControl>
  )
};