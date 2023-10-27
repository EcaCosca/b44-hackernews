import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({post}) {

  return (
    <Card sx={{ minWidth: 275, maxWidth: 300 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {"Post by: "+post.author}
        </Typography>
        <Typography variant="body2">
          {"Posted on "+post.created_at.split("T")[0].split("-").reverse().join('/')+" at "+post.created_at.split("T")[1].split("Z")[0]}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href={post.url} target="_blank">Learn more</a></Button>
      </CardActions>
    </Card>
  );
}