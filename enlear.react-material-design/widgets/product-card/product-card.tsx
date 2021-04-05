import { Button } from '@enlear/react-material-design.ui.inputs.button';
import { Card } from '@enlear/react-material-design.ui.surfaces.card';
import React from 'react';

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Product title of the Card
   */
  title: string,
  /**
    * Product description of the Card
    */
  description: string,
  /**
   * Product thumbnail URL
   */
  image: string,
  /**
   * Handler for Buy click event
   */
  onBuy?: React.MouseEventHandler,
  /**
  * Handler for Learn More click event
  */
  onLearnMore?: React.MouseEventHandler
};

export const ProductCard = ({ title, description, image, onBuy, onLearnMore, ...rest }: ProductCardProps) => {
  return (
    <Card {...rest}
      title={title}
      description={description}
      actions={[<Button key={1} onClick={onBuy}>Buy</Button>, <Button key={2} onClick={onLearnMore}>Learn More</Button>]}
      image={image}>
    </Card>
  )
};