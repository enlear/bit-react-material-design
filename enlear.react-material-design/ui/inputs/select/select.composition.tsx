import React from 'react';
import { Select } from './select';

// sets the Component preview in gallery view

const items = [
  {text: "One", value :"1"},
  {text: "Two", value :"2"},
  {text: "Three", value :"3"}
]
export const BasicSelect = () => {
  return <Select label="Age" items = { items}>hello from Select</Select>;
};
