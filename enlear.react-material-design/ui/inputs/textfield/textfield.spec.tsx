import React from 'react';
import { getByText, render } from '@testing-library/react';
import { BasicTextfield } from './textfield.composition';

describe('textfield', () => {

  it('should render text input', () => {
    const { getAllByText } = render(<BasicTextfield />);
    const rendered = getAllByText('Text Input');
    expect(rendered).toBeTruthy();
  });

})