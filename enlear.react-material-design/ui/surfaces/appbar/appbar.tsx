import React from 'react';

export interface AppbarProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const Appbar = ( {children, ...rest}: AppbarProps ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};