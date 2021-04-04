import React from 'react';
import { render } from '@testing-library/react';
import { BasicProductForm } from './product-form.composition';

describe('product-form', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicProductForm />);
    const rendered = getByText('hello from ProductForm');
    expect(rendered).toBeTruthy();
  });

})