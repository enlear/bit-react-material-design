import React from 'react';

export interface ProductFormProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const ProductForm = ( {children, ...rest}: ProductFormProps ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};