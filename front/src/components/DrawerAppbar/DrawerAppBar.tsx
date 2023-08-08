import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = ["Como funciona?", "Precios y servicios", "Nosotros", "F.A.Q"];

export function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Lautus
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              textAlign: "center",
              backgroundColor: "#5CBBA8",
              margin: "0 3vw",
              borderRadius: ".5rem",
            }}
          >
            <ListItemText primary={"Sort the mess now!"} />
          </ListItemButton>
        </ListItem>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: {
              xs: "space-between",
              sm: "space-evenly",
            },
            backgroundColor: "#5CBBA8",
            color: "#02082B",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "block" }}
            // onClick={() => navigate("/")}
          >
            Lautus: Private Cleaning Service
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <h1>Lets sort that mess now!</h1>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: "#02082B" }}>
                {item}
              </Button>
            ))} */}
          </Box>
          {/* <Box
            sx={{
              display: "flex",
            }}
          >
            <Button
              variant="outlined"
              onClick={() => console.log("login")}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                },
                borderColor: "#02082B",
                mr: "1vw",
                color: "#02082B",
              }}
            >
              <ListItemText
                primary={"Ingresa"}
                // onClick={() => navigate("/login")}
              />
            </Button>
            <Button
              variant="outlined"
              onClick={() => console.log("signup")}
              sx={{
                backgroundColor: "#5CBBA8",
                color: "white",
              }}
            >
              Agenda ahora
            </Button>
          </Box> */}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
