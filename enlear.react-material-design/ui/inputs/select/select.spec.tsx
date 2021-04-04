import { render } from '@testing-library/react';
import React from 'react';
import { BasicSelect } from './select.composition';

describe('select', () => {

  it('should have a input element', () => {
    const { getByText } = render(<BasicSelect />);
    const rendered = getByText('Select Item');
    expect(rendered).toBeTruthy();
  });

})