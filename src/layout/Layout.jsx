import { Outlet } from "react-router-dom";
import { imprimirLog } from "../utils/test";
import { useEffect, useState } from "react";
import { getUsers } from "../api/testAPi";
import { styled, useTheme } from '@mui/material/styles';

import {
  IconButton
} from "@mui/material";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LanIcon from '@mui/icons-material/Lan';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),

);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({

  background: '#D9D9D9',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



const Layout = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  useEffect(() => {

    getUsers()
      .then(data => {
        const { data: results } = data
        console.log(results);
      })
      .catch(error => console.log(error))
  })

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color={"red"}>
            MundoVinyl
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>

        <Divider />
        <List>
          <h4>Módulos</h4>
          {[
            {
              name: 'Compras',
              icon: <ShoppingBagIcon />,
              path: "/compras"
            },
            {
              name: 'Ventas',
              icon: <PointOfSaleIcon />,
              path: "/ventas"
            }
          ].map((obj, index) => (
            <ListItem key={index} disablePadding>
              <Link to={obj.path}>
                <ListItemButton>
                <ListItemIcon>
                  {obj.icon}
                </ListItemIcon>
                  <ListItemText primary={obj.name} />
                </ListItemButton>

              </Link>

            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          <h4>Catalogos</h4>
          {[
            {
              name: 'Clientes',
              icon: <GroupIcon />,
              path: "/clientes"
            },
            {
              name: 'Productos',
              icon: <InventoryIcon />,
              path: "/productos"
            },
            {
              name: 'Proveedores',
              icon: <LocalShippingIcon />,
              path: "/proveedores"
            }
          ].map((obj, index) => (
            <ListItem key={index} disablePadding>
              <Link to={obj.path}>
                <ListItemButton>
                <ListItemIcon>
                  {obj.icon}
                </ListItemIcon>
                  <ListItemText primary={obj.name} />
                </ListItemButton>

              </Link>

            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          <h4>Usuarios</h4>
          {[
            {
              name: 'Empleados',
              icon: <GroupIcon />,
              path: "/empleados"
            },
            {
              name: 'Roles',
              icon: <LanIcon />,
              path: "/roles"
            },
            {
              name: 'Salir',
              icon: <LogoutIcon />,
              path: "/"
            }
          ].map((obj, index) => (
            <ListItem key={index} disablePadding>
              <Link to={obj.path}>
                <ListItemButton>
                <ListItemIcon>
                  {obj.icon}
                </ListItemIcon>
                  <ListItemText primary={obj.name} />
                </ListItemButton>

              </Link>

            </ListItem>
          ))}
        </List>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>


    </Box>
  );
};

export default Layout;