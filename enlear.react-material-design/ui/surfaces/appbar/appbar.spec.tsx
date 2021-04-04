import React from 'react';
import { render } from '@testing-library/react';
import { BasicAppbar } from './appbar.composition';

describe('appbar', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicAppbar />);
    const rendered = getByText('hello from Appbar');
    expect(rendered).toBeTruthy();
  });

})