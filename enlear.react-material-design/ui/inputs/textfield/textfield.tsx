import React from 'react';

export interface TextfieldProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const Textfield = ( {children, ...rest}: TextfieldProps ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};