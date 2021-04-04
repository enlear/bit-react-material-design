import React from 'react';
import { render } from '@testing-library/react';
import { BasicContainer } from './container.composition';

describe('container', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicContainer />);
    const rendered = getByText('hello from Container');
    expect(rendered).toBeTruthy();
  });

})