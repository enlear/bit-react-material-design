import React from 'react';
import { render } from '@testing-library/react';
import { BasicCard } from './card.composition';

describe('card', () => {

  it('should render with the correct title', () => {
    const { getByText } = render(<BasicCard />);
    const rendered = getByText('Eggs');
    expect(rendered).toBeTruthy();
  });

})