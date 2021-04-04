import React from 'react';

export interface RadioProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const Radio = ( {children, ...rest}: RadioProps ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};