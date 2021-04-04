import { Button } from '@enlear/react-material-design.ui.inputs.button';
import { Radio } from '@enlear/react-material-design.ui.inputs.radio';
import { Select } from '@enlear/react-material-design.ui.inputs.select';
import { Textfield } from '@enlear/react-material-design.ui.inputs.textfield';
import { Box } from '@enlear/react-material-design.ui.layout.box';
import { Container } from '@enlear/react-material-design.ui.layout.container';
import { Appbar } from '@enlear/react-material-design.ui.surfaces.appbar';
import React from 'react';

export const ProductForm = () => {
  return (<Container>
    <Appbar title="New Product"></Appbar>
    <Box bgColor="white"></Box>
    <Container>
        <Textfield label="Product Name"></Textfield>
        <Box bgColor="white"></Box>
        <Textfield label="Product Details"></Textfield>
        <Box bgColor="white"></Box>
        <Select label="Select Type" items={[
          { text: "Fruits", value: "1" },
          { text: "Vegetables", value: "2" },
          { text: "Meat", value: "3" },
          { text: "Fish", value: "4" }
        ]} />
        <Box bgColor="white"></Box>
        <Radio label="Manufactured Year" items={[
          { text: "2020", value: "1" },
          { text: "2021", value: "2" }
        ]} />
        <Box bgColor="white"></Box>
        <Button>Create New Product</Button>
    </Container>
  </Container>
  )
};