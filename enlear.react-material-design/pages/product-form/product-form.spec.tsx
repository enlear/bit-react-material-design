import React from 'react';
import { render } from '@testing-library/react';
import { BasicProductForm } from './product-form.composition';

describe('product-form', () => {

  it('should render the create product button', () => {
    const { getByText } = render(<BasicProductForm />);
    const rendered = getByText('Create New Product');
    expect(rendered).toBeTruthy();
  });

})