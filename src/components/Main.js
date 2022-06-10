import * as React from 'react';

import MainCard from './MainCard';
import cardData from "./cardData";

import BooKNowButton from './BookNowBtn';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Main() {
    const cards = cardData.map(item => { return (
        <MainCard 
            key={item.id}
            item={item}
        />
        
    )})
 
  console.log(cards);
  return (
        <>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
             Who are we?
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary" paragraph>
            Mirai Nails is a Nail Salon based in the city center of Amsterdam. We offer Manicures, Pedicures (upon request), BIAB, Shellac Gel Polish, Nail Extensions and Nail Art in a nicely decorated salon with a relaxed atmosphere.
            You can choose from around 150 colors. We use the product from First Street, The Gel Bottle and Macena.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >  
            <BooKNowButton />
            <Button className="mirai-outline-button" href="https://www.instagram.com/mirai.nails/?r=nametag" variant="outlined">
                Book via  DM <InstagramIcon /> 
            </Button>
            </Stack>

            <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            
          }}
          className="mirai-cards-list"
          
         
        >
                {cards}
            </Box>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
             How to get to our salon?
            </Typography>
            <Typography  variant="body2" align="center" color="text.secondary" paragraph>
            Our nail studio is within a walking distance from Amsterdam Central Station.
            For public transport you can take tram 1, 2, 13, 15 or 17 from Central Station. Tram stop Nieuwezijds Kolk or Dam is a 1-minute walk away from our salon.
            We don’t recommend you to visit our salon with a car. But if you do, there are parking garages nearby. The nearest one to our salon is Q-Park Bijenkorf.
            </Typography>
           
          </Container>
          
        </Box>
        
        </>
    
  );
}