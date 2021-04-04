import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const Card = ( {children, ...rest}: CardProps ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};