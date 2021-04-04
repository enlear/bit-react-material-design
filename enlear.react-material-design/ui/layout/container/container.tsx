import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const Container = ( {children, ...rest}: ContainerProps ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};