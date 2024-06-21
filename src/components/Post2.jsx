import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post2 = () => {
  return (
    <div>
       <Card sx={{ margin:5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "grey" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Raul Hernadez"
        subheader="July 10, 2024"
      />
        <CardMedia
          component="img"
          height="20%"
          src="./Images/rain_florest_img.jpg"
          alt="Green waterfall"
        />



      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The rainforest, rich in biodiversity, is vital for the global climate and oxygen production. 
        Its dense canopies shelter countless species, 
        making it an essential ecosystem that we must protect.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      
      </CardActions>
      </Card>
    </div>
  )
}

export default Post2