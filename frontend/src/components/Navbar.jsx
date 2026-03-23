import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ background: "#0f172a" }}>
      <Grid container sx={{ padding: "12px" }}>
        <Box sx={{ flexGrow: 1 }}>
          
          <AppBar
            position="static"
            elevation={6}
            sx={{
              background: "linear-gradient(90deg, #0f172a, #1e3a8a, #7c3aed)",
              borderRadius: "16px",
              px: 2,
            }}
          >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              
              {/* Logo */}
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Pacifico", cursive',
                  color: "#fff",
                }}
              >
                Job Portal
              </Typography>

              {/* Desktop Buttons */}
              <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
                <Button
                  variant="contained"
                  href="http://localhost:3000"
                  sx={{
                    borderRadius: "20px",
                    background: "#22c55e",
                    textTransform: "none",
                    fontFamily: '"Manrope", sans-serif'
                  }}
                >
                  Home
                </Button>

                <Button
                  variant="contained"
                  href="http://localhost:3000/create"
                  sx={{
                    borderRadius: "20px",
                    background: "#facc15",
                    color: "#000",
                    textTransform: "none",
                    fontFamily: '"Manrope", sans-serif'
                  }}
                >
                  Add Job
                </Button>
              </Box>

              {/* Mobile Hamburger */}
              <IconButton
                sx={{ display: { xs: "block", sm: "none" }, color: "#fff" }}
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>

            </Toolbar>
          </AppBar>

          {/* Styled Drawer */}
          <Drawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
              sx: {
                width: 220,
                background: "linear-gradient(180deg, #0f172a, #1e293b)",
                color: "#fff",
                borderTopLeftRadius: "16px",
                borderBottomLeftRadius: "16px",
                px: 2,
                py: 2,
              }
            }}
          >
            <Box>

              {/* Menu Title */}
              <Typography
                sx={{
                  fontFamily: '"Pacifico", cursive',
                  fontSize: "20px",
                  textAlign: "center",
                  mb: 3,
                  color: "#38bdf8",
                }}
              >
                Menu
              </Typography>

              <List>

                <ListItem
                  button
                  component="a"
                  href="/"
                  sx={{
                    borderRadius: "10px",
                    mb: 1,
                    "&:hover": {
                      background: "#334155",
                    }
                  }}
                >
                  <ListItemText
                    primary="Home"
                    primaryTypographyProps={{
                      fontFamily: '"Manrope", sans-serif',
                      fontWeight: 500,
                      color: "#e2e8f0",
                    }}
                  />
                </ListItem>

                <ListItem
                  button
                  component="a"
                  href="/create"
                  sx={{
                    borderRadius: "10px",
                    "&:hover": {
                      background: "#334155",
                    }
                  }}
                >
                  <ListItemText
                    primary="Add Job"
                    primaryTypographyProps={{
                      fontFamily: '"Manrope", sans-serif',
                      fontWeight: 500,
                      color: "#e2e8f0",
                    }}
                  />
                </ListItem>

              </List>

            </Box>
          </Drawer>

        </Box>
      </Grid>
    </div>
  )
}

export default Navbar;