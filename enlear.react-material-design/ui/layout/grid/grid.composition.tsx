import React from 'react';
import { Box } from '@enlear/react-material-design.ui.layout.box'
import { Grid } from './grid';

// sets the Component preview in gallery view
export const BasicGrid = () => {
  return <Grid container={true} spacing={2}>
    <Grid item={true} sm={4} >
      <Box bgColor="black" >Black Box in Grid</Box>
    </Grid>
    <Grid item={true} sm={4} >
      <Box bgColor="blue">Blue Box in Grid</Box>
    </Grid>
    <Grid item={true} sm={4}>
      <Box bgColor="green">Green Box in Grid</Box>
    </Grid>
    <Grid item={true} sm={4}>
      <Box bgColor="grey">Grey Box in Grid</Box>
    </Grid>
    <Grid item={true} sm={4}>
      <Box bgColor="red">Red Box in Grid</Box>
    </Grid>
    <Grid item={true} sm={4}>
      <Box bgColor="yellow">Yellow Box in Grid</Box>
    </Grid>
  </Grid>;
};
