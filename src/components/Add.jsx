import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
import React from "react";


const StyledModal = styled(Modal)({
  display: "flex",
  alignItemns: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItemns: "center",
  gap: "10px",
  marginBottom: "20px",
});




const AddPostButton = ({ onClick }) => {

  const [open, setOpen] = React.useState(false);
  return (
    <>
    <Tooltip title="Add New Post" arrow 
    sx={{position: "fixed", bottom: 20, left: {xs:"calc(50% - 25px)" , md:30} }}>
      <Fab color="primary" aria-label="add-post" onClick={e=> setOpen(true)}>
        <AddIcon />
      </Fab>
    </Tooltip>
    < StyledModal
        open={open}
        onClose={e=> setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} 
        bgcolor={"background.default"}
         color={"text.primary"} 
        padding={3} 
        borderRadius={5}>
         
         <Typography variant='h6' 
         color={"grey"}
         textAlign={"center"} > Create Post</Typography>

         <UserBox>
            <Avatar
              src="/Images/peopleface1_img.jpg"

          sx={{width:30, height:30}} />
          <Typography fontWeight={500} variant='span'>
            Jonh Lee
          </Typography>
         </UserBox>

         <TextField
         sx={{width: "100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder='What is on your mind?'
          variant="standard"
        />

        <Stack direction="row" gap={1}> </Stack>
        <EmojiEmotionsIcon color='primary' />
        <ImageIcon color='secondary' />
        <VideocamIcon color='success' />
        <PersonAddIcon color='error' />

        <ButtonGroup fullWidth
         variant="contained" 
         aria-label="Basic button group">
            
            <Button>Post</Button>
            <Button sx={{width:"100px"}}> 
              <DateRangeIcon />
               </Button>
 
</ButtonGroup>

        </Box>
      </StyledModal>
    </>
    

  );
};

export default AddPostButton;