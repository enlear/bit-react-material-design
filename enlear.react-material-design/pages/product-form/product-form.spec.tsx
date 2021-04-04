import React from 'react';
import { render } from '@testing-library/react';
import { BasicProductForm } from './product-form.composition';

describe('product-form', () => {

  it('should render with product name input item', () => {
    const { getByText } = render(<BasicProductForm />);
    const rendered = getByText('Product Name');
    expect(rendered).toBeTruthy();
  });

})