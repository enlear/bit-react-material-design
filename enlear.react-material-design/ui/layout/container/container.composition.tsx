import React from 'react';
import { Container } from './container';

// sets the Component preview in gallery view
export const SmallContainer = () => {
  return <Container size="sm">Small Container</Container>;
};

export const MediumContainer = () => {
  return <Container size="md">Medium Container</Container>;
};

export const LargeContainer = () => {
  return <Container size="lg">Large Container</Container>;
};
