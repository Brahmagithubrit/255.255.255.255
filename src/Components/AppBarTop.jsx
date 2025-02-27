import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  MenuItem,
  Stack,
  Popper,
  Grow,
  ClickAwayListener,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/icons-material/Menu";

import {
  Dashboard as DashboardIcon,
  Star as StarIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SmallComponent/SearchBar";
import {useState , useEffect} from "react"

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [userVisit, setUserVisit] = useState(0);

  useEffect(() => {
    let totalVisit = localStorage.getItem("userVisit");
    let initialCount = totalVisit ? Number(totalVisit) : 0;
    setUserVisit(initialCount + 1);

    localStorage.setItem("userVisit", initialCount + 1);
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
  };

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setMenuOpen(false);
  };
  
  const handleContactMe = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    navigate("/contact");
    setMenuOpen(false);
  };
  const handleChatWithMe = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
window.location.href = "https://sayanythingbrahma.vercel.app/";    
    setMenuOpen(false);
  }
  const handleReadBlogs = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    navigate("/blog");
    setMenuOpen(false);
  }

  const drawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation("/dashboard")}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation("/sequencegame")}>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Game Studio" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation("/chessstart")}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Accept The Challenge" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            <b className="text-xl m-2">~ Dev / Brahma</b>
            <b className="text-xs m-2 lg:text-xl lg:ml-[67%] ">
              visits : {userVisit}
            </b>
          </Typography>

          <SearchBar />

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="More"
            ref={anchorRef}
            onClick={handleMenuClick}
          >
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Popper
        open={menuOpen}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
        disablePortal
        sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleCloseMenu}>
                <Stack direction="column" spacing={1} sx={{ padding: "10px" }}>
                  <MenuItem onClick={handleChatWithMe}>Chat</MenuItem>
                  <MenuItem onClick={handleReadBlogs}>Read blogs</MenuItem>
                  <MenuItem onClick={handleContactMe}>Contact Me</MenuItem>
                </Stack>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      {/* Drawer */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </Box>
  );
}
