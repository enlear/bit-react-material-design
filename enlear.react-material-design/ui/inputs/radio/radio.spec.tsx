import React from 'react';
import { getAllByRole, render } from '@testing-library/react';
import { BasicRadio } from './radio.composition';

describe('radio', () => {

  it('should contain three inputs', () => {
    const { getByText } = render(<BasicRadio />);
    const itemOne = getByText('Item One');
    expect(itemOne).toBeTruthy();

    const itemTwo = getByText('Item Two');
    expect(itemTwo).toBeTruthy();

    const itemThree = getByText('Item Three');
    expect(itemThree).toBeTruthy();
  });

})