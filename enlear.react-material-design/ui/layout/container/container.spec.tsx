import { render } from '@testing-library/react';
import React from 'react';
import { LargeContainer, MediumContainer, SmallContainer } from './container.composition';

describe('container', () => {

  it('small container should have the "Small Container" text', () => {
    const { getByText } = render(<SmallContainer />);
    const rendered = getByText('Small Container');
    expect(rendered).toBeTruthy();
  });

  it('small container should have the "Medium Container" text', () => {
    const { getByText } = render(<MediumContainer />);
    const rendered = getByText('Medium Container');
    expect(rendered).toBeTruthy();
  });

  it('small container should have the "Large Container" text', () => {
    const { getByText } = render(<LargeContainer />);
    const rendered = getByText('Large Container');
    expect(rendered).toBeTruthy();
  });

})