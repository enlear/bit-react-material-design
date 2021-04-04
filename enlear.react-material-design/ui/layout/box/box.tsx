import React from 'react';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const Box = ( {children, ...rest}: BoxProps ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};