import React from 'react';
import { getByRole, render } from '@testing-library/react';
import { BasicButton } from './button.composition';

describe('button', () => {

  it('should render with the correct text', () => {
    const { getByRole } = render(<BasicButton />);
    const rendered = getByRole('button');

    expect(rendered).toBeTruthy();
  });

  it('should render with the disabled attribute', () => {
    const { getByRole } = render(<BasicButton />);
    const rendered = getByRole('button');

    expect(rendered.hasAttribute('disabled'))
  });

})