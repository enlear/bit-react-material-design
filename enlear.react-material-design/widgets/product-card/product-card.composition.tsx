import React from 'react';
import { ProductCard } from './product-card';

// sets the Component preview in gallery view
export const BasicProductCard = () => {
  return <ProductCard
    title={"Strawberry"}
    description={"Fresh strawberries from the worlds best green farms"}
    image={"https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_960_720.jpg"}>
  </ProductCard>
};
