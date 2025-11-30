// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu, Home as HomeIcon, Event, Group, ContactMail, Person } from '@mui/icons-material';
import { NAV_ITEMS, CONTACT_INFO, ASSETS } from '../data/appData';

const getIcon = (name) => {
    switch (name) {
        case 'Home': return <HomeIcon />;
        case 'Events': return <Event />;
        case 'Membership': return <Person />;
        case 'Our Team': return <Group />;
        case 'Contact Us': return <ContactMail />;
        default: return <HomeIcon />;
    }
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }} className="text-ieee-blue">
        KEC COMSOC
      </Typography>
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Button
              href={item.href}
              className="text-gray-700 hover:bg-ieee-blue hover:text-white normal-case font-semibold w-full justify-start"
            >
              {getIcon(item.name)} <ListItemText primary={item.name} sx={{ ml: 1 }} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" className="shadow-lg bg-white">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo and Title */}
          <Box className="flex items-center">
            <img src={ASSETS.logoWhite} alt="IEEE ComSoc Logo" className="h-10 w-auto mr-3" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#home"
              className="font-bold text-ieee-blue hover:text-ieee-blue/90"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              IEEE COMSOC KEC
            </Typography>
          </Box>
          
          {/* Desktop Navigation */}
          <Box className="flex-grow hidden md:flex justify-end space-x-2">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:bg-ieee-blue hover:text-white normal-case font-semibold rounded-md"
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'flex-end' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              className="text-ieee-blue"
            >
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;