import React from 'react';
import { render } from '@testing-library/react';
import { BasicButton } from './button.composition';

describe('button', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicButton />);
    const rendered = getByText('Button Text');

    expect(rendered).toBeTruthy();
  });

  it('should render with the disabled attribute', () => {
    const { getByRole } = render(<BasicButton />);
    const rendered = getByRole('button');

    expect(rendered.hasAttribute('disabled'))
  });

})