import { Avatar, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import AvatarGroup from '@mui/material/AvatarGroup';
import React from 'react'

const Rightbar = () => {
  return (
    <Box 
    bgcolor="" 
    flex={2} 
    p={2}
    sx={{display: {xs: "none", sm: "block"}}}>
      <Box position="" width={300}>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/Images/dogHappy.jpeg" />
          <Avatar alt="Travis Howard" src="/Images/cat_img.jpg" />
          <Avatar alt="Cindy Baker" src="/Images/DogHappy2_img.jpg" />
          <Avatar alt="Agnes Walker" src="/Images/timeToBath_img.jpg" />
          <Avatar alt="Trevor Henderson" src="/Images/dogwash.webp" />
        </AvatarGroup>

        <Typography>
          Latest photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="/Images/nature1_img.jpg" alt="nature1" />
          </ImageListItem>
          <ImageListItem>
            <img src="/Images/nature2_img.jpg" alt="nature2" />
          </ImageListItem>
          <ImageListItem>
            <img src="/Images/nature3_img.jpg" alt="nature3" />
          </ImageListItem>
          <ImageListItem>
            <img src="/Images/nature4_img.jpg" alt="nature4" />
          </ImageListItem>
          <ImageListItem>
            <img src="/Images/nature5_img.jpg" alt="nature5" />
          </ImageListItem>
          <ImageListItem>
            <ImageListItem>
              <img src="/Images/nature6_img.jpg" alt="nature6" />
            </ImageListItem>
          </ImageListItem>          
        </ImageList>

        <Typography variant='h6' fontWeight={100} mt={2}>
          Latest conversations
          </Typography>

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/Images/peopleface1_img.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/Images/peopleface2_img.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/Images/peopleface3_img.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>






      </Box>
    </Box>
  )
}

export default Rightbar
