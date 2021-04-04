import React from 'react';
import { render } from '@testing-library/react';
import { BasicRadio } from './radio.composition';

describe('radio', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicRadio />);
    const rendered = getByText('hello from Radio');
    expect(rendered).toBeTruthy();
  });

})