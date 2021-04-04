import React from 'react';

export interface ProductsProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const Products = ( {children, ...rest}: ProductsProps ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};