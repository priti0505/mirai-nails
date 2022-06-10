import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function MainCard(props) {
  return (  
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={'../images/nailImages/'+props.item.coverImg}
        alt={props.item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="mirai-link">Learn More</Button>
      </CardActions>
  </Card>
       
    
  );
}