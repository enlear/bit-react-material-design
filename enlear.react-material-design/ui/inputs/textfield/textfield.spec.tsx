import React from 'react';
import { render } from '@testing-library/react';
import { BasicTextfield } from './textfield.composition';

describe('textfield', () => {

  it('should render with the correct text', () => {
    const { getByRole } = render(<BasicTextfield />);
    const rendered = getByRole('input');
    expect(rendered).toBeTruthy();
  });

})