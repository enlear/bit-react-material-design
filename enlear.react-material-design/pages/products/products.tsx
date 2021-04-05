import { Box } from '@enlear/react-material-design.ui.layout.box';
import { Container } from '@enlear/react-material-design.ui.layout.container';
import { Grid } from '@enlear/react-material-design.ui.layout.grid';
import { Appbar } from '@enlear/react-material-design.ui.surfaces.appbar';
import { ProductCard } from '@enlear/react-material-design.widgets.product-card';
import React from 'react';

const products = [{
  title: "Strawberry",
  description: "Fresh strawberries from the worlds best  green farms",
  image: "https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_960_720.jpg"
},
{
  title: "Banana",
  description: "Specially selected bannanas from the worlds best farms",
  image: "https://cdn.pixabay.com/photo/2018/09/24/20/12/bananas-3700718_960_720.jpg"
},
{
  title: "Mango",
  description: "Specially selected mangos from the worlds best farms",
  image: "https://cdn.pixabay.com/photo/2016/03/05/22/18/food-1239241_960_720.jpg"
},
{
  title: "Apple",
  description: "Specially selected apples from the worlds best farms",
  image: "https://cdn.pixabay.com/photo/2017/09/26/13/21/apple-2788599_960_720.jpg"
}
]

export const Products = () => {
  return (
    <Container>
      <Appbar title="Products"></Appbar>
      <Box bgColor="white"></Box>
      <Container>
        <Grid container={true} spacing={2}>
          {products.map((product, key) => (
            <Grid item={true} md={3} key={key}>
              <ProductCard
                title={product.title}
                description={product.description}
                image={product.image}
                onBuy={() => { alert("Your purchase request is recorded!"); }}
                onLearnMore={() => { alert("You have clicked Learn More about the fruit!"); }}
              ></ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  )
};