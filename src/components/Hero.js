import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function Hero() {
  return (
    <Box
        sx={{
        bgcolor: 'background.paper',
        pt: 6,
        }}
       
    >
     <Container maxWidth="lg" >
     <Masonry columns={3} spacing={3} >
        {itemData.map((item, index) => (
          <div key={index}>
           
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
     </Container>
    </Box>
  );
}

const itemData = [
    {
        img: '../images/nailImages/classy-minimal-nailart.jpg',
        title: 'Basketball',
    },
  
  {
    img: '../images/nailImages/foodnailart.jpg',
    title: 'Snacks',
  },
  {
    img: '../images/nailImages/rainbow-nails.jpg',
    title: 'Mushrooms',
  },
  {
    img: '../images/nailImages/blacknailart.jpg',
    title: 'Tower',
  },
  {
    img: '../images/nailImages/swirl-nails.jpg',
    title: 'Sea star',
  },
  {
    img: '../images/nailImages/manicure-with-nail-art.jpg',
    title: 'Honey',
  },
  {
    img: '../images/nailImages/bear-nailart.jpg',
    title: 'Tree',
  },
  
  {
    img: '../images/nailImages/matisse-nail-art.jpg',
    title: 'Burger',
  },
  {
    img: '../images/nailImages/manicure.jpg',
    title: 'Camera',
  },
  
  {
    img: '../images/nailImages/mirai-nails.webp',
    title: 'Coffee',
  },
  {
    img: '../images/nailImages/mirai-nails-salon.webp',
    title: 'Mirai Nails Salon Amsterdam',
  },
  {
    img: '../images/nailImages/mirai-nails-amsterdam.webp',
    title: 'Breakfast',
  },
  

];
