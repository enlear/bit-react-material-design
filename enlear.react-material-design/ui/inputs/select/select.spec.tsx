import { render } from '@testing-library/react';
import React from 'react';
import { BasicSelect } from './select.composition';

describe('select', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicSelect />);
    const rendered = getByText('Age');
    expect(rendered).toBeTruthy();
  });

})