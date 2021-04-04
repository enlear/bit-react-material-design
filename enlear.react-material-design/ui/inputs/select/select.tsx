import MFormControl from '@material-ui/core/FormControl';
import MInputLabel from '@material-ui/core/InputLabel';
import MMenuItem from '@material-ui/core/MenuItem';
import MSelect from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
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
    value: string,
    text: string
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
    <MFormControl variant="outlined" className={classes.formControl}>
      <MInputLabel id={`label {id}`}>{label}</MInputLabel>
      <MSelect labelId={`label {id}`} defaultValue="" id={id} required={required} disabled={disabled} onChange={onChange} className={classes.selectEmpty}>
        {items.map((item, key) => (
          <MMenuItem key={key} value={item.value}>{item.text}</MMenuItem>
        ))}
      </MSelect>
    </MFormControl>
  )
};