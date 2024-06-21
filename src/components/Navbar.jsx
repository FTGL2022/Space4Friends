import { AppBar, Avatar, InputBase, Menu, Toolbar, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuItem from '@mui/material/MenuItem';



const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%"
}));

const Icons = styled("Box")(({theme})=>({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}) )

const UserBox = styled("Box")(({theme})=>({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}) )



const Navbar = () => {

    const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>Space4Friends</Typography>
        <TagFacesIcon sx={{display:{xs:"block", sm:"block"}}} /> 
           <Search><InputBase placeholder="search..."/></Search>
            <Icons>
            <Badge badgeContent={4} color="error">
      <MailIcon />
    </Badge>
    <Badge badgeContent={2} color="error">
      <NotificationsIcon  />
    </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="/Images/dogHappy.jpeg"

          onClick={(e) => setOpen(true)} />
            </Icons>
            <UserBox onClick= {(e) => setOpen(true)} >
            <Avatar sx={{ width: 30, height: 30 }} 
            src="../../public/Images/dogHappy.jpg"
            />
            <Typography variant="span">Chico</Typography>
            </UserBox>
        </StyledToolbar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=> setOpen(false)}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
