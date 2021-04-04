import MUGrid from '@material-ui/core/Grid';
import React from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Defines the align-content style property. It's applied for all screen sizes.
   */
  alignContent?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around',
  /**
   * Defines the align-items style property. It's applied for all screen sizes.
   */
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline',
  /**
   * Defines the space between the type item component. It can only be used on a type container component.
   */
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
  /**
   * Defines the number of grids the component is going to use. It's applied for the sm breakpoint and wider screens if not overridden.
   */
  sm?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  /**
   * Defines the number of grids the component is going to use. It's applied for the md breakpoint and wider screens if not overridden.
   */
  md?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  /**
   * Defines the number of grids the component is going to use. It's applied for the lg breakpoint and wider screens if not overridden.
   */
  lg?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  /**
   * 	If true, the component will have the flex container behavior. You should be wrapping items with a container.
   */
  container?: boolean,
  /**
   * If true, the component will have the flex item behavior. You should be wrapping items with a container.
   */
  item?: boolean
};

export const Grid = ({ container, item, sm, md, lg, alignContent, alignItems, spacing, children, ...rest }: GridProps) => {
  return (
    <MUGrid container={container} item={item} sm={sm} md={md} lg={lg} alignContent={alignContent} alignItems={alignItems} spacing={spacing} {...rest}>
      {children}
    </MUGrid>
  )
};