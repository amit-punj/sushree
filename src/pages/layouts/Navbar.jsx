import { Link as LinkRouter } from "react-router-dom";
// import { useAuth } from "./Auth/Hook/useAuth";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Link from "@mui/material/Link";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

export default function Navbar() {
  // const { logout } = useAuth()
  const logout = () => {};
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <LinkRouter to="/account/wall" className="site-title">
              YourQuestion
            </LinkRouter>
          </Typography>
          <nav>
            <CustomLink to="/account/wall">Wall</CustomLink>
            <CustomLink to="/account/message">Message</CustomLink>
            <CustomLink to="/account/notice">Notice</CustomLink>
            <CustomLink to="/account/friends">Friends</CustomLink>
          </nav>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={"Открыть настройки"}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={"profile"} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <CustomLink to="/account/profile">Profile</CustomLink>
                </Typography>
              </MenuItem>
              <MenuItem key={"setting"} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <CustomLink to="/account/profile">Profile</CustomLink>
                </Typography>
              </MenuItem>
              <MenuItem key={"logout"} onClick={logout}>
                <Typography textAlign="center">
                  <CustomLink to="/account/logout">LogOut</CustomLink>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  return (
    <>
      <Link
        component="span"
        variant="button"
        color="text.primary"
        style={{ textDecoration: "none" }}
        sx={{ my: 1, mx: 1.5 }}
      >
        <LinkRouter to={to} {...props}>
          {children}
        </LinkRouter>
      </Link>
    </>
  );
}
