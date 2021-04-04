import { render } from '@testing-library/react';
import React from 'react';
import { BasicProductCard } from './product-card.composition';

describe('product-card', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicProductCard />);
    const rendered = getByText('Strawberry');
    expect(rendered).toBeTruthy();
  });

})