import React from 'react';
import { render } from '@testing-library/react';
import { BasicProducts } from './products.composition';

describe('products', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicProducts />);
    const rendered = getByText('hello from Products');
    expect(rendered).toBeTruthy();
  });

})