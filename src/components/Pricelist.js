import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Pricelist(props) {
  // console.log(props.item.title);

  const details = props.item.treatments.map(({name, duration, price}) => {
    return (<>
              <Item item lg={12} md={8} className="mirai-MuiPaper-root">
                {name} {duration} 
                <span component="span" className="mirai-align-right">
                  {price} &nbsp; &nbsp;
                  <Link href="https://mirai-nails.mytreatwell.nl/services.html" underline="always" className="mirai-link">Book Now</Link>
                </span>
                </Item>
          </>)
  });

  return(  
        <Box sx={{
            pt: 8,
            width: '100%'
          }}>
              <Grid container rowSpacing={1} >
                <Grid item xs={12}  className="mirai-no-box-shadow ">
                    <Item lg={12} >
                      <Typography
                        component="h1"
                        variant="subtitle2"
                        color="text.primary"
                        gutterBottom 
                        className="mirai-service-title"
                      >
                        {props.item.title}
                      </Typography>
                    </Item>
                    {details}
                </Grid>
           </Grid>
        </Box>      
  );
}

 
