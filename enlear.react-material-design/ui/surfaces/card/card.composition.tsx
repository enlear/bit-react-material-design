import React from 'react';
import { Card } from './card';
import { Button } from '@enlear/react-material-design.ui.inputs.button';

// sets the Component preview in gallery view
export const BasicCard = () => {
  return <Card
    title={"Eggs"}
    description={"Specially selected eggs from the worlds best farms"}
    actions={[<Button key={1}>Buy</Button>, <Button key={2}>Learn More</Button>]}
    image={"https://cdn.pixabay.com/photo/2021/02/21/07/42/easter-6035549_960_720.jpg"}>
  </Card>;
};
