import React from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const Grid = ( {children, ...rest}: GridProps ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};