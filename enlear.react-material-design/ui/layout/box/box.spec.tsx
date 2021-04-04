import React from 'react';
import { render } from '@testing-library/react';
import { BlueBox, RedBox, GreenBox } from './box.composition';

describe('box', () => {

  it('blue box should have the blue color text', () => {
    const { getByText } = render(<BlueBox />);
    const rendered = getByText('Blue Background Box');
    expect(rendered).toBeTruthy();
  });

  it('red box should have the red color text', () => {
    const { getByText } = render(<RedBox />);
    const rendered = getByText('Red Background Box');
    expect(rendered).toBeTruthy();
  });

  it('green box should have the green color text', () => {
    const { getByText } = render(<GreenBox />);
    const rendered = getByText('Green Background Box');
    expect(rendered).toBeTruthy();
  });

})