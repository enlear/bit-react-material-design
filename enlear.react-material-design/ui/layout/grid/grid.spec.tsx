import React from 'react';
import { render } from '@testing-library/react';
import { BasicGrid } from './grid.composition';

describe('grid', () => {

  it('should render black box in grid', () => {
    const { getByText } = render(<BasicGrid />);
    const rendered = getByText('Black Box in Grid');
    expect(rendered).toBeTruthy();
  });

})