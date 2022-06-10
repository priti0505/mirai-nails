import * as React from 'react';
import Container from '@mui/material/Container';
import Pricelist from './components/Pricelist';
import priceData from './components/priceData';


export default function Services() {
    const price = priceData.map(item => { return (
        <Pricelist 
            key={item.id}
            item={item}
        />
        
    )})
    // console.log(price);
  return( 
     
    <Container maxWidth="lg"> 
       {price} 
    </Container>    
  );
}

 
