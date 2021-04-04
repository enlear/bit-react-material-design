import React from 'react';
import { render } from '@testing-library/react';
import { BasicGrid } from './grid.composition';

describe('grid', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicGrid />);
    const rendered = getByText('hello from Grid');
    expect(rendered).toBeTruthy();
  });

})