import React from 'react';
import { Radio } from './radio';

const items = [
  { text: "Item One", value: "1" },
  { text: "Item Two", value: "2" },
  { text: "Item Three", value: "3", disabled: true }
]

// sets the Component preview in gallery view
export const BasicRadio = () => {
  return <Radio label="Radio Group" items = {items}/>
};

export const BasicRadioPreselected = () => {
  return <Radio label="Radio Group" items = {items} value="2"/>
};

export const BasicRadioEvent = () => {
  return <Radio label="Radio Group" items = {items} onChange={(e) => { alert(e.target.value); }}/>
};
