import MUFormControl from '@material-ui/core/FormControl';
import MUFormControlLabel from '@material-ui/core/FormControlLabel';
import MUFormLabel from '@material-ui/core/FormLabel';
import MURadio from '@material-ui/core/Radio';
import MURadioGroup from '@material-ui/core/RadioGroup';
import React from 'react';

export interface RadioProps {
  /**
    * Label for the radio button group
   */
  label: string,
  /**
   * Selected value for the radio button group
   */
  value: string,
  /**
    * Items array for the radio button group
  */
  items: {
    text: string,
    value: string,
    disabled?: boolean
  }[],
  /**
   * Signature: function(event: object) => void event: The event source of the callback. You can pull out the new value by accessing event.target.value (string). You can pull out the new checked state by accessing event.target.checked (boolean)
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
};

export const Radio = ({ label, value, items, onChange }: RadioProps) => {
  return (
    <MUFormControl component="fieldset">
      <MUFormLabel component="legend">{label}</MUFormLabel>
      <MURadioGroup aria-label={label} name={label} value={value} onChange={onChange}>
        {items.map((item, key) => (
          <MUFormControlLabel key={key} value={item.value} control={<MURadio />} label={item.text} disabled={item.disabled} />
        ))}
      </MURadioGroup>
    </MUFormControl>
  )
};