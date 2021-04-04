import React from 'react';

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const ProductCard = ( {children, ...rest}: ProductCardProps ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};