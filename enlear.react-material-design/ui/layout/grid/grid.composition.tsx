import React from 'react';
import { Box } from '@enlear/react-material-design.ui.layout.box'
import { Grid } from './grid';

// sets the Component preview in gallery view
export const BasicGrid = () => {
  return <Grid container={true}>
    <Grid item={true} sm={4} spacing={2}>
      <Box bgColor="black" >Black Box in Grid</Box>
    </Grid>
    <Grid item={true} sm={4} spacing={2}>
      <Box bgColor="blue">Blue Box in Grid</Box>
    </Grid>
    <Grid item={true} sm={4} spacing={2}>
      <Box bgColor="green">Green Box in Grid</Box>
    </Grid>
    <Grid item={true} sm={4} spacing={2}>
      <Box bgColor="grey">Grey Box in Grid</Box>
    </Grid>
    <Grid item={true} sm={4} spacing={2}>
      <Box bgColor="red">Red Box in Grid</Box>
    </Grid>
    <Grid item={true} sm={4} spacing={2}>
      <Box bgColor="yellow">Yellow Box in Grid</Box>
    </Grid>
  </Grid>;
};
