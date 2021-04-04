import MUFormControl from '@material-ui/core/FormControl';
import MIInputLabel from '@material-ui/core/InputLabel';
import MUMenuItem from '@material-ui/core/MenuItem';
import MUSelect from '@material-ui/core/Select';
import { makeStyles as MUStyles } from '@material-ui/core/styles';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const useStyles = MUStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export interface SelectProps  {
  /**
    * Label for the select dropdown
   */
  label: string,
  /**
    * Items array for the select dropdown
   */
  items: {
    text: string,
    value: string
  }[],
  /**
   * If true, the label is displayed as required and the input element` will be required.
   */
  required?: boolean,
  /**
   * If true, the input element will be disabled.
   */
  disabled?: boolean,
  /**
   * Signature: function(event: object) => void event: The event source of the callback. You can pull out the new value by accessing event.target.value (string).
   */
  onChange?: (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
    child: React.ReactNode
  ) => void;
}

export const Select = ({ label, required, disabled, items, onChange }: SelectProps) => {
  const id = uuidv4();
  const classes = useStyles();
  return (
    <MUFormControl variant="outlined" className={classes.formControl}>
      <MIInputLabel id={`label {id}`}>{label}</MIInputLabel>
      <MUSelect labelId={`label {id}`} defaultValue="" id={id} required={required} disabled={disabled} onChange={onChange} className={classes.selectEmpty}>
        {items.map((item, key) => (
          <MUMenuItem key={key} value={item.value}>{item.text}</MUMenuItem>
        ))}
      </MUSelect>
    </MUFormControl>
  )
};