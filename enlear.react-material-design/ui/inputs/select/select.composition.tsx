import React from 'react';
import { Select } from './select';

// sets the Component preview in gallery view

const items = [
  { text: "Item One", value: "1" },
  { text: "Item Two", value: "2" },
  { text: "Item Three", value: "3" }
]
export const BasicSelect = () => {
  return <Select label="Select Item" items={items} />;
};

export const BasicSelectEvent = () => {
  return <Select label="Select Item" items={items} onChange={() => { alert("New selection"); }} />;
};

export const BasicSelectDisbled = () => {
  return <Select label="Select Item" items={items} disabled={true} />;
};

