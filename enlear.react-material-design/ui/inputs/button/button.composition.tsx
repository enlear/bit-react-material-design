import React from 'react';
import { Button } from './button';

// sets the Component preview in gallery view
export const BasicButton = () => {
  return <Button>Button Text</Button>;
};

export const BasicButtonDisabled = () => {
  return <Button disabled={true}>Button Text</Button>;
};

export const BasicButtonClick = () => {
  return <Button onClick={() => { alert('clicked') }}>Button Text</Button>;
};
