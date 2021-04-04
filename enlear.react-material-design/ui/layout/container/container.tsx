import React from 'react';
import MUContainer from '@material-ui/core/Container';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Determine the max-width of the container. The container width grows with the size of the screen. Set to false to disable maxWidth.
   */
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | false,
  /**
   * 	Set the max-width to match the min-width of the current breakpoint. This is useful if you'd prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport. It's fluid by default.
   */
  fixed?: boolean
};

export const Container = ({ fixed, size, children, ...rest }: ContainerProps) => {
  return (
    <MUContainer fixed={fixed} maxWidth={size}  {...rest}>{children}</MUContainer>
  )
};