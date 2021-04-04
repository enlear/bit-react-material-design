import React from 'react';
import { render } from '@testing-library/react';
import { BasicProducts } from './products.composition';

describe('products', () => {

  it('should contain 4 products in the grid', () => {
    const { getAllByText } = render(<BasicProducts />);
    const rendered = getAllByText('Buy');
    expect(rendered).toHaveLength(4);
  });

})